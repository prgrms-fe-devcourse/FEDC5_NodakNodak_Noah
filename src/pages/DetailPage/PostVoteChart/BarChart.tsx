import { InputWrapper } from '../PostVote/StyledPostVote';
import theme from '@/styles/theme';
import Input from '@/components/Input';

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
        <Input
          key={index}
          value={vote}
          bordertype='enabled'
          readOnly={true}
          style={{
            marginBottom: '1.5rem',
            width: '466px',
            height: '48px',
            position: 'relative',
            backgroundImage: `linear-gradient(to right, ${
              theme.colors.primary[200]
            } ${(count / voteArray.length) * 100}%, ${
              theme.colors.primary[100]
            } 0%)`,
          }}
          disabled={true}
        />
      ))}
    </InputWrapper>
  );
};

export default BarChart;
