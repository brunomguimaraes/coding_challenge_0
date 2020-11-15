const dateFormatter = (str: string) => {
  const date = new Date(str);

  return `${date.toLocaleString('en-US', { timeZone: 'America/New_York' })}, (GMT-5)`;
};

export default dateFormatter;
