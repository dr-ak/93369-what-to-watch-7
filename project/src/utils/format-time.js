import dayjs from 'dayjs';

const MINUTES_IN_HOUR = 60;

export const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / MINUTES_IN_HOUR);
  const minutes = runtime % MINUTES_IN_HOUR;
  return (hours ? `${hours}h` : '') + (minutes ? ` ${minutes}m` : '');
};

export const formatCommentDate = (date) => dayjs(date).format('MMMM DD[,] YYYY');

export const formatDateTime = (date) => dayjs(date).format('YYYY-MM-DD');

