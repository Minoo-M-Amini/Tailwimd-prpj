import Image from "next/image";
function page() {
  return (
    <>
      {/*headear*/}
      <div className=" flex justify-center" dir="rtl">
        <ul className="flex">
          <li className="mt-3">
            <img src="snaplogo.svg" alt="snaplogo" className="mt-3" />
          </li>
          <li className="relative group mt-3">
            <span className=" text-xl m-3  mt-2 cursor-pointer flex">
              سوپراپ اسنپ{" "}
              <img
                src="icons8-arrow-down-30.png"
                alt="icons8-arrow-down-30"
                className="w-3 h-3 mt-2.5 mr-0.5"
              />
            </span>

            <ul className="absolute right-0 top-full hidden w-40 group-hover:block bg-amber-50">
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className=" text-xl m-3 cursor-pointer">
                  {" "}
                  درخواست تاکسی
                </span>
              </li>
              <li className="w-full px-4 py-2 hover:bg-gray-300 ">
                <span className="text-xl  cursor-pointer"> پیک موتوری</span>
              </li>
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className="text-xl cursor-pointer ">
                  {" "}
                  سفارش آنلاین غذا اسنپ فود
                </span>
              </li>
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className="text-xl  cursor-pointer">اسنپ بیمه </span>
              </li>
              <li className="w-full px-4 py-2 hover:bg-gray-300">
                <span className="text-xl cursor-pointer">
                  {" "}
                  اسنپ پرواز (بلیط هواپیما اسنپ)
                </span>
              </li>
              <li className="w-full px-4 py-2 hover:bg-gray-300">
                <span className="text-xl cursor-pointer">
                  سوپرمارکت آنلاین اسنپ مارکت
                </span>
              </li>
            </ul>
          </li>

          <li className="mt-5 ">
            <span className=" text-xl m-3 cursor-pointer">
              {" "}
              ثبت نام راننده اسنپ
            </span>
          </li>
          <li className="mt-5">
            <span className="text-xl m-3 cursor-pointer">
              {" "}
              اسنپ پی (سرویس اعتباری)
            </span>
          </li>
          <li className="mt-5">
            <span className="text-xl m-3 cursor-pointer"> پنل سازمانی</span>
          </li>
          <li className="mt-5">
            <span className="text-xl m-3 cursor-pointer"> باشگاه رانندگان</span>
          </li>
          <li className="mt-5">
            <span className="text-xl m-3 cursor-pointer"> بلاگ</span>
          </li>
          <li className="relative group mt-3">
            <span className="text-xl m-3 mt-1.5 cursor-pointer flex">
              {" "}
              درباره اسنپ
              <img
                src="icons8-arrow-down-30.png"
                alt="icons8-arrow-down-30"
                className="w-3 h-3 mt-2.5 mr-0.5"
              />
            </span>
            <ul className="absolute right-0 top-full hidden w-40 group-hover:block bg-amber-50">
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className="text-xl cursor-pointer "> فرصت‌های شغلی</span>
              </li>
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className="text-xl cursor-pointer "> درباره ما</span>
              </li>
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className="text-xl cursor-pointer "> تماس با ما</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/*article*/}
      <div className="grid grid-cols-12 mt-35" dir="rtl">
        <div className="col-start-3 col-end-7">
          <p className="text-[40px] mt-20 mb-5">
            تجربه‌ی زندگی راحت‌تر، سریع‌تر و<br /> به‌صرفه‌تر با سوپراپلیکیشن
            اسنپ!
          </p>
          <p className="text-[20px]">
            از درخواست خودرو تا سفارش غذا، خرید سوپرمارکتی، رزرو بلیت سفر و...
            را با اسنپ انجام دهید.
          </p>
          <div className="flex">
            <div className="bg-green-600 rounded p-5 m-3">
              <a href="#" className="col-span-4 text-amber-50 flex">
                <img
                  src="icons8-internet-30.png"
                  alt="icons8-internet-30"
                  className="h-5 w-5 m-1"
                />
                ورود به وب اپلیکیشن
              </a>
            </div>
            <div className="border-2 border-solid border-green-600 rounded p-5 m-3">
              <a href="#" className="col-span-2 flex">
                <img
                  src="icons8-arrow-down-30 (1).png"
                  alt="icons8-arrow-down-30 (1)"
                  className="h-6"
                />
                download
              </a>
            </div>
          </div>
        </div>
        <div className="col-start-8 col-end-12">
          <img
            src="rightArticle.png"
            alt="leftArticle-photo"
            className="col-end-6"
          />
        </div>
      </div>
      
    </>
  );
}

export default page;
