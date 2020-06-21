import React, { useState, useEffect } from 'react'
import { Button, Modal, Input, message, Upload, Select } from 'antd'
import Form from 'antd/lib/form/Form'

import { addCategory, uploadMedia, getLanguages } from '../service/remote'
import { UploadOutlined } from '@ant-design/icons'

export default function AddCategory(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  const [lang, setLang] = useState('')

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

    if (cover === '') {
      message.error("Choose a icon / photo")
      return
    }

    // validate the field
    if (title.length <= 3) {
      message.error("At least 4 characters")
      return
    }

    if (lang === '') {
      message.error("Choose a language")
      return
    }

    const data = {
      title,
      cover,
      lang
    }
    await addCategory(data)
    resetState()
    setShowModal(false)
    props.onAdded()
  }

  function resetState() {
    setTitle('')
    setLang('')
  }

  const options = items.map(i => <Option key={i.lang}>{i.title}</Option>)

  return (
    <>
      <Button type="primary" onClick={_ => setShowModal(true)} >Add Category</Button>
      <Modal title="Add Category"
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
        </Form>
      </Modal>
    </>
  )
}