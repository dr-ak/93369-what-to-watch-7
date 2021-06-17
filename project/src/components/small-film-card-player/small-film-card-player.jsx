import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import filmProp from '../film/film.prop';

function SmallFilmCardPlayer({film, isActive}) {
  const playerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      isActive && playerRef.current.play();
    }, 1000);
    return () => clearTimeout(timer);
  }, [isActive]);

  return isActive
    ? <video src={film.previewVideoLink} ref={playerRef} width={280} height={175} poster={film.previewImage} muted />
    : <img src={film.previewImage} alt={film.name} width={280} height={175} />;
}

SmallFilmCardPlayer.propTypes = {
  film: filmProp,
  isActive: PropTypes.bool.isRequired,
};

export default SmallFilmCardPlayer;
