import Link from "next/link";
import React from 'react'

function MainLinks() {
  return (
    <>
      {/*main-links*/}
      <div className=" mt-20" dir="rtl">
        <p className="text-3xl flex justify-center">
          یک اپلیکیشن، برای تمام نیازها{" "}
        </p>
        <ul className="">
          <li className="ml-10">
            <span className=" text-lg ">
              <img
                src="icons8-stars-64.png"
                alt="icons8-stars-64"
                className="mb-3"
              />
              پیشنهادی
            </span>
            <ul className="grid grid-cols-12 mt-15 mb-15">
              <li className="col-span-4 flex  justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex  justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex  justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
              <li className="col-span-4 flex justify-around m-5">
                <Link href="#" className="text-2xl">
                  تاکسی اینترنتی
                  <p className="text-lg">درخواست آنلاین خودرو</p>
                </Link>
                <img src="sedan (2).png" alt="sedan (2)" className="" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
    </>
  );
}

export default MainLinks

