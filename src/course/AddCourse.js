import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import Form from 'antd/lib/form/Form'
import { addCourse } from '../service/remote'

export default function AddCourse(props) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

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
      category_id: props.categoryID
    }
    await addCourse(data)
    resetState()
    setShowModal(false)
    props.onAdded()
  }

  function validateFields() {
    if (title.length < 4) {
      return false
    }
    return true
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
          <div style={{ marginBottom: '8px' }}></div>
          <Input placeholder="Description" size="large"
            value={description} onChange={e => setDescription(e.target.value)} />
        </Form>
      </Modal>

    </>
  )
}