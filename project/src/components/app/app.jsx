import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App(props) {
  const {title, date} = props.data;
  return (
    <MainPage title = {title} date = {date}/>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;
