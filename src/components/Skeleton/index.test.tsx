import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton from 'components/Skeleton';

test('Skeleton renders exact number of rows', () => {
  render(<Skeleton quantity={10} />);
  const skeletonRow = screen.getByTestId('9-skel-row');
  const allSkeletonRows = screen.queryAllByTestId(/-skel-row/i);
  expect(skeletonRow).toBeInTheDocument();
  expect(allSkeletonRows).toHaveLength(10);
});
