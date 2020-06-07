import React, { useEffect, useState } from 'react'
import { PageHeader, Card, Avatar, Space, Button, Spin, Empty } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import AddCourse from './AddCourse'
import { getCoursesByCategory } from '../service/remote'

export default function CategoryCourseList() {
  let location = useLocation()
  const title = location.state.title
  const id = location.state.id

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    getCoursesByCategory(id).then(resp => {
      setItems(resp.data)
      setLoading(false)
    })
  }, [id])

  function _fetchData() {
    getCoursesByCategory(id).then(resp => {
      setItems(resp.data)
      setLoading(false)
    })
  }

  return (

    loading
      ? <div style={{ textAlign: 'center', margin: '50px', padding: '50px' }}>
        <Spin />
      </div>
      :
      <>
        <PageHeader title={title} extra=
          {<AddCourse 
            categoryID={id}
            onAdded={() => _fetchData()} />}
        />
        {
          items.length !== 0
            ? (
              items.map(i => <React.Fragment key={i.id}>
                <Card style={{ margin: '8px 32px' }} >
                  <Avatar size="large" />
                  <Space>
                    <Link to={{ pathname: `${location.pathname}/${i.id}/modules`, state: { data: i } }}>
                      <h3
                        style={{ display: 'inline', marginLeft: '16px' }}>
                        {i.title}
                      </h3>
                    </Link>
                    <Button size="small">Edit</Button>
                  </Space>
                </Card>
              </React.Fragment>)

            )
            : <Empty />
        }
      </>
  )
}