import React, { useState } from 'react'
import { Button, Modal, Input, message, Upload } from 'antd'
import Form from 'antd/lib/form/Form'

import { addCategory, uploadMedia } from '../service/remote'
import { UploadOutlined } from '@ant-design/icons'

export default function AddCategory(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  const [lang, setLang] = useState('')

  let onCancel = () => {
    setShowModal(false)
    resetState()
  }

  let onOk = async () => {

    // validate the field
    if (title.length <= 3) {
      message.error("At least 4 characters")
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
          <br />
          <Input placeholder="Title" size="large"
            value={title} onChange={e => setTitle(e.target.value)} /> <br/><br/>
          <Input placeholder="Language" size="large"
            value={lang} onChange={e => setLang(e.target.value)} />
        </Form>
      </Modal>
    </>
  )
}