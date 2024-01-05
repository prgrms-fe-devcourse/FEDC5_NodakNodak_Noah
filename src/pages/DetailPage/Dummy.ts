interface User {
  fullname: string;
  image: string;
}

export interface Comment {
  comment: string;
  author: User;
  createdAt: string;
}

export interface Post {
  title: string;
  author: User;
  createdAt: string;
  image: string;
  comments: Comment[];
}

interface Ttitle {
  title: string;
  content: string;
  voteArray: string[];
  voteTitle: string;
}

const testTitle: Ttitle = {
  title: '제목은 여기에',
  content:
    '지금 여기에는 길고 긴 한글의 내용이 포함 될 것입니다. 오늘의 점심을 뭘먹을지 고민이네요. 오늘은 뭘 먹어볼까요? 아직 한글내용이 부족하네요 어떤 글자가 더 필요할까요?',
  voteArray: ['한식', '중식', '일식', '양식'],
  voteTitle: '오늘은 뭘 먹어볼까?',
};

const commentsJson1 = {
  type: 'comment',
  voteArray: ['한식', '중식', '일식', '양식'],
  content: '오늘은 뭘 먹어볼까?',
};

const commentsJson2 = {
  type: 'comment',
  voteArray: ['한식', '중식', '일식', '양식'],
  content: '저는 분식이 좋습니다',
};

const commentsJson3 = {
  type: 'comment',
  voteArray: ['한식', '중식', '일식', '양식'],
  content: '저는 일식이 좋습니다',
};

const comment1: Comment = {
  comment: JSON.stringify(commentsJson1),
  author: {
    fullname: '댓글 테스터 1',
    image: 'https://picsum.photos/200/300',
  },
  createdAt: '2021-08-01T12:00:00.000Z',
};

const comment2: Comment = {
  comment: JSON.stringify(commentsJson2),
  author: {
    fullname: '댓글 테스터 2',
    image: 'https://picsum.photos/200/300',
  },
  createdAt: '2021-10-01T12:00:00.000Z',
};

const comment3: Comment = {
  comment: JSON.stringify(commentsJson3),
  author: {
    fullname: '댓글 테스터 3',
    image: 'https://picsum.photos/200/300',
  },
  createdAt: '2021-09-01T12:00:00.000Z',
};

export const dummyPost: Post = {
  title: JSON.stringify(testTitle),
  author: {
    fullname: '김테스트',
    image: 'https://picsum.photos/200/300',
  },
  createdAt: '2021-08-01T12:00:00.000Z',
  image: 'https://picsum.photos/200/300',
  comments: [comment1, comment2, comment3],
};
