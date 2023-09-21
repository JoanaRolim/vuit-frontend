import PropTypes from 'prop-types';
import React from 'react'; // Importe o módulo React

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/44gxvIpnsM8?si=Es6dB8RlqHERrcZ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
