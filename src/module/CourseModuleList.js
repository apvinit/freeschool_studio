import React from 'react'
import { PageHeader, Card } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import AddModule from './AddModule'

export default function CourseModuleList() {

  let location = useLocation()

  return (
    <>
      <PageHeader title="Course Modules / Syllabus"
        extra={<AddModule />} />
      <Card style={{ margin: '8px 32px' }}
        headStyle={{ fontSize: '24px' }}
        title="Integers">
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Multiplication of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        headStyle={{ fontSize: '24px' }}
        title="Integers">
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Multiplication of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        headStyle={{ fontSize: '24px' }}
        title="Integers">
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Multiplication of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
      </Card>
    </>
  )
}