import {
  InputWrapper,
  BarChartContainer,
} from '@/pages/PostDetail/components/Result/BarChart/style';
import theme from '@/styles/theme';
import { Text, Input } from '@/components';

const BarChart = ({
  voteArray,
  votedArray,
}: {
  voteArray: string[];
  votedArray: string[];
}) => {
  const voteCountMap = new Map<string, number>(
    voteArray.map((vote) => [vote, 0]),
  );

  votedArray.forEach((vote) => {
    if (voteCountMap.has(vote)) {
      voteCountMap.set(vote, voteCountMap.get(vote)! + 1);
    } else {
      voteCountMap.set(vote, 1);
    }
  });

  return (
    <InputWrapper>
      {[...voteCountMap].map(([vote, count], index) => (
        <BarChartContainer key={`${vote}/${count}/${index}`}>
          <Input
            key={index}
            value={vote}
            bordertype='enabled'
            readOnly
            disabled
            style={{
              width: '466px',
              height: '48px',
              position: 'relative',
              color: `${theme.colors.black}`,
              backgroundImage: `linear-gradient(to right, ${
                theme.colors.primary[200]
              } ${
                votedArray.length ? (count / votedArray.length) * 100 : 0
              }%, ${theme.colors.primary[100]} 0%)`,
            }}
          />
          <Text
            tagType='span'
            fontType='body1'
            colorNumber='400'
            colorType='primary'
            style={{
              position: 'absolute',
              right: '5px',
              zIndex: '3',
              color: `${theme.colors.black}`,
            }}>
            {votedArray.length ? `${count}/${votedArray.length}` : '0'}
          </Text>
        </BarChartContainer>
      ))}
    </InputWrapper>
  );
};

export default BarChart;
