import React from 'react'

function Header() {
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
      
    </>
  );
}

export default Header


















