import React from 'react'
import { PageHeader, Card, List } from 'antd'
import { Link, useLocation } from 'react-router-dom'

export default function ModuleLessonList() {
  let location = useLocation()
  return (
    <>
      <PageHeader title="Integers" />
      <Card style={{ margin: '8px 32px' }}
        title="Addition of integers"
      >
        <List>
          <Link to={`${location.pathname}/content-id`}>
            <List.Item >Adding number with different signs</List.Item>
          </Link>
          <Link to={`${location.pathname}/content-id`} >
            <List.Item>Subraction number with same signs</List.Item>
          </Link>
        </List>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        title="Multiplicaiton of integers"
      >
        <List>
          <Link to={`${location.pathname}/content-id`} >
            <List.Item>Multiplying positive and negative numbers</List.Item>
          </Link>
          <Link to={`${location.pathname}/content-id`} >
            <List.Item>Why negative times a negative is positive</List.Item>
          </Link>
        </List>
      </Card>
    </>
  )
}