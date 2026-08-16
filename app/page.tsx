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
            <div className="bg-green-600 rounded hover:bg-green-500 p-5 m-3">
              <a href="#" className="col-span-4 text-amber-50 flex">
                <img
                  src="icons8-internet-30.png"
                  alt="icons8-internet-30"
                  className="h-5 w-5 m-1"
                />
                ورود به وب اپلیکیشن
              </a>
            </div>
            <div className="border-2 border-solid border-green-600 hover:bg-green-200 rounded p-5 m-3">
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
      {/*main-links*/}
      <div className=" mt-20" dir="rtl">
        <p className="text-3xl flex justify-center">
          یک اپلیکیشن، برای تمام نیازها{" "}
        </p>
        <ul className="flex">
          <li className="ml-10">
            <a href="" className="pr-17.5 text-xl">
              <img
                src="fork-and-spoon (1).png"
                alt="fork-and-spoon (1)"
                className="mb-3"
              />
              سرویس غذا
            </a>
          </li>
          <li className="ml-10 ">
            <a href="" className="pr-17.5 text-xl">
              <img
                src="fork-and-spoon (1).png"
                alt="fork-and-spoon (1)"
                className="mb-3"
              />
              سرویس غذا
            </a>
          </li>
          <li className="ml-10">
            <span href="#" className=" text-lg ">
              <img
                src="icons8-stars-64.png"
                alt="icons8-stars-64"
                className="mb-3"
              />
              پیشنهادی
            </span>
            <ul className="grid grid-cols-12 mt-15 mb-15">
              <li className="col-span-4 flex  justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex  justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex  justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <a href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </a>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/*sabte-nam*/}
      <>
        <div className="grid grid-cols-12 " dir="rtl">
          <img
            src="snap1.jpg"
            alt="snap1"
            className="col-start-3 col-span-8 mb-5"
          />
          <p className="col-start-4 col-span-6 text-3xl mr-20 mb-3">
            در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
          </p>
          <p className="col-start-4 col-span-6 text-xl mb-5 mr-20">
            بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
            اینترنتی انجام دهید.
          </p>
        </div>
        <button className="m-5">
          <a
            href=""
            className="text-2xl text-amber-50 bg-green-600 hover:bg-green-500 rounded p-2 "
          >
            ثبت نام رانندگان
          </a>
        </button>
        <video
          src="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4 "
          className="h-150 w-320 m-auto mb-10"
          controls
          preload="none"
        ></video>
        <div className="grid grid-cols-12" dir="rtl">
          <div className="col-start-2 col-end-6">
            <img
              className="m-auto"
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
              alt="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income"
            />
            <p className="text-2xl">درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p>
            <p className="text-xl">
              با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
              در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
              افزایش دهید.
            </p>
          </div>
          <div className="col-start-7 col-end-11">
            <img
              className="m-auto"
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
              alt="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income"
            />
            <p className="text-2xl">درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p>
            <p className="text-xl">
              با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
              در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
              افزایش دهید.
            </p>
          </div>
          <div className="col-start-2 col-end-6">
            <img
              className="m-auto"
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
              alt="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income"
            />
            <p className="text-2xl">درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p>
            <p className="text-xl">
              با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
              در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
              افزایش دهید.
            </p>
          </div>
          <div className="col-start-7 col-end-11">
            <img
              className="m-auto"
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
              alt="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income"
            />
            <p className="text-2xl">درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p>
            <p className="text-xl">
              با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
              در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
              افزایش دهید.
            </p>
          </div>
          <div className="col-start-2 col-end-6">
            <img
              className="m-auto"
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
              alt="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income"
            />
            <p className="text-2xl">درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p>
            <p className="text-xl">
              با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
              در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
              افزایش دهید.
            </p>
          </div>
          <div className="col-start-7 col-end-11 mb-30">
            <img
              className="m-auto"
              src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
              alt="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income"
            />
            <p className="text-2xl">درآمد تضمینی + پاداش‌های ماهانه و هفتگی</p>
            <p className="text-xl">
              با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
              در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
              افزایش دهید.
            </p>
          </div>
        </div>
      </>

      {/*saling*/}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*weblog*/}
      <>
        <div className="container m-auto" dir="rtl">
          <div className="flex justify-between">
            <p className="text-2xl">تازه‌ترین‌های وبلاگ اسنپ</p>
            <button className="hover:bg-green-100 rounded p-2.5">
              <a href="" className="flex text-xl text-green-600">
                مطالب بیشتر در وبلاگ اسنپ
                <img
                  src="icons8-left-arrow-30.png"
                  alt="icons8-left-arrow-30"
                  className="h-3 w-3 mr-1.5 mt-2"
                />
              </a>
            </button>
          </div>
          <div className="flex justify-between">
            <a href="" className=" rounded m-5 w-full">
              <img
                src="https://snapp.ir/blog/wp-content/uploads/2025/02/Blog-header-1600x400-1.jpg"
                alt="https://snapp.ir/blog/wp-content/uploads/2025/02/Blog-header-1600x400-1"
                className="rounded h-70"
              />
              <br />
              <p className="text-2xl">
                سرویس «سفر اشتراکی» اسنپ،‌ به‌صرفه‌تر و پایدارتر
              </p>
              <br />
              <p className="text-xl">
                سرویس سفر اشتراکی راهکاری مناسب برای کاهش هزینه‌ها، به‌ویژه در
                ساعات اوج ترافیک است.
              </p>
            </a>
            <a href="" className="rounded m-5 w-full">
              <img
                src="https://snapp.ir/blog/wp-content/uploads/2024/06/Layer-17.jpg"
                alt="https://snapp.ir/blog/wp-content/uploads/2024/06/Layer-17"
                className="rounded h-70"
              />
              <br />
              <p className="text-2xl">
                افزایش امنیت کاربران راننده اسنپ با سرویس «امنیت سفر»
              </p>
              <br />
              <p className="text-xl">
                ساسنپ با معرفی سرویس «امنیت سفر» به کاربران مسافر این امکان را
                داده تا در صورت بروز هرگونه مشکل یا احساس ناامنی، به طور مستقیم
                با تیم امنیت سفر تماس بگیرند،... ساعات اوج ترافیک است.
              </p>
            </a>
            <a href="" className=" rounded m-5 w-full">
              <img
                src="https://snapp.ir/blog/wp-content/uploads/2026/01/PR_Cab_Blog-Cover_1007-scaled.jpg"
                alt="https://snapp.ir/blog/wp-content/uploads/2026/01/PR_Cab_Blog-Cover_1007-scaled"
                className="rounded h-70"
              />
              <br />
              <p className="text-2xl">۱۶ باور اشتباه درباره سفرهای اسنپی</p>
              <br />
              <p className="text-xl">
                سشاید هنگام استفاده از اسنپ سوال‌هایی برای‌تان پیش آمده باشد که
                پاسخش را نمی‌دانید؛... ساعات اوج ترافیک است.
              </p>
            </a>
          </div>
          <div></div>
        </div>
      </>
      <br />
      <br />
      {/*footer*/}
      <div className="container m-auto" dir="rtl">
        <div dir="rtl" className="flex justify-center text-xl mb-10">
          <a href="" className="m-auto">
            {" "}
            فرصت‌های شغلی
          </a>
          <a href="" className="m-auto">
            بلاگ
          </a>
          <a href="" className="m-auto">
            شرایط و قوانین
          </a>
          <a href="" className="m-auto">
            پنل سازمانی
          </a>
          <a href="" className="m-auto">
            سوالات متداول
          </a>
          <a href="" className="m-auto">
            باشگاه رانندگان
          </a>
          <a href="" className="m-auto">
            ثبت نام راننده اسنپ
          </a>
          <a href="" className="m-auto">
            کد تخفیف اسنپ
          </a>
          <a href="" className="m-auto">
            درباره ما
          </a>
          <a href="" className="m-auto">
            تماس با ما
          </a>
        </div>
        <div className="flex justify-center mb-10">
          <a href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Twitter.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Twitter"
              className="w-8 h-8"
            />
          </a>
          <a href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Telegram.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Telegram"
              className="w-8 h-8"
            />
          </a>
          <a href="" className="p-1.5">
            <img
              src="	https://web-cdn.snapp.ir/snapp-website/icons/social/Linkedin.svg"
              alt="	https://web-cdn.snapp.ir/snapp-website/icons/social/Linkedin"
              className="w-8 h-8"
            />
          </a>
          <a href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Instagram.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Instagram"
              className="w-8 h-8"
            />
          </a>
          <a href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Youtube.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Youtube"
              className="w-8 h-8"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="">
            <img src="enmad.jpg" alt="enmad" />
          </a>
          <a href="">
            <img
              src="https://ecunion.ir/bundles/pouyasoft/home/img/namad.png"
              alt="https://ecunion.ir/bundles/pouyasoft/home/img/namad"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default page;
