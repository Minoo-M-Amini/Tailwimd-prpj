import Link from "next/link";




function Footer() {
  return (
    <>
      {/*footer*/}
      <div className="container m-auto mb-30" dir="rtl">
        <div dir="rtl" className="flex justify-center text-xl mb-10">
          <Link href="" className="m-auto">
            {" "}
            فرصت‌های شغلی
          </Link>
          <Link href="" className="m-auto">
            بلاگ
          </Link>
          <Link href="" className="m-auto">
            شرایط و قوانین
          </Link>
          <Link href="" className="m-auto">
            پنل سازمانی
          </Link>
          <Link href="" className="m-auto">
            سوالات متداول
          </Link>
          <Link href="" className="m-auto">
            باشگاه رانندگان
          </Link>
          <Link href="" className="m-auto">
            ثبت نام راننده اسنپ
          </Link>
          <Link href="" className="m-auto">
            کد تخفیف اسنپ
          </Link>
          <Link href="" className="m-auto">
            درباره ما
          </Link>
          <Link href="" className="m-auto">
            تماس با ما
          </Link>
        </div>
        <div className="flex justify-center mb-10">
          <Link href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Twitter.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Twitter"
              className="w-8 h-8"
            />
          </Link>
          <Link href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Telegram.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Telegram"
              className="w-8 h-8"
            />
          </Link>
          <Link href="" className="p-1.5">
            <img
              src="	https://web-cdn.snapp.ir/snapp-website/icons/social/Linkedin.svg"
              alt="	https://web-cdn.snapp.ir/snapp-website/icons/social/Linkedin"
              className="w-8 h-8"
            />
          </Link>
          <Link href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Instagram.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Instagram"
              className="w-8 h-8"
            />
          </Link>
          <Link href="" className="p-1.5">
            <img
              src="https://web-cdn.snapp.ir/snapp-website/icons/social/Youtube.svg"
              alt="https://web-cdn.snapp.ir/snapp-website/icons/social/Youtube"
              className="w-8 h-8"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="">
            <img src="enmad.jpg" alt="enmad" />
          </Link>
          <Link href="">
            <img
              src="https://ecunion.ir/bundles/pouyasoft/home/img/namad.png"
              alt="https://ecunion.ir/bundles/pouyasoft/home/img/namad"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer