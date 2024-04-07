import { HtmlHTMLAttributes, PropsWithChildren } from 'react';
import { PaddingBox, ScrollBarBox } from '@/components/ScrollBar/style';

const ScrollBar = ({
  children,
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
  return (
    <PaddingBox>
      <ScrollBarBox>{children}</ScrollBarBox>
    </PaddingBox>
  );
};

export default ScrollBar;
