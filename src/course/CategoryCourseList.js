import React from 'react'
import { PageHeader } from 'antd'
import { useLocation } from 'react-router-dom'

export default function CategoryCourseList() {
  let location = useLocation()
  const title = location.state.title
  return (

    <>
      <PageHeader title={title} />
    </>
  )
}