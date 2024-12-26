import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { Manga } from "../types"; // Import the Manga type

const Card: React.FC = () => {
  const navigate = useNavigate();
  const [mangaList, setMangaList] = useState<Manga[]>([]); // Use Manga[] for type

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await api.get("/manga"); // Fetch manga data
        setMangaList(response.data.docs || []); // Ensure docs is an array
      } catch (error) {
        console.error("Failed to fetch manga:", error);
      }
    };
    fetchMangaList();
  }, []);

  return (
    <div className="w-full py-5 text-center">
      <h2 className="font-sans text-[#8a08a0] text-7xl my-12">جديد</h2>
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {mangaList.map((manga) => (
            <div
              key={manga.id}
              className="cursor-pointer"
              onClick={() => navigate(`/manga/${manga.id}`)}
            >
              <div className="relative h-[40vh] border-2 border-white shadow-lg rounded-md overflow-hidden">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${manga.image})`,
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8a08a0]/80 to-transparent"></div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col justify-end h-full text-left text-white p-4">
                  <div className="text-lg font-semibold mb-2">{manga.title}</div>
                  <div className="text-xs font-light">
                    <p>{manga.author?.username || "Unknown Author"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
















// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom"; // Assuming you are using react-router
// import webtoonsImages from "../data/webtoonsImages";

// const Card = () => {
//   const navigate = useNavigate(); // Navigation hook

//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   return (
//     <div className="w-full py-5 text-center">
//       <h2 className="font-sans text-[#8a08a0] text-7xl my-12">جديد</h2>
//       <div className="w-[90%] mx-auto">
//         <Slider {...settings}>
//           {webtoonsImages.slice(0, 6).map((webtoon, index) => (
//             <div
//               key={index}
//               className="cursor-pointer"
//               onClick={() => navigate(`/manga/${index}`)} // Navigate on click
//             >
//               <div className="relative h-[40vh] border-2 border-white shadow-lg rounded-md overflow-hidden">
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${webtoon.image})`,
//                   }}
//                 ></div>

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#8a08a0]/80 to-transparent"></div>

//                 {/* Text Content */}
//                 <div className="relative z-10 flex flex-col justify-end h-full text-left text-white p-4">
//                   <div className="text-lg font-semibold mb-2">
//                     {webtoon.title} {/* Title from data */}
//                   </div>
//                   <div className="text-xs font-light">
//                     <p>{webtoon.author}</p> {/* Author from data */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Card;
