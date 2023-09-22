import PropTypes from "prop-types";
import React from "react";
import "./video.css";

const CredVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/kdPSpUR9BLY?si=Etd2Q1L4W5Y6Reqj"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
);

CredVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default CredVideo;
