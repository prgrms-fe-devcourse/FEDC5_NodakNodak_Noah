import {
  PaginationWrapper,
  TextWrapper,
  PageNumberWrapper,
} from './StyledPagination';
import { PaginationProps } from './PaginationTypes';
import Button from '../Button';
import Text from '../Text';

const Pagination = ({ page, totalPage, handlePageChange }: PaginationProps) => {
  return (
    <PaginationWrapper>
      <Button
        size='mini'
        styleType='ghost'
        onClick={() => handlePageChange(page - 1)}>
        {'<'}
      </Button>
      <PageNumberWrapper>
        {Array.from({ length: totalPage }, (_, index) => index)
          .filter((i) => {
            if (page <= 3) return i + 1 <= 5;
            if (page >= totalPage - 2) return i + 1 >= totalPage - 4;
            return i + 1 >= page - 2 && i + 1 <= page + 2;
          })
          .map((index) => (
            <TextWrapper
              key={index}
              onClick={() => handlePageChange(index + 1)}>
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
        onClick={() => handlePageChange(page + 1)}>
        {'>'}
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
