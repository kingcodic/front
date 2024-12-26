import manga from "../assets/VEC-SAV-273-20-[Converted].jpg"
export default function Hero() {
  return (
    <>
    


    
    <section className="px-3 py-5 bg-neutral-100 lg:py-10">
  <div dir="rtl" className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-2 flex flex-col text-right ">
      <h1 className="text-4xl font-bold md:text-9xl py-8 text-[#148da1]">سمهر</h1>
      <p className="text-4xl font-bold md:text-3xl">بوابتك لعالم المناجا (القصص المصورة)</p>
      <p className="mt-2 text-sm md:text-lg">ماذا تنتظر سجل الان!!</p>
      <button className="text-lg md:text-2xl bg-black hover:scale-110 transitoion hover:rounded duration-700 text-white py-2 px-5 mt-10 hover:bg-zinc-800">تسجيل االدخول</button>
    </div>
    <div className="order-1 lg:order-1">
      <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={manga} alt=""/>
    </div>
  </div>
</section>
  

    </>
  )
}
