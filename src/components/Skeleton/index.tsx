import React from 'react';
import { SkeletonRow } from 'components/Skeleton/style';

type Props = {
  quantity: number;
};

const Skeleton = ({ quantity }: Props) => {
  return (
    <>
      {Array.from({ length: quantity }, (_: any, index: any) => (
        <SkeletonRow data-testid={`${index}-skel-row`} key={index} />
      ))}
    </>
  );
};

export default Skeleton;
