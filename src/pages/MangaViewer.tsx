import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api'; // API helper
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {  Chapter } from '../types'; // Import types

const MangaViewer: React.FC = () => {
  const { id, chapterNumber } = useParams<{ id: string; chapterNumber: string }>();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await api.get(`/manga/${id}/chapter/${chapterNumber}`);
        setChapter(response.data); // Assuming response data contains the chapter
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Chapter not found');
        setLoading(false);
      }
    };
    fetchChapter();
  }, [id, chapterNumber]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (!chapter) {
    return <div className="text-center text-red-500">Chapter not found</div>;
  }

  // Assuming `chapter.content` contains page URLs or image references
  const pages = chapter.content.split("\n"); // If content is a list of URLs

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-16 py-16 text-center">
        {chapter.title}
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4">
        {pages.map((page: string, index: number) => (
          <img
            key={index}
            src={page} // Assuming page contains image URLs
            alt={`Page ${index + 1}`}
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentPage(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={pages.map((page: string) => ({ src: page }))}
          index={currentPage}
        />
      )}
    </div>
  );
};

export default MangaViewer;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import webtoonsImages from '../data/webtoonsImages';
// import { Manga } from '../types';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';
// import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
// import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';
// import Counter from 'yet-another-react-lightbox/plugins/counter';

// const MangaViewer: React.FC = () => {
//   const { id, chapterNumber } = useParams<{ id: string; chapterNumber: string }>();

//   // Parse params safely
//   const mangaId = id ? parseInt(id) : -1;
//   const chapterNum = chapterNumber ? parseInt(chapterNumber) : -1;

//   const manga: Manga | undefined = webtoonsImages[mangaId];
//   const chapter = manga?.chapters.find((ch) => ch.chapterNumber === chapterNum);

//   // Handle invalid mangaId or chapterNum
//   if (!manga || !chapter) {
//     return <div className="text-center text-red-500">Chapter not found</div>;
//   }

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [isOpen, setIsOpen] = useState(false);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [currentPage, setCurrentPage] = useState(0);

//   const openLightbox = (index: number) => {
//     setCurrentPage(index);
//     setIsOpen(true);
//   };

//   const closeLightbox = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-5xl font-bold mb-16 py-16 text-center">
//         {manga.title} <span className="text-[#742786]">{chapter.title}</span>
//       </h1>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 gap-4">
//         {chapter.pages.map((page, index) => (
//           <img
//             key={index}
//             src={page}
//             alt={`Page ${index + 1}`}
//             className="rounded-lg cursor-pointer"
//             onClick={() => openLightbox(index)} // Open clicked image in lightbox
//           />
//         ))}
//       </div>

//       {/* Lightbox */}
//       {isOpen && (
//         <Lightbox
//         open={isOpen}
//         close={closeLightbox}
//         slides={chapter.pages.map((page) => ({ src: page }))}
//         index={currentPage}
//         plugins={[Fullscreen, Slideshow,Counter , Zoom]}
//         on={{
//           view: ({ index }) => setCurrentPage(index), // Extract 'index' from the callback argument
//         }}
//       />
      
//       )}
//     </div>
//   );
// };

// export default MangaViewer;
