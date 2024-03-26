export type RenderUserSnippets = (
  users: {
    image: string;
    isOnline: boolean;
    isFollowing: boolean;
    fullName: string;
    _id: string;
  }[],
  title: string,
) => JSX.Element;
