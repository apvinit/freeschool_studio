import React from 'react'
import { Card, List } from 'antd'
import { Link, useLocation } from 'react-router-dom'

export default function LessonContentList() {
  let location = useLocation()
  return (
    <>
      <Card
        title="Addition of integers"
      >
        <List>
          <Link to={`${location.pathname}/12`}>
            <List.Item> Adding number with different signs</List.Item>
          </Link>
          <Link to={`${location.pathname}/13`}>
            <List.Item>Subtraction number with same signs</List.Item>
          </Link>
        </List>

      </Card>
    </>
  )
}