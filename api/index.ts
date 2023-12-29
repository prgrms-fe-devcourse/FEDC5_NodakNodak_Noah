import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
  const { path = '', method = 'GET', token = '', data } = req.body;
  const { data: responseValue } = await axios({
    url: `${process.env.BASE_URL}/${path}`,
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data,
  });
  res.status(200).json(responseValue);
}
