import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import filmProp from '../film/film.prop';

const MSEC_IN_SEC = 1000;

function SmallFilmCardPlayer({film, isActive}) {
  const {previewVideoLink, previewImage, name} = film;

  const playerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      isActive && playerRef.current.play();
    }, MSEC_IN_SEC);
    return () => clearTimeout(timer);
  }, [isActive]);

  return isActive
    ? <video src={previewVideoLink} ref={playerRef} width={280} height={175} poster={previewImage} muted />
    : <img src={previewImage} alt={name} width={280} height={175} />;
}

SmallFilmCardPlayer.propTypes = {
  film: filmProp,
  isActive: PropTypes.bool.isRequired,
};

export default SmallFilmCardPlayer;
