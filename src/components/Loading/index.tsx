import React from 'react';
import { Wrapper, Circle, Shadow, Text } from 'components/Loading/style';

type Props = {
  title: string;
};

const Loading = ({ title }: Props) => {
  return (
    <Wrapper>
      <Circle />
      <Circle />
      <Circle />
      <Shadow />
      <Shadow />
      <Shadow />
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default Loading;
