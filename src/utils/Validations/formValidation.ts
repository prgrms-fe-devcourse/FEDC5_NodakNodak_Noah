import { PROMPT } from '@/utils/constants';

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

  if (hasDuplicates(voteArray)) {
    alert(PROMPT.DUPLICATE_CANDIDATES);
    return false;
  }

  return true;
};
