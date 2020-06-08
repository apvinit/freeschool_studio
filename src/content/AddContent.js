import React, { useState } from 'react'
import { Button, Upload, message, Input } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { UploadOutlined } from '@ant-design/icons'
import { addContent } from '../service/remote'

export default function AddContent(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')

  let onOk = async () => {
    if (title.length <= 3) {
      message.error("At least 4 characters")
      return
    }

    const data = {
      title,
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
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}
        maskClosable={false}
      >
        <Upload
          action='//jsonplaceholder.typicode.com/posts/'
          previewFile={async (file) => {
            return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
              method: 'POST',
              body: file,
            })
              .then(res => res.json())
              .then(({ thumbnail }) => thumbnail);
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