export interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;

  image: File | null;
  imageSrc: string;
  imageToDeletePublicId: string;
}

export interface TitleType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
}
