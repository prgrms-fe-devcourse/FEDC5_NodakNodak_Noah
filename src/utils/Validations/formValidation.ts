import { MAX_LENGTH, PROMPT } from '@/utils/constants';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
}

export const isValidatedForm = (forms: FormType) => {
  const { title, content, voteTitle, voteArray, channelId } = forms;
  const hasDuplicates = (array: string[]) => {
    const trimmedArray = array.map((item) => item.trim());

    return new Set(trimmedArray).size !== trimmedArray.length;
  };

  const validateLength = (value: string, maxLength: number, prompt: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length > maxLength) {
      alert(`${prompt}은 ${maxLength}자 이하여야 합니다.`);
      return false;
    }
    return true;
  };

  const validations = [
    { value: title.trim(), prompt: PROMPT.TITLE },
    { value: channelId, prompt: PROMPT.CHANNEL },
    { value: content.trim(), prompt: PROMPT.CONTENT },
    { value: voteTitle.trim(), prompt: PROMPT.VOTE_SUBJECT },
    {
      value: voteArray.every((candidate) => candidate.trim()),
      prompt: PROMPT.CANDIDATES_INPUT,
    },
  ];

  for (const validation of validations) {
    if (!validation.value || validation.value == 'undefined') {
      alert(validation.prompt);
      return false;
    }
  }

  if (
    !validateLength(title, MAX_LENGTH.TITLE, '제목') ||
    !validateLength(content, MAX_LENGTH.CONTENT, '내용') ||
    !validateLength(voteTitle, MAX_LENGTH.VOTE_TITLE, '투표 제목') ||
    !voteArray.every((candidate) =>
      validateLength(candidate, MAX_LENGTH.CANDIDATE, '투표 후보'),
    )
  ) {
    return false;
  }

  if (hasDuplicates(voteArray)) {
    alert(PROMPT.DUPLICATE_CANDIDATES);
    return false;
  }

  return true;
};
