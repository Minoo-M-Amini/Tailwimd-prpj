import Link from 'next/link';



function WebLog() {
  return (
    <>
      {/*weblog*/}
      
        <div className="container m-auto mb-20" dir="rtl">
          <div className="flex  justify-between ">
            <p className="text-2xl">تازه‌ترین‌های وبلاگ اسنپ</p>
            <button className="hover:bg-green-100 rounded p-2.5">
              <Link href="" className="flex text-xl text-green-600">
                مطالب بیشتر در وبلاگ اسنپ
                <img
                  src="icons8-left-arrow-30.png"
                  alt="icons8-left-arrow-30"
                  className="h-3 w-3 mr-1.5 mt-2"
                />
              </Link>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <Link href="" className=" rounded m-5 w-full">
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
            </Link>
            <Link href="" className="rounded m-5 w-full">
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
            </Link>
            <Link href="" className=" rounded m-5 w-full">
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
            </Link>
          </div>
        </div>
      
    </>
  );
}

export default WebLog