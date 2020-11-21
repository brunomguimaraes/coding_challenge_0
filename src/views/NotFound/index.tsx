import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NotFoundSvg } from 'assets/svg/not_found.svg';

import { Header, Wrapper, SvgWrapper } from './style';

const NotFound = () => {
  return (
    <Wrapper>
      <Header>404 - Not Found!</Header>
      <Link to="/">Go to Home</Link>
      <SvgWrapper>
        <NotFoundSvg />
      </SvgWrapper>
    </Wrapper>
  );
};

export default NotFound;
