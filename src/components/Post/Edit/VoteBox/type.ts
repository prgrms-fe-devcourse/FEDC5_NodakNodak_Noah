export interface FormProps {
  values: {
    voteTitle: string;
    voteArray: string[];
  };
  setFieldValue: (field: string, values: string | string[]) => void;
  isEditable: boolean;
}
