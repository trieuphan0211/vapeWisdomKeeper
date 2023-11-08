import React, { useEffect, useState } from "react";
import "../assets/css/FanPage.css";
import { getFeed } from "../services";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const FanPage = () => {
  const [feed, setFeed] = useState([]);
  const dataFeed = async () => {
    const res = await getFeed();
    setFeed(res.feed.data);
  };
  useEffect(() => {
    dataFeed();
  }, []);
  const [open, setOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState({});
  const handleOpen = (feedItem) => {
    setOpen(true);
    setSelectedFeed(feedItem);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="fanPage d-flex flex-column align-items-center">
      <h1 className="fanPage_header">Bài viết nổi bật</h1>
      {feed.map((item, index) => {
        return (
          <div
            className="fanPage_item"
            key={index}
            onClick={() => handleOpen(item)}
          >
            <img className="fanPage_item-img" src={item.full_picture}></img>
            <p className="fanPage_item-mes">{item.message}</p>
          </div>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          borderRadius: "10px",
        }}
      >
        <Box
          classes="fanPage_item-modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 1000,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            p: 4,
            height: "90%",
            overflowY: "scroll",
          }}
        >
          <img
            className="fanPage_item-img"
            src={selectedFeed?.full_picture}
          ></img>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedFeed?.message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
