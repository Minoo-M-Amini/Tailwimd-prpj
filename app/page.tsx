function page() {
  return (
    <>
      {/*headear*/}
      <div className=" flex justify-center" dir="rtl">
        <ul className="flex">
          <li className="mt-3">
            <h1 className="text-lime-500 text-5xl">!Snap</h1>
          </li>
          <li className="relative group mt-5">
            <span className=" text-xl m-3 cursor-pointer "> سوپراپ اسنپ </span>

            <ul className="absolute right-0 top-full hidden w-40 group-hover:block">
              <li className="w-full px-4 py-2  hover:bg-gray-300">
                <span className=" text-xl m-3 cursor-pointer">
                  {" "}
                  درخواست تاکسی
                </span>
              </li>
              <li className="w-full px-4 py-2 hover:bg-gray-300">
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
          <li className="mt-5">
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
          <li className="relative group mt-5">
            <span className="text-xl m-3 cursor-pointer"> درباره اسنپ</span>
            <ul className="absolute right-0 top-full hidden w-40 group-hover:block">
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

export default page;
