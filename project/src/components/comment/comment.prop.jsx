import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;
