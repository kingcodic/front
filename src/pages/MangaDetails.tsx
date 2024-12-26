import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api, deleteManga } from '../utils/api'; // API helpers
import { Manga } from '../types'; // Manga type

const MangaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [manga, setManga] = useState<Manga | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await api.get(`/manga/${id}`);
        setManga(response.data);
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch manga. Please try again.');
        setLoading(false);
      }
    };
    fetchManga();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteManga(id); // Call delete API
      navigate('/'); // Redirect to homepage after deletion
    } catch (err) {
      console.error('Failed to delete manga:', err);
      setError('Unable to delete this manga. Please try again.');
    }
  };

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!manga) {
    return <div className="text-center text-red-500">Manga not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex bg-slate-200 p-16 flex-col md:flex-row items-start md:items-center gap-6 justify-around">
        <img src={manga.image} alt={manga.title} className="w-[30vw] rounded-lg shadow-md" />
        <div className="text-center">
          <h1 className="text-6xl my-5 text-[#148da1] font-bold">{manga.title}</h1>
          <p className="text-white bg-[#148da1] text-xl p-3 uppercase mb-4">{manga.author.username}</p>
          <p>{manga.description}</p>
          <div className="mt-6">
            <button
              onClick={() => navigate(`/manga/edit/${id}`)} // Navigate to edit page
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={handleDelete} // Delete manga
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
          <h3 className="mt-6 text-3xl uppercase font-bold">Chapters</h3>
          <ul className="mt-4">
            {manga.chapters.map((chapter) => (
              <li
                key={chapter.chapterNumber}
                className="cursor-pointer text-white bg-purple-600 p-3 border-2 border-white hover:bg-purple-950 hover:scale-105 transition duration-300"
                onClick={() => navigate(`/manga/${manga.id}/chapter/${chapter.chapterNumber}`)}
              >
                {chapter.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MangaDetails;



// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import webtoonsImages from '../data/webtoonsImages';
// import { Manga } from '../types';

// const MangaDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   // Ensure id is valid and parse it
//   const mangaId = id ? parseInt(id) : -1;
//   const manga: Manga | undefined = webtoonsImages[mangaId];

//   // Handle invalid mangaId
//   if (!manga) {
//     return <div className="text-center text-red-500">Manga not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex bg-slate-200 p-16 flex-col md:flex-row items-start md:items-center gap-6 justify-around ">
//         <img src={manga.image} alt={manga.title} className="w-[30vw] rounded-lg shadow-md" />
//         <div className='text-center'>
//           <h1 className="text-6xl my-5 text-[#148da1] font-bold">{manga.title}</h1>
//           <p className="text-white bg-[#148da1] text-xl p-3 uppercase mb-4">{manga.author}</p>
//           <p>{manga.description}</p>
//           <h3 className="mt-6 text-3xl uppercase font-bold">الفصل</h3>
//           <ul className="mt-4">
//             {manga.chapters.map((chapter, index) => (
//               <li
//                 key={index}
//                 className="cursor-pointer text-white bg-purple-600 p-3 border-2 border-white hover:bg-purple-950 hover:scale-105 transtion duration-300"
//                 onClick={() => navigate(`/manga/${mangaId}/chapter/${chapter.chapterNumber}`)}
//               >
//                 {chapter.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MangaDetails;
