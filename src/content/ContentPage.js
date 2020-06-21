import React from 'react'
import { PageHeader, Card } from 'antd'
import { useLocation } from 'react-router-dom'
import { getStreamUrl } from '../service/remote'
import VideoPlayer from 'react-video-js-player';

export default function ContentPage() {

  let location = useLocation()

  return (
    <>
      <PageHeader title={location.state.data.title} />
      <Card>
        <VideoPlayer
          controls={true}
          src={getStreamUrl(location.state.data.data)}
          width="720"
          height="420"
        />
      </Card>
    </>
  )

}