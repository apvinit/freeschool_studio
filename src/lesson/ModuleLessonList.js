import React from 'react'
import { PageHeader, Card, List } from 'antd'
import { Link, useLocation } from 'react-router-dom'

export default function ModuleLessonList() {
  let location = useLocation()
  return (
    <>
      <PageHeader title="Integers" />
      <Card style={{ margin: '8px 32px' }}
        title={<Link to={`${location.pathname}/1/contents`}>Addition of integers</Link>}
      >
        <List>
          <Link to={`${location.pathname}/1/contents/22`}>
            <List.Item >Adding number with different signs</List.Item>
          </Link>
          <Link to={`${location.pathname}/2/contents/12`} >
            <List.Item>Subraction number with same signs</List.Item>
          </Link>
        </List>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        title={<Link to={`${location.pathname}/1/contents`}>Multiplication of integers</Link>}
      >
        <List>
          <Link to={`${location.pathname}/1/contents/2`} >
            <List.Item>Multiplying positive and negative numbers</List.Item>
          </Link>
          <Link to={`${location.pathname}/1/contents/3`} >
            <List.Item>Why negative times a negative is positive</List.Item>
          </Link>
        </List>
      </Card>
    </>
  )
}