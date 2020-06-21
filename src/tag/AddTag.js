import React, { useState } from 'react'
import { Button, Modal, Input, message } from 'antd'
import Form from 'antd/lib/form/Form'

import { addTag } from '../service/remote'

export default function AddTag(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')

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
      title: title
    }
    await addTag(data)
    resetState()
    setShowModal(false)
    props.onAdded()
  }

  function resetState() {
    setTitle('')
  }

  return (
    <>
      <Button type="primary" onClick={_ => setShowModal(true)} >Add Tag</Button>
      <Modal title="Add Tag"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}>
        <Form>
          <Input placeholder="Title" size="large"
            value={title} onChange={e => setTitle(e.target.value)} />
        </Form>
      </Modal>
    </>
  )
}