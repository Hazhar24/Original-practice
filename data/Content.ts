export interface TContent {
  Section1: Section1[];
  Section2: Section2[];
  Register: Register[];
  Login: Login[];
  Makepayment: Makepayment[];
  moreAbout: moreAbout[];
}
export interface Makepayment {
  name: string;
  href?: string;
}
export interface moreAbout {
  name: string;
  href?: string;
}
export interface Section1 {
  name: string;
}
export interface Section2 {
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

export const ContentMain: TContent = {
  Register: [{ name: "ثبت نام", href: "/" }],
  Login: [{ name: "ورود", href: "/" }],
  Makepayment: [{ name: "ساخت درگاه پرداخت", href: "/" }],
  moreAbout: [{ name: "بیشتر بدانید", href: "/" }],
  Section1: [
    { name: "بیش از ۱۲ سال" },
    { name: "انتخاب مطمئنِ کسب و کارهای آنلاین" },
    {
      name: "زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند",
    },
  ],

  Section2: [
    { name: "درگاه پرداخت اینترنتی" },
    { name: "مهندسی شده برای رشد و فروش بیش تر" },
    {
      name: "درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود",
    },
  ],
};
