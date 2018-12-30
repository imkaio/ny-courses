export const transformToHour = (time) => {
  const seconds = 60;
  const minutes = 60;

  return time / seconds / minutes;
};
