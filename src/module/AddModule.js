import React, { useState } from 'react'
import Form from 'antd/lib/form/Form'
import { Button, Input } from 'antd'
import Modal from 'antd/lib/modal/Modal'

export default function AddModule() {
  const [showModal, setShowModal] = useState('')
  const [title, setTitle] = useState('')

  let onCancel = () => {
    setShowModal(false)

  }

  let onOk = async () => {
    setShowModal(false)
    resetState()
  }

  function resetState() {

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