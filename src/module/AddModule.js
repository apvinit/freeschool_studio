import React, { useState } from 'react'
import Form from 'antd/lib/form/Form'
import { Button, Input } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { addModule } from '../service/remote'

export default function AddModule(props) {
  const [showModal, setShowModal] = useState('')
  const [title, setTitle] = useState('')

  let onCancel = () => {
    setShowModal(false)

  }

  let onOk = async () => {
    if (!validateFields()) {
      return
    }
    const data = {
      title,
      course_id: props.courseID
    }
    await addModule(data)
    resetState()
    setShowModal(false)
    props.onAdded()
  }

  function validateFields() {
    if (title.length < 3) {
      return false
    }
    return true
  }

  function resetState() {
    setTitle('')
  }

  return (
    <>
      <Button type="primary" onClick={_ => setShowModal(true)}>
        Add Course Module
      </Button>
      <Modal title="Add Course Module"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form>
          <Input placeholder="Title" size="large"
            value={title} onChange={e => setTitle(e.target.value)} />
        </Form>
      </Modal>
    </>
  )
}