import {
  NotificationContainer,
  NotificationHeader,
  NotificationList,
} from './StyledNotification';
import { mockNotifications } from './mockNotifications';
import Button from '../Button';
import { forwardRef } from 'react';

const Notification = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <NotificationContainer ref={ref}>
      <NotificationHeader>
        알림
        <Button type='button' size='small' style={{ padding: '8px 4px' }}>
          모두 읽음
        </Button>
      </NotificationHeader>
      <NotificationList>
        {mockNotifications.map(({ _id, seen, follow }) => (
          <li key={_id}>{seen === false ? follow : ''}</li>
        ))}
      </NotificationList>
    </NotificationContainer>
  );
});

export default Notification;
