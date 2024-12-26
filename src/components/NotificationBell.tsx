import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

const NotificationBell: React.FC = () => {
  const notificationContext = useContext(NotificationContext);
  const navigate = useNavigate();

  if (!notificationContext) return null; // Ensure context is available

  const { notifications } = notificationContext;

  // Filter unread notifications
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <div className="relative cursor-pointer" onClick={() => navigate('/notifications')}>
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
          {unreadCount}
        </span>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500 hover:text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405M4 4l16 16m-4.005-4.005a3 3 0 10-4.255-4.255M5.636 5.636l4.242-4.242M12 19a2 2 0 11-4 0"
        />
      </svg>
    </div>
  );
};

export default NotificationBell;
