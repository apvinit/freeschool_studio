import React, { useState, useEffect } from 'react'
import { Button, Input, Modal, Upload, Select, message } from 'antd'
import Form from 'antd/lib/form/Form'
import { addCourse, uploadMedia, getLanguages } from '../service/remote'
import { UploadOutlined } from '@ant-design/icons'

export default function AddCourse(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cover, setCover] = useState('')
  const [lang, setLang] = useState('')
  const [createdBy, setCreatedBy] = useState('')

  const [items, setItems] = useState([])
  const { Option } = Select

  useEffect(() => {
    getLanguages().then(resp => {
      setItems(resp.data)
    })
  }, [])

  let onCancel = () => {
    setShowModal(false)
    resetState()
  }

  let onOk = async () => {
    // validate the field
    if (!validateFields()) {
      return
    }
    const data = {
      title,
      description,
      cover,
      lang,
      created_by: createdBy,
      category_id: props.categoryID,
      draft: true
    }
    await addCourse(data)
    resetState()
    setShowModal(false)
    props.onAdded()
  }

  function validateFields() {
    if (title.length < 4) {
      message.error("Title length should be at least 4 chars")
      return false
    }
    if (lang === '') {
      message.error("Choose a language")
      return false
    }
    return true
  }

  function resetState() {
    setTitle('')
    setDescription('')
    setCover('')
    setLang('')
    setCreatedBy('')
  }

  const options = items.map(i => <Option key={i.lang}>{i.title}</Option>)

  return (
    <>
      <Button type="primary" onClick={_ => setShowModal(true)}>
        Add Course
      </Button>
      <Modal title="Add Course"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}
        destroyOnClose={true}
      >
        <Form>
          <Upload
            accept="image/*"
            customRequest={async (obj) => {
              let resp = await uploadMedia(obj.file)
              setCover(resp.data.id)
              obj.onSuccess(resp, obj.file)
            }}
          >
            <Button>
              <UploadOutlined />
              Upload
            </Button>
          </Upload>
          <div style={{ marginBottom: '8px' }}></div>
          <Input placeholder="Title" size="large"
            value={title} onChange={e => setTitle(e.target.value)} />
          <div style={{ marginBottom: '8px' }}></div>
          <Input placeholder="Description" size="large"
            value={description} onChange={e => setDescription(e.target.value)} />
          <div style={{ marginBottom: '8px' }}></div>
          <Select
            size="large"
            style={{ width: '100%' }}
            showSearch
            placeholder="Language"
            onChange={val => setLang(val)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {options}
          </Select>
          <div style={{ marginBottom: '8px' }}></div>
          <Input placeholder="Author" size="large"
            value={createdBy} onChange={e => setCreatedBy(e.target.value)} />
        </Form>
      </Modal>

    </>
  )
}