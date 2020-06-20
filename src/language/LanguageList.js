import React, { useState, useEffect } from 'react'
import { PageHeader, Spin, Card, Avatar, Space, Button, Empty } from 'antd'
import { getLanguages, deleteLanguage } from '../service/remote'
import AddLanguage from './AddLanguage'

export default function LanguageList() {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    _fetchData()
  }, [])

  function _fetchData() {
    getLanguages()
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
        <PageHeader title="Languages"
          extra={<AddLanguage onAdded={() => _fetchData()} />} />
        {items.length !== 0 ?
          (
            items.map(i => <React.Fragment key={i.lang}>
              <Card style={{ margin: '8px 32px' }} >
                <Avatar size="large" />
                <Space>

                  <h3 style={{ display: 'inline', marginLeft: '16px' }}>
                    {i.title}
                  </h3>
                  <Button danger
                    size="small"
                    onClick={(_) => {
                      deleteLanguage(i.lang).then(_ => _fetchData())
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