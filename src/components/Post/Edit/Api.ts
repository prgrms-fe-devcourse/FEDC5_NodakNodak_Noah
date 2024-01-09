import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://kdt.frontend.5th.programmers.co.kr:5003';

interface CreateDataType {
  title: string;
  channelId: string;
  image: string;
}

interface EditDataType {
  title: string;
  channelId: string;
  postId: string;
  image: string;
}

export const sendPostRequest = async (
  url: string,
  method: string,
  data: CreateDataType | EditDataType,
  token: string | null,
): Promise<AxiosResponse | null> => {
  try {
    const response = await axios({
      url: `${BASE_URL}${url}`,
      method,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return null;
  }
};
