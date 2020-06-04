import React from 'react'
import { PageHeader, Card, Avatar, Space, Button } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import AddCourse from './AddCourse'

export default function CategoryCourseList() {
  let location = useLocation()
  const title = location.state.title
  return (

    <>
      <PageHeader title={title} extra={<AddCourse />}/>

      <Card style={{ margin: '8px 32px' }} >
        <Avatar size="large" />
        <Space>
          <Link to={`${location.pathname}/12/modules`}>
            <h3
              style={{ display: 'inline', marginLeft: '16px' }}>
              Class 10 (Foundation Hindi)
            </h3>
          </Link>
          <Button size="small">Edit</Button>
        </Space>
      </Card>

      <Card style={{ margin: '8px 32px' }} >
        <Avatar size="large" />
        <Space>
          <Link to={`${location.pathname}/12/modules`}>
            <h3
              style={{ display: 'inline', marginLeft: '16px' }}>
              Class 9 (Foundation Hindi)
            </h3>
          </Link>
          <Button size="small">Edit</Button>
        </Space>
      </Card>

      <Card style={{ margin: '8px 32px' }} >
        <Avatar size="large" />
        <Space>
          <Link to={`${location.pathname}/12/modules`}>
            <h3
              style={{ display: 'inline', marginLeft: '16px' }}>
              Class 8 (Foundation Hindi)
            </h3>
          </Link>
          <Button size="small">Edit</Button>
        </Space>
      </Card>

    </>
  )
}