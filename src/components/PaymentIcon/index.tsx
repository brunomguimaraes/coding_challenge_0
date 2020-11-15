import React, { ReactElement } from 'react';
import { ReactComponent as MastercardLogo } from 'assets/svg/mastercard.svg';
import { ReactComponent as VisaLogo } from 'assets/svg/visa.svg';

type Props = {
  cardName: string;
};

const CARDS: { [key: string]: ReactElement } = {
  mastercard: <MastercardLogo />,
  visa: <VisaLogo />,
};

const PaymentIcon = ({ cardName }: Props) => {
  return <div>{CARDS[cardName]}</div>;
};

export default PaymentIcon;
