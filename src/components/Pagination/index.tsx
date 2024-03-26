import RightArrowIcon from '@/assets/RightArrowIcon';
import { Button, Text } from '@/components';
import {
  PaginationWrapper,
  TextWrapper,
  PageNumberWrapper,
} from '@/components/Pagination/style';
import { PaginationProps } from '@/components/Pagination/type';
import theme from '@/styles/theme';

const Pagination = ({ page, totalPage, onPageChange }: PaginationProps) => {
  const pageArray = Array.from(
    { length: totalPage },
    (_, index) => index,
  ).filter((i) => {
    if (page <= 3) return i + 1 <= 5;
    if (page >= totalPage - 2) return i + 1 >= totalPage - 4;
    return i + 1 >= page - 2 && i + 1 <= page + 2;
  });

  const handlePageChange = (page: number) => () => onPageChange(page);

  if (totalPage <= 1) return null;

  return (
    <PaginationWrapper>
      <Button
        size='mini'
        styleType='ghost'
        onClick={handlePageChange(page - 1)}
        style={{ padding: '0' }}>
        <RightArrowIcon flip />
      </Button>
      <PageNumberWrapper>
        {pageArray.map((index) => (
          <TextWrapper key={index} onClick={handlePageChange(index + 1)}>
            <Text
              key={index}
              tagType='span'
              fontType='h4'
              colorType='primary'
              colorNumber={
                theme.isDark
                  ? page === index + 1
                    ? '200'
                    : '500'
                  : page === index + 1
                    ? '500'
                    : '300'
              }>
              {(index + 1).toString()}
            </Text>
          </TextWrapper>
        ))}
      </PageNumberWrapper>
      <Button
        size='mini'
        styleType='ghost'
        onClick={handlePageChange(page + 1)}
        style={{ padding: '0' }}>
        <RightArrowIcon />
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
