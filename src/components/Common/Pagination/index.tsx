import RightArrowIcon from '@/assets/RightArrowIcon';
import Button from '@/components/Common/Button';
import Text from '@/components/Common/Text';
import {
  PaginationWrapper,
  TextWrapper,
  PageNumberWrapper,
} from '@/components/Common/Pagination/styledPagination';
import { PaginationProps } from '@/components/Common/Pagination/PaginationTypes';

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
        <RightArrowIcon flip={true} />
      </Button>
      <PageNumberWrapper>
        {pageArray.map((index) => (
          <TextWrapper key={index} onClick={handlePageChange(index + 1)}>
            <Text
              key={index}
              tagType='span'
              fontType='h4'
              colorType='primary'
              colorNumber={page === index + 1 ? '500' : '300'}>
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
