import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-blue-500 text-white p-6 rounded shadow hover:bg-blue-700 transition">
          View My Manga
        </button>
        <button className="bg-green-500 text-white p-6 rounded shadow hover:bg-green-700 transition">
          Notifications
        </button>
        <button className="bg-yellow-500 text-white p-6 rounded shadow hover:bg-yellow-700 transition">
          Edit Profile
        </button>
        <button className="bg-red-500 text-white p-6 rounded shadow hover:bg-red-700 transition">
          Settings
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
