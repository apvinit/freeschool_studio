import React, { useState, useEffect } from 'react'
import { PageHeader, Card, List, Spin, Empty } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import AddLesson from './AddLesson'
import { getLessonsByModules } from '../service/remote'

export default function ModuleLessonList() {
  let location = useLocation()
  const id = location.state.data.id

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    getLessonsByModules(id).then(resp => {
      setItems(resp.data)
      setLoading(false)
    })
  }, [id])


  return (
    loading
      ? <div style={{ textAlign: 'center', margin: '50px', padding: '50px' }}>
        <Spin />
      </div>
      : <>
        <PageHeader title={`${location.state.data.title}`} extra={<AddLesson />} />

        {items.length !== 0
          ? (
            items.map(i =>
              <React.Fragment key={i.id}>
                <Card style={{ margin: '8px 32px' }}
                  title={<Link to={{ pathname: `${location.pathname}/${i.id}/contents`, state: { data: i } }}>{i.title}</Link>}
                >
                  {/* <List>
                    <Link to={`${location.pathname}/1/contents/22`}>
                      <List.Item ><Card size="small">Adding number with different signs</Card></List.Item>
                    </Link>
                    <Link to={`${location.pathname}/2/contents/12`} >
                      <List.Item><Card size="small">Subraction number with same signs</Card></List.Item>
                    </Link>
                  </List> */}
                </Card>
              </React.Fragment>
            )
          )
          : <Empty />}
      </>
  )
}