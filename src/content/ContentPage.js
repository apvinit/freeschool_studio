import React from 'react'
import { PageHeader, Card } from 'antd'
import { useLocation } from 'react-router-dom'

export default function ContentPage() {

  let location = useLocation()

  return (
    <>
      <PageHeader title={location.state.data.title} />
      <Card>
        {/* <p>Some content of the lesson (it may be video or rich text)</p> */}
      </Card>
    </>
  )

}