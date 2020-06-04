import React, { useState, useEffect } from 'react'
import { Card, PageHeader, Avatar, Empty, Spin, Space, Button } from 'antd'
import AddCategory from './AddCategory'
import Axios from 'axios'

export default function CategoryList() {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    _fetchData()
  }, [])

  function _fetchData() {
    Axios.get('https://api.freeschool.org.in/api/categories')
      .then(resp => {
        setItems(resp.data)
        setLoading(false)
      })
  }

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
                <Space>
                  <h3 style={{ display: 'inline', marginLeft: '16px' }}>
                    {i.title}
                  </h3>

                  <Button danger
                    size="small"
                    onClick={(_) => {
                      Axios.delete(`https://api.freeschool.org.in/api/categories/${i.id}`)
                        .then(_ => _fetchData())
                    }}>Delete</Button>

                </Space>
              </Card>
            </React.Fragment>
            )
          ) : <Empty />
        }
      </>
  )
}