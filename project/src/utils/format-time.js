import dayjs from 'dayjs';

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

export const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / MINUTES_IN_HOUR);
  const minutes = runtime % MINUTES_IN_HOUR;
  return (hours ? `${hours}h` : '') + (minutes ? ` ${minutes}m` : '');
};

export const formatPlayerRuntime = (runtime) => {
  const hours = Math.floor(runtime / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR));
  const minutes = Math.floor(runtime % (SECONDS_IN_MINUTE * MINUTES_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = runtime % SECONDS_IN_MINUTE;
  return (hours ? (`0${hours}:`).slice(-3) : '') + (minutes ? (`0${minutes}:`).slice(-3) : '') + (`0${seconds}`).slice(-2);
};

export const formatCommentDate = (date) => dayjs(date).format('MMMM DD[,] YYYY');

export const formatDateTime = (date) => dayjs(date).format('YYYY-MM-DD');

