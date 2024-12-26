import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api"; // Payload CMS API helper
import { Manga } from "../types"; // Import the Manga type

const Cards: React.FC = () => {
  const navigate = useNavigate();
  const [mangaList, setMangaList] = useState<Manga[]>([]); // Typed as an array of Manga
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await api.get("/manga"); // Fetch manga data
        setMangaList(response.data.docs.slice(0, 6)); // Limit to 6 items
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch manga:", error);
        setLoading(false);
      }
    };
    fetchMangaList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full py-5 text-center">
      <h2 className="font-sans text-[#148da1] text-7xl my-12">افضل المانجا</h2>
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {mangaList.map((manga) => (
            <div
              key={manga.id}
              className="cursor-pointer"
              onClick={() => navigate(`/manga/${manga.id}`)} // Navigate to MangaDetails
            >
              <div className="relative h-[70vh] border-2 border-white shadow-lg rounded-md hover:scale-105 hover:z-50 transition-all duration-1000">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${manga.image})`,
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col justify-end h-full text-left text-white p-4">
                  <div className="text-lg font-semibold mb-2">
                    <h1 className="text-3xl text-[#2cb6cf]">{manga.title}</h1>
                  </div>
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

export default Cards;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom"; // Assuming you are using react-router
// import webtoonsImages from "../data/webtoonsImages";

// const Cards = () => {
//   const navigate = useNavigate(); // Navigation hook

//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   return (
//     <div className="w-full py-5 text-center">
//       <h2 className="font-sans text-[#148da1]  text-7xl my-12">افضل المانجا</h2>
//       <div className="w-[90%] mx-auto">
//         <Slider {...settings}>
//           {webtoonsImages.slice(0, 6).map((webtoon, index) => (
//             <div
//               key={index}
//               className="cursor-pointer "
//               onClick={() => navigate(`/manga/${index}`)} // Navigate on click
//             >
//               <div className="relative h-[70vh] border-2 border-white shadow-lg rounded-md hover:scale-105  hover:z-50 transition-all duration-1000">
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${webtoon.image})`,
//                   }}
//                 ></div>

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>

//                 {/* Text Content */}
//                 <div className="relative z-10 flex flex-col justify-end h-full text-left text-white p-4">
//                   <div className="text-lg font-semibold mb-2">
//                    <h1 className="text-3xl text-[#2cb6cf]"> {webtoon.title} {/* Title from data */}</h1>
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

// export default Cards;
