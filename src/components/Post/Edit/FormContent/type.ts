export interface FormContentProps {
  values: {
    title: string;
    content: string;
    channelId: string;
  };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setFieldValue: (field: string, value: string) => void;
}
