export interface FormContentProps {
  values: {
    title: string;
    content: string;
    channelId: string;

    image: File | null;
    imageSrc?: string;
  };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  setFieldValue: (field: string, value: string | File | null) => void;
  handleDeleteImage: () => void;
}
