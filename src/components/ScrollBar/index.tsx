import { ScrollBarWrapper, PaddingWrapper } from './StyledScrollBar';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

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
