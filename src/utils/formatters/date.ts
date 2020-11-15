const dateFormatter = (str: string) => {
  const date = new Date(str);
  const mnth = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  return `${[date.getFullYear(), mnth, day].join('-')} ${hours}:${minutes}`;
};

export default dateFormatter;
