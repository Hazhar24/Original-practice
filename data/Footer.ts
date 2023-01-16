export interface Tfooter {
  support: support[];
  socialNetworks: socialNetworks[];
  button: Button[];
  sources: sources[];
  communication: communication[];
  gettingZarinPal: gettingZarinPal[];
  products: products[];
  moreSources: moreSources[];
  morecommunication: morecommunication[];
  moreGettingZarinPal: moreGettingZarinPal[];
  moreProducts: moreProducts[];
  zaripal: zaripal[];
}
export interface zaripal {
  name: string;
}
export interface moreProducts {
  name: string;
  href?: string;
}
export interface moreGettingZarinPal {
  name: string;
  href?: string;
}
export interface morecommunication {
  name: string;
  href?: string;
}
export interface moreSources {
  name: string;
  href?: string;
}
export interface sources {
  name: string;
}
export interface communication {
  name: string;
}
export interface gettingZarinPal {
  name: string;
}
export interface products {
  name: string;
}
export interface Button {
  name: string;
  href?: string;
}
export interface support {
  name: string;
}
export interface socialNetworks {
  name: string;
}

export const footer: Tfooter = {
  support: [
    { name: "021-41239 : شماره تماس" },
    { name: "|" },
    { name: "پشتیبانی 24 ساعته 7روز هفته" },
  ],
  moreSources: [
    { name: "دریافت شماره شبا", href: "/" },
    { name: "زرین بین", href: "/" },
    { name: "توسعه دهندگان", href: "/" },
    { name: "وبلاگ", href: "/" },
    { name: "سنجش رضایتمندی", href: "/" },
  ],
  morecommunication: [
    { name: "تماس با ما", href: "/" },
    { name: "قوانین و مقررات", href: "/" },
    { name: "حریم خصوصی", href: "/" },
  ],

  moreGettingZarinPal: [
    { name: "تعرفه", href: "/" },
    { name: "درباره ما", href: "/" },
    { name: "سوالات متداول", href: "/" },
    { name: "همکاری در فروش", href: "/" },
  ],

  moreProducts: [
    { name: "زرین لینک", href: "/" },
    { name: "درگاه پرداخت اینترنتی", href: "/" },
    { name: "زرین کارت", href: "/" },
    { name: "تسهیم", href: "/" },
  ],

  sources: [{ name: "منابع" }],
  communication: [{ name: "ارتباط بیشتر" }],
  gettingZarinPal: [{ name: "آشنایی با زرین پال" }],
  products: [{ name: "محصولات" }],

  socialNetworks: [{ name: ": زرین پال در شبکه های اجتماعی" }],
  button: [{ name: "درخواست پشتیبانی", href: "/" }],
  zaripal: [{ name: "زرین‌پال ۱۴۰۱-۱۳۸۹©" }],
};
