export interface Theader {
  desktopMenu: desktopMenu[];
  button: Button[];
  mobileMenu: mobileMenu[];
}

export interface Button {
  name: string;
  href?: string;
}

export interface desktopMenu {
  name: string;
  submenu?: Submenu[];
  href?: string;
  withDescription?: boolean;
}

export interface Submenu {
  href?: string;
  name: string;
  description?: string;
  hreh?: string;
}

export interface mobileMenu {
  href?: string;
  name: string;
}

export const header: Theader = {
  mobileMenu: [
    { href: "/tariff", name: "تعرفه" },
    { href: "/application", name: "اپلیکیشن" },
    { href: "/questions", name: "سوالات متداول" },
    { href: "/Products", name: "محصولات" },
    { href: "/contactUs", name: "تماس با ما" },
  ],
  desktopMenu: [
    {
      name: "محصولات",
      withDescription: true,
      submenu: [
        {
          href: "/weblog",
          name: "درگاه پرداخت",
          description: "مهندسی شده برای فروش بیشتر",
        },
        {
          href: "/numberShaba",
          name: "زرین لینک",
          description: "لینک پرداخت در شبکه های اجتماعی",
        },
        {
          href: "/questions",
          name: "زرین پلاس",
          description: "ابزار هوشمند سوددهی",
        },
        {
          href: "/application",
          name: "زرین کارت",
          description: "طلایی ترین کارت بانکی",
        },
        {
          href: "/zarinbin",
          name: "تسهیم",
          description: "درگاه پرداخت اشتراکی",
        },
      ],
    },
    { name: "تماس با ما", href: "/contactUs" },
    { name: "توسعه دهندگان", href: "/developers" },
    { name: "تعرفه", href: "/tariff" },

    {
      name: "بیشتر",
      submenu: [
        {
          href: "/weblog",
          name: "وبلاگ",
        },
        {
          href: "/numberShaba",
          name: "دریافت شماره شبا",
        },
        {
          href: "/questions",
          name: "سوالات متداول",
        },
        {
          href: "/application",
          name: "اپلیکیشن",
        },
        {
          href: "/zarinbin",
          name: "زرین بین",
        },
      ],
    },
  ],
  button: [{ name: "زرین پال من ", href: "/myZarinpal" }],
};
