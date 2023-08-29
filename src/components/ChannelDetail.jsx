import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchData";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";


const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              " radial-gradient(circle, rgba(216,179,43,1) 0%, rgba(212,22,22,1) 100%)",
            zIndex: 10,
            height: "300px",
            borderRadius: "30px",
          }}
        />
       <ChannelCard channelDetail={channelDetails} marginTop="-100px"/>
      </Box>
      <Box display="flex" p="2">
      <Videos video={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
