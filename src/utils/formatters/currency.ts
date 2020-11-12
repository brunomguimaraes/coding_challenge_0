// Create our number formatter.
const currencyNumberFormatter = (currency: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

const currencyFormatter = (number: number, currency: string) => {
  return currencyNumberFormatter(currency).format(number);
};

export default currencyFormatter;
