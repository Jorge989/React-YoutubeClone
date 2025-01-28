import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import {
//   demoThumbnailUrl,
//   demoVideoUrl,
//   demoVideoTitle,
//   demoChannelTitle,
//   demoChannelUrl,
// } from "../utils/constants";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  if (!snippet) return null;

  return (
    <Card sx={{ width: 358, height: 300, backgroundColor: "#1e1e1e" }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "120px",
        }}
      >
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF" noWrap>
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
