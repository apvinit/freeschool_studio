import React from 'react'
import { Card, PageHeader } from 'antd'

export default function CategoryList() {
  return (
    <>
      <PageHeader title="Categories" />
      <Card title="Category Title"
        style={{ margin: '8px 32px' }} >
        <p>Category description</p>
      </Card>
      <Card title="Category Title"
        style={{ margin: '8px 32px' }} >
        <p>Category description</p>
      </Card>
    </>
  )
}