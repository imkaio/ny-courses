export const transformToHour = (time) => {
  const seconds = 60;
  const minutes = 60;

  return time / seconds / minutes;
};

export const formatDate = (date = '', content = {}) => {
  if (!date || !content) return '';

  const objectDate = new Date(date);
  const day = objectDate.getUTCDate();
  const month = objectDate.getMonth() + 1;
  const year = objectDate.getFullYear();

  return `${day < 10 ? `0${day}` : day} ${content.DE} ${content[`MES_${month}`]} ${content.DE} ${year}`;
};
