import React from 'react';
import { ReactComponent as NotFoundSvg } from 'assets/svg/not_found.svg';

import { Header, Wrapper, SvgWrapper } from './style';

const NotFound = () => {
  return (
    <Wrapper>
      <Header>404 - Not Found!</Header>
      <SvgWrapper>
        <NotFoundSvg />
      </SvgWrapper>
    </Wrapper>
  );
};

export default NotFound;
