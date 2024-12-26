import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MangaCardProps {
  manga: {
    id: string;
    title: string;
    author: { username: string };
    image: string;
  };
}

const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-500 transition"
      onClick={() => navigate(`/manga/${manga.id}`)} // Navigate to MangaDetails
    >
      <img src={manga.image} alt={manga.title} className="rounded-lg w-full" />
      <h3 className="text-xl font-bold mt-4">{manga.title}</h3>
      <p className="text-sm text-gray-500">{manga.author.username}</p>
    </div>
  );
};

export default MangaCard;
