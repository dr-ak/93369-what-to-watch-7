import dayjs from 'dayjs';

export const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return (hours ? `${hours}h` : '') + (minutes ? ` ${minutes}m` : '');
};

export const formatCommentDate = (date) => dayjs(date).format('MMMM DD[,] YYYY');

export const formatDateTime = (date) => dayjs(date).format('YYYY-MM-DD');

