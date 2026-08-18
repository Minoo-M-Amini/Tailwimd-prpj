import Link from "next/link";
import React from 'react'

function Article() {
  return (
    <>
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
              <Link href="#" className="col-span-4 text-amber-50 flex">
                <img
                  src="icons8-internet-30.png"
                  alt="icons8-internet-30"
                  className="h-5 w-5 m-1"
                />
                ورود به وب اپلیکیشن
              </Link>
            </div>
            <div className="border-2 border-solid border-green-600 hover:bg-green-200 rounded p-5 m-3">
              <Link href="#" className="col-span-2 flex">
                <img
                  src="icons8-arrow-down-30 (1).png"
                  alt="icons8-arrow-down-30 (1)"
                  className="h-6"
                />
                download
              </Link>
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

export default Article






