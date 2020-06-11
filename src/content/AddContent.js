import React, { useState } from 'react'
import { Button, Upload, message, Input } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { UploadOutlined } from '@ant-design/icons'
import { addContent, uploadContent } from '../service/remote'

export default function AddContent(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [contentData, setContentData] = useState('')

  let onOk = async () => {
    if (title.length <= 3) {
      message.error("At least 4 characters")
      return
    }

    const data = {
      title,
      data: contentData,
      lessonID: props.lessonID
    }

    await addContent(data)

    resetState()
    setShowModal(false)
    props.onAdded()
  }

  let onCancel = () => {
    setShowModal(false)
  }

  function resetState() {
    setTitle('')
  }
  return (
    <>
      <Button type="primary" onClick={_ => setShowModal(true)}>
        Add Content
      </Button>
      <Modal
        title="Add Content"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}
        maskClosable={false}
      >
        <Upload
          accept=".mp4"
          customRequest={async (obj) => {
            let resp = await uploadContent(obj.file)
            setContentData(resp.data.id)
            obj.onSuccess(resp, obj.file)
          }}
        >
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>

        <Input placeholder="Title" size="large" value={title} onChange={e => setTitle(e.target.value)} />
      </Modal>
    </>
  )
}