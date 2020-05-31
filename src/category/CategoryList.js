import React, { useState, useEffect } from 'react'
import { Card, PageHeader, Avatar, Empty, Spin } from 'antd'
import AddCategory from './AddCategory'
import Axios from 'axios'

export default function CategoryList() {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    Axios.get('https://api.freeschool.org.in/api/categories')
      .then(resp => {
        setItems(resp.data)
        setLoading(false)
      })
  }, [])

  return (
    loading ? <div
      style={{ textAlign: 'center', margin: '50px', padding: '50px' }}>
      <Spin />
    </div> :
      <>
        <PageHeader title="Categories" extra={<AddCategory />} />
        {items.length !== 0 ?
          (
            items.map(i => <React.Fragment key={i.id}>
              <Card style={{ margin: '8px 32px' }} >
                <Avatar size="large" />
                <h3 style={{ display: 'inline', marginLeft: '16px' }}>
                  {i.title}
                </h3>
              </Card>
            </React.Fragment>
            )
          ) : <Empty />
        }
      </>
  )
}