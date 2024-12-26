import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../assets/videos/Cover artwork 16-9 ratio.webm";
import logo from "../assets/logo.svg";
import img1 from "../assets/l 1.png";
import img2 from "../assets/l 4.png";
import img3 from "../assets/l 6.png";
import img4 from "../assets/q5.png";
import img5 from "../assets/q-13.png";
import img6 from "../assets/q-12.png";
const Testimonials = () => {
  // Slider settings
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<
            unknown,
            string | React.JSXElementConstructor<unknown>
          >
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined
    ) => (
      <ul className="absolute bottom-0 flex w-full items-center justify-center bg-gradient-to-t from-black via-black/50 to-transparent h-12">
        {dots}
      </ul>
    ),
    customPaging: () => (
      <button className="w-4 h-4 bg-white rounded-full opacity-50 hover:opacity-100"></button>
    ),
  };

  return (
    <>
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/webm" />
          </video>
        </div>
        <div className="video-content space-y-2">
          <h1 className="font-light text-8xl uppercase">عن</h1>
          <h3 className="font-light text-3xl uppercase bg-[#148da1] p-4">
            منصة سمهر
          </h3>
        </div>
      </section>

      <h1 className="font-light uppercase text-4xl text-center flex justify-center items-center p-10">
        توفير الفرص للجميع لإنشاء قصصهم الخاصة ومشاركتها مع الآخرين..
      </h1>
      <section className="px-3 py-5 lg:py-10">
        <div className="flex flex-col items-center justify-center">
          <Slider {...settings} className="w-full max-w-4xl">
            <div className="p-4">
              <img
                src={img1}
                alt="Slide 1"
                className="w-full h-80 object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4">
              <img
                src={img2}
                alt="Slide 2"
                className="w-full h-80 object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4">
              <img
                src={img3}
                alt="Slide 3"
                className="w-full h-80 object-contain rounded-lg shadow-lg"
              />
            </div>
          </Slider>
        </div>
      </section>
      <section className="px-3 py-5   lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-2 flex flex-col p-16 text-right">
            <p dir="rtl" className="text-4xl font-bold md:text-3xl">
              منصة سمهر
            </p>
            <p dir="rtl" className="mt-2 text-sm md:text-lg text-justify">
              هي منصة مبتكرة تتيح للشباب العربي فرصة فريدة لنشر إبداعاتهم في
              مجال المانجا (القصص المصورة)، لتكون نافذتهم إلى العالم. نسعى
              لتمكين الفنانين والكتاب من التعبير عن قصصهم وأفكارهم بثقافتهم
              الخاصة، وربط إبداعاتهم بجمهور واسع يتوق لاكتشاف المواهب الجديدة.
              هنا، تتحول الأحلام إلى أعمال فنية تنبض بالحياة، وتتخطى الحدود لتصل
              إلى قلوب القراء في كل مكان.
            </p>
          </div>
          <div className="order-1 lg:order-1">
            <img
              className="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </section>
      <div dir="rtl" className="container mx-auto text-right pt-24">
        <div className="testimonial-container bg-[#148da1] flex-wrap flex items-center p-8">
          {/* Text Section */}
          <div className="w-full md:w-2/3 testimonial-copy mb-8 md:mb-0">
            <div className="testimonial-header px-8 pt-8 flex-row items-center justify-between">
              <h1 className="font-bold text-6xl md:text-8xl title pb-8">
                ماذا نريد
              </h1>
              <h2 className="text-xl md:text-3xl font-bold text-white">
                إطلاق العنان للإبداع الرسم والكتابة والخيال بلا حدود
              </h2>
              <div className="space-x-4"></div>
            </div>
            <Slider
              {...settings}
              className="testimonial-quote-slider text-white"
            >
              {/* Slide 1 */}
              <div className="testimonial-quote p-8 w-full focus:outline-none">
                <p className="quote pb-10 text-lg md:text-xl">
                  الرسم هو اللغة التي تعبر بها الروح عندما تعجز الكلمات عن وصف
                  الأحاسيس. إنه المساحة التي يمكنك فيها أن تُطلِق العنان
                  لأفكارك، وترسم ألوان حريتك كما تراها أنت. خطوط بسيطة أو لوحات
                  معقدة، المهم هو أنك تُعبّر عن نفسك دون قيود، وتُحلّق بأجنحة
                  إبداعك في سماء لا حدود لها.
                </p>
              </div>
              {/* Slide 2 */}
              <div className="testimonial-quote p-8 w-full focus:outline-none">
                <p className="quote pb-10 text-lg md:text-xl">
                  الكتابة ليست مجرد كلمات تُنسج على الورق، بل هي انعكاس لأعماق
                  الروح ورحلة لاستكشاف العالم الداخلي والخارجي. التفاني في تطوير
                  موهبتك هو المفتاح لصنع شيء يُلهم الآخرين. لا تخف من التحديات
                  أو العثرات؛ فهي التي تصقل قلمك وتحوله إلى أداة تعبير قوية تعكس
                  حقيقتك.
                </p>
              </div>
              {/* Slide 3 */}
              <div className="testimonial-quote p-8 w-full focus:outline-none">
                <p className="quote pb-10 text-lg md:text-xl">
                  الخيال هو الشرارة التي تُضيء طريق الإبداع. إنه العالم الذي
                  تخلقه بيديك وتنسج فيه قصصك وأفكارك، دون قيود الواقع. كل فكرة
                  مجنونة أو حلم غريب هو بداية مغامرة جديدة. اجعل من خيالك نافذة
                  ترى منها إمكانيات بلا حدود، واطلق العنان لما يمكن أن تُبدعه
                  عندما تؤمن بما في داخلك.
                </p>
              </div>
            </Slider>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 testimonial-image">
            <Slider {...settings} className="testimonial-image-slider h-full">
              <div className="testimonial-img w-full h-full">
                <img
                  src={img4}
                  alt="Testimonial Image"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="testimonial-img w-full h-full">
                <img
                  src={img5}
                  alt="Testimonial Image"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="testimonial-img w-full h-full">
                <img
                  src={img6}
                  alt="Testimonial Image"
                  className="object-cover rounded-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
