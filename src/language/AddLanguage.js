import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import Form from 'antd/lib/form/Form'
import { addLanguage } from '../service/remote'

export default function AddLanguage(props) {

  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [lang, setLang] = useState('')

  let onCancel = () => {
    setShowModal(false)
    resetState()
  }

  let onOk = async () => {

    // validate the field
    if (lang.length < 5) {
      message.error("At least 5 Characters")
      return
    }
    if (title.length <= 5) {
      message.error("At least 5 characters")
      return
    }

    const data = {
      lang: lang,
      title: title
    }
    await addLanguage(data).catch( _ =>
      message.error("Error adding content. Maybe language already exists.")
    )
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
      <Button type="primary" onClick={_ => setShowModal(true)} >Add Language</Button>
      <Modal title="Add Category"
        visible={showModal}
        onOk={onOk}
        onCancel={onCancel}>
        <Form>
          <Input placeholder="Language Code" size="large"
            value={lang} onChange={e => setLang(e.target.value)} /> <br /><br />
          <Input placeholder="Title" size="large"
            value={title} onChange={e => setTitle(e.target.value)} />
        </Form>
      </Modal>
    </>
  )
}