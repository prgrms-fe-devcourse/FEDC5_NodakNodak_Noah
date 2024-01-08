import { InputWrapper } from '../PostVote/StyledPostVote';
import theme from '@/styles/theme';
import Input from '@/components/Input';
import Text from '@/components/Text';

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
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
          }}>
          <Input
            key={index}
            value={vote}
            bordertype='enabled'
            readOnly={true}
            style={{
              width: '466px',
              height: '48px',
              position: 'relative',
              backgroundImage: `linear-gradient(to right, ${
                theme.colors.primary[200]
              } ${
                votedArray.length ? (count / votedArray.length) * 100 : 0
              }%, ${theme.colors.primary[100]} 0%)`,
            }}
            disabled={true}
          />
          <Text
            tagType='span'
            fontType='body1'
            colorNumber='400'
            colorType='primary'
            style={{ position: 'absolute', right: '5px', zIndex: '3' }}>
            {votedArray.length
              ? (count / (votedArray.length + 3)).toString()
              : '0'}
          </Text>
        </div>
      ))}
    </InputWrapper>
  );
};

export default BarChart;
