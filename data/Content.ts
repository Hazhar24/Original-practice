export interface TContent {
  Section1: Section1[];
  Section2: Section2[];
  Section3: Section3[];
  Section4: Section4[];
  Section5: Section5[];
  Section6: Section6[];
  Register: Register[];
  Login: Login[];
  ShareRequest: ShareRequest[];
  Makepayment: Makepayment[];
  MakeZarinLink: MakeZarinLink[];
  RequestCard: RequestCard[];
  moreAbout: moreAbout[];
  JoinZarinPlus: JoinZarinPlus[];
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
export interface Section5 {
  name: string;
}
export interface Section6 {
  name: string;
}
export interface RequestCard {
  name: string;
  href?: string;
}
export interface JoinZarinPlus {
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
export interface ShareRequest {
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
  ShareRequest: [{ name: "درخواست فعال سازی تسهیم", href: "/" }],
  JoinZarinPlus: [{ name: "پیوستن به زرین پلاس", href: "/" }],
  Section1: [
    { name: "بیش از ۱۲ سال" },
    { name: "انتخاب مطمئنِ کسب و کارهای آنلاین" },
    {
      name: "زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند",
    },
  ],
  Section2: [
    { name: "درگاه پرداخت اینترنتی" },
    { name: "مهندسی شده برای رشدوفروش بیش‌تر " },
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
  Section5: [
    { name: "تسهیم" },
    { name: "درگاه پرداخت اشتراکی" },
    {
      name: "تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود",
    },
  ],
  Section6: [
    { name: "زرین پلاس" },
    { name: "ابزار هوشمند سوددهی" },
    {
      name: "زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند",
    },
  ],
};
