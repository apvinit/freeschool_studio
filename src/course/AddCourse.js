import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import Form from 'antd/lib/form/Form'

export default function AddCourse() {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  let onCancel = () => {
    setShowModal(false)
    resetState()
  }

  let onOk = async () => {
    // validate the field
    resetState()
    setShowModal(false)
  }

  function resetState() {
    setTitle('')
    setDescription('')
  }

  return (
    <>
      <Button type="primary" onClick={_ => setShowModal(true)}>
        Add Course
      </Button>
      <Modal title="Add Course"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}>
        <Form>
          <Input placeholder="Title" size="large"
            value={title} onChange={e => setTitle(e.target.value)} />
          <div style={{marginBottom: '8px'}}></div>
          <Input placeholder="Description" size="large"
            value={description} onChange={e => setDescription(e.target.value)} />
        </Form>
      </Modal>

    </>
  )
}