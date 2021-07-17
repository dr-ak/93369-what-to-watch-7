import React, {useRef, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getFilm} from '../../store/selectors/film';
import {formatPlayerRuntime} from '../../utils/format-time';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  const film = useSelector(getFilm);
  const history = useHistory();

  const {videoLink, previewImage} = film;

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const togglerRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const exitButtonClickHandler = () => {
    videoRef.current = null;
    history.goBack();
  };

  const fullScreenButtonClickHandler = () => {
    videoRef.current.fullscreen ? videoRef.current.exitFullscreen() : videoRef.current.requestFullscreen();
  };

  const videoTimeUpdateHandler = () => {
    const progress = videoRef.current ? ((videoRef.current.currentTime / videoRef.current.duration) * 100) : 0;

    progressBarRef.current.value = progress;
    togglerRef.current.style.left = `${progress}%`;

    timeRef.current.innerHTML = formatPlayerRuntime(Math.floor(videoRef.current.duration - videoRef.current.currentTime));
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={previewImage}
        onTimeUpdate={videoTimeUpdateHandler}
      />
      <button type="button" className="player__exit" onClick={exitButtonClickHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress ref={progressBarRef} className="player__progress" value={0} max={100} />
            <div ref={togglerRef} className="player__toggler">Toggler</div>
          </div>
          <div ref={timeRef} className="player__time-value"></div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => setIsPlaying(!isPlaying)}>
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={`#${isPlaying ? 'pause' : 'play-s'}`} />
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen" onClick={fullScreenButtonClickHandler}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
