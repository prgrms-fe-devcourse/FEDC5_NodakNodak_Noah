import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

import {
  ScrollBarWrapper,
  PaddingWrapper,
} from '@/components/Common/ScrollBar/styledScrollBar';

const ScrollBar = ({
  children,
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
  return (
    <PaddingWrapper>
      <ScrollBarWrapper>{children}</ScrollBarWrapper>
    </PaddingWrapper>
  );
};

export default ScrollBar;
