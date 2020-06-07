import React, { useState, useEffect } from 'react'
import { Card, List, Spin, Empty } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { getContentsByLesson } from '../service/remote'

export default function LessonContentList() {
  let location = useLocation()
  const id = location.state.data.id

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    getContentsByLesson(id).then(resp => {
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
        <Card
          title={location.state.data.title}
        >
          {
            items.length !== 0 ?

              (
                <List>
                  {items.map(i =>
                    <React.Fragment key={i.id}>
                      <Link to={{ pathname: `${location.pathname}/${i.id}`, state: { data: i } }}>
                        <List.Item> {i.title}</List.Item>
                      </Link>
                    </React.Fragment>)}
                </List>
              )
              :
              <Empty />
          }
        </Card>
      </>
  )
}