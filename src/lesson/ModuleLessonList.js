import React from 'react'
import { PageHeader, Card, List } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import AddLesson from './AddLesson'

export default function ModuleLessonList() {
  let location = useLocation()
  return (
    <>
      <PageHeader title="Integers" extra={<AddLesson />} />
      <Card style={{ margin: '8px 32px' }}
        title={<Link to={`${location.pathname}/1/contents`}>Addition of integers</Link>}
      >
        <List>
          <Link to={`${location.pathname}/1/contents/22`}>
            <List.Item ><Card size="small">Adding number with different signs</Card></List.Item>
          </Link>
          <Link to={`${location.pathname}/2/contents/12`} >
            <List.Item><Card size="small">Subraction number with same signs</Card></List.Item>
          </Link>
        </List>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        title={<Link to={`${location.pathname}/1/contents`}>Multiplication of integers</Link>}
      >
        <List>
          <Link to={`${location.pathname}/1/contents/2`} >
            <List.Item><Card size="small">Multiplying positive and negative numbers</Card></List.Item>
          </Link>
          <Link to={`${location.pathname}/1/contents/3`} >
            <List.Item><Card size="small">Why negative times a negative is positive</Card></List.Item>
          </Link>
        </List>
      </Card>
    </>
  )
}