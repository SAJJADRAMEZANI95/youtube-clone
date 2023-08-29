import React from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./components/Videos";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "./utils/FetchData";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";

const SearchFeed = () => {
  const [video, setVideo] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideo(data.items)
    );
  }, [searchTerm]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} minHeight="95vh">
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Result for:
          <span style={{ color: "#FC1503", marginLeft: "5px" }}>
            {searchTerm}
          </span>
        </Typography>
        <Videos video={video} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;

