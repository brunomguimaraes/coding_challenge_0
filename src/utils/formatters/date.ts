const dateFormatter = (str: string) => {
  const date = new Date(str);
  const mnth = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return [date.getFullYear(), mnth, day].join('-');
};

export default dateFormatter;
