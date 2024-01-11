import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://kdt.frontend.5th.programmers.co.kr:5003';

export const sendPostRequest = async (
  url: string,
  method: string,
  data: FormData,
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
