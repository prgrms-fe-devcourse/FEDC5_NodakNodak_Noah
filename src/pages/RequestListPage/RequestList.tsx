import useAxios from '@/hooks/useAxios';

const RequestList = () => {
  const token = localStorage.getItem('auth-token');
  const good = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/messages/conversations',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return <button onClick={() => console.log(good)}>RequestList</button>;
};

export default RequestList;
