export const getData = () => {
  const data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
