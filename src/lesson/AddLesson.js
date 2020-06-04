import React, { useState } from 'react'
import { Button } from 'antd'
import Modal from 'antd/lib/modal/Modal'

export default function AddLesson() {

  const [showModal, setShowModal] = useState(false)

  let onOk = () => {
    setShowModal(false)
  }

  let onCancel = () => {
    setShowModal(false)
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

        add some lessons related input here
      </Modal>
    </>
  )
}