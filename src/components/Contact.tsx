const Contact = () => {
  return (
    <>
<div dir="rtl" className="max-w-screen-md mx-auto p-5">
  <div className="text-center mb-16">
    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase p-4">
        تواصل معنا
      </p>
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        كن <span className="text-indigo-600">على تواصل</span>
      </h3>
  </div>
  
  <form className="w-full ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
       الاسم الاول 
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="احمد"/>
      <p className="text-red-500 text-xs italic">ارجوك املاء الحقول</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        اسم العائلة
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="خالد"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        البريد الالكتروني
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**"/>
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
       رسالتك
      </label>
      <textarea rows={10} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"/>
          <span className="text-sm">
            سجل في نظا م الاشعارات
          </span>
        </label>
      </div>
      <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
       ارسال الرسالة
      </button>
    </div>
      
  </div>
    
</form>
</div>

    </>
  );
};

export default Contact;
