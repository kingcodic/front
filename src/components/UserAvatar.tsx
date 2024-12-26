import React from 'react';

interface UserAvatarProps {
  imageUrl?: string; // URL of the user's avatar
  username: string; // Fallback to display initials
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, username }) => {
  // Generate initials from the username
  const initials = username
    .split(' ')
    .map((name) => name[0]?.toUpperCase())
    .join('');

  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 text-white text-xl font-bold">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={username}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default UserAvatar;
