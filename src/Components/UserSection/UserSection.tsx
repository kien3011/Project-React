import React, { useState } from 'react';
import './usersection.scss';
import { ReactComponent as BellIc } from '../../Assets/bell.svg';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const imgUrl =
  'https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dcaDmjBWarcAX8viF6b&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIX0X9FNAAF0zRrl4u4NzkEVYeWmp_keO7T2iP1kMAJZA&oe=62AECF0E';
const notifications = [
  { user: 'Ngô Viết Kiên', content: '10h25 ngày 30/11/2020' },
  { user: 'Phạm Công Minh', content: '7h45 ngày 30/2/2020' },
  { user: 'Vũ Minh CHí', content: '6h01 ngày 31/2/2020' },
  { user: 'Trương Trọng Nhân', content: '14h05 ngày 2/2/2020' },
  { user: 'Lương Minh Thư', content: '9h15 ngày 6/9/2020' },
  { user: 'Lương Minh Thư', content: '12h30 ngày 25/10/2020' },
  { user: 'Lương Minh Thư', content: '11h40 ngày 11/5/2020' },
  { user: 'Ngô Viết Kiên', content: '17h12 ngày 6/6/2020' },
  { user: 'Võ Đan Trường', content: '15h35 ngày 10/10/2020' },
];

const UserSection: React.FC = () => {
  const [notificationExpand, setNotificationExpand] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <div className='app__user-section'>
      <div
        className={`notification-bell ${notificationExpand && `active`}`}
        onClick={() => setNotificationExpand((prev) => !prev)}
      >
        <BellIc />
        {notificationExpand && (
          <div className='notification-container'>
            <div className='notification-container__header'>Thông báo</div>
            <div className='notification-container__scroll-container'>
              {notifications.map((item) => {
                return (
                  <div className='notification-item'>
                    <div className='notification-item__title'>
                      {`Người dùng: ${item.user}`}
                    </div>
                    <div className='notification-item__content'>
                      {`Thời gian nhận số: ${item.content}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className='avatar'>
        <img src={user.avatar} alt='' onClick={() => navigate('user-info')} />
      </div>
      <div className='hello-user'>
        <span className='hello'>Xin chào</span>
        <span className='user-name'>{user.fullName}</span>
      </div>
    </div>
  );
};

export default UserSection;
