import React, { useState } from 'react'
import { Button, Input } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import Form from 'antd/lib/form/Form'
import { addLesson } from '../service/remote'

export default function AddLesson(props) {

  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  let onOk = async () => {
    if (!validateFields()) {
      return
    }
    const data = {
      title,
      description,
      module_id: props.moduleID,
      draft: true
    }
    await addLesson(data)
    resetState()
    setShowModal(false)
    props.onAdded()
  }

  let onCancel = () => {
    setShowModal(false)
  }

  function validateFields() {
    if (title.length < 3) {
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
        Add Lesson
      </Button>
      <Modal
        title="Add Lesson"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}
      >

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