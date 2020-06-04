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
        title={<Link to={`${location.pathname}/1/lessons`}>Integers</Link>}>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/1/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/2/contents`} >
            <h3>Multiplication of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/3/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/5/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        headStyle={{ fontSize: '24px' }}
        title={<Link to={`${location.pathname}/2/lessons`}>Calculus</Link>}>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/4/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/4/contents`} >
            <h3>Multiplication of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/4/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/5/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
      </Card>

      <Card style={{ margin: '8px 32px' }}
        headStyle={{ fontSize: '24px' }}
        title={<Link to={`${location.pathname}/3/lessons`}>Geometry</Link>}>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/4/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/4/contents`} >
            <h3>Multiplication of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/4/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
        <Card style={{ marginBottom: '8px' }}>
          <Link to={`${location.pathname}/1/lessons/5/contents`} >
            <h3>Addition and Subtraction of integers</h3>
          </Link>
        </Card>
      </Card>
    </>
  )
}