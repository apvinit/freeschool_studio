import React, { useState, useEffect } from 'react'
import { PageHeader, Card, Spin, Empty, Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import AddModule from './AddModule'
import { getModulesByCourses, deleteModule } from '../service/remote'

export default function CourseModuleList() {

  let location = useLocation()
  let id = location.state.data.id

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    getModulesByCourses(id).then(resp => {
      setItems(resp.data)
      setLoading(false)
    })
  }, [id])

  function _fetchData() {
    getModulesByCourses(id).then(resp => {
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
        <PageHeader title={`${location.state.data.title}`}
          extra={<AddModule courseID={id} onAdded={() => _fetchData()} />} />
        {
          items.length !== 0
            ? (
              items.map(i =>
                <React.Fragment key={i.id}>
                  <Card style={{ margin: '8px 32px' }}
                    headStyle={{ fontSize: '24px' }}
                    extra={
                      <Button danger
                        size="small"
                        onClick={() => {
                          deleteModule(i.id).then(_ => _fetchData())
                        }}>Delete</Button>
                    }
                    title={<Link to={{
                      pathname: `${location.pathname}/${i.id}/lessons`,
                      state: { data: i }
                    }}>{i.title}</Link>}>
                    {/* <Card style={{ marginBottom: '8px' }}>
                      <Link to={`${location.pathname}/${i.id}/lessons/1/contents`} >
                        <h3>Addition and Subtraction of integers</h3>
                      </Link>
                    </Card>
                    <Card style={{ marginBottom: '8px' }}>
                      <Link to={`${location.pathname}/1/lessons/2/contents`} >
                        <h3>Multiplication of integers</h3>
                      </Link>
                    </Card> */}
                  </Card>
                </React.Fragment>)
            )
            : <Empty />
        }
      </>
  )
}