export interface TContent {
  Part1: Part1[];
  Register: Register[];
  Login: Login[];
}

export interface Part1 {
  name: string;
}
export interface Register {
  name: string;
  href?: string;
}
export interface Login {
  name: string;
  href?: string;
}

export const Content: TContent = {
  Part1: [
    { name: "بیش از ۱۲ سال" },
    { name: "انتخاب مطمئنِ کسب و کارهای آنلاین" },
    {
      name: "زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند",
    },
  ],
  Register: [{ name: "ثبت نام", href: "/" }],
  Login: [{ name: "ورود", href: "/" }],
};
