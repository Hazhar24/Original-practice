export interface TContent {
  Section1: Section1[];
  Section2: Section2[];
  Section3: Section3[];
  Section4: Section4[];
  Register: Register[];
  Login: Login[];
  Makepayment: Makepayment[];
  MakeZarinLink: MakeZarinLink[];
  RequestCard: RequestCard[];
  moreAbout: moreAbout[];
}
export interface Section1 {
  name: string;
}
export interface Section2 {
  name: string;
}
export interface Section3 {
  name: string;
}
export interface Section4 {
  name: string;
}
export interface RequestCard {
  name: string;
  href?: string;
}
export interface MakeZarinLink {
  name: string;
  href?: string;
}
export interface Makepayment {
  name: string;
  href?: string;
}
export interface moreAbout {
  name: string;
  href?: string;
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
  MakeZarinLink: [{ name: "ساخت زرین لینک", href: "/" }],
  RequestCard: [{ name: "درخواست زرین کارت", href: "/" }],
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
  Section3: [
    { name: "زرین لینک" },
    { name: "پرداخت در شبکه های اجتماعی" },
    {
      name: "زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود",
    },
  ],
  Section4: [
    { name: "زرین کارت" },
    { name: "طلایی‌ترین کارتِ بانکی" },
    {
      name: "زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند",
    },
  ],
};
