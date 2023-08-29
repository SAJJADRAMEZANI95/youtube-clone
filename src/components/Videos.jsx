import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCart from './VideoCart'
import ChannelCard from './ChannelCard'

const Videos = ({video}) => {
  return (
    <Stack direction='row' flexWrap={'wrap'} justifyContent={'center'} gap={2} >
    {
      video.map((item , idx) => {
        return(
          <Box key={idx}>
         {item.id.videoId && <VideoCart video={item}/>}
         {item.id.channelId && <ChannelCard channelDetail={item}/>} 
        </Box>
        )
         })
    }
    
    </Stack>
  )
}

export default Videos
