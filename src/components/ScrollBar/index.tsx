import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

import { ScrollBarWrapper, PaddingWrapper } from '@/components/ScrollBar/style';

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
