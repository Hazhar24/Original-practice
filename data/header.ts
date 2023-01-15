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
    { name: "تماس با ما", href: "/contactUs" },
    { name: "توسعه دهندگان", href: "/developers" },
    { name: "تعرفه", href: "/tariff" },
    {
      name: "محصولات",
      withDescription: true,
      submenu: [
        {
          href: "/weblog",
          name: "وبلاگ",
          description: "متن توضیحات",
        },
        {
          href: "/numberShaba",
          name: "دریافت شماره شبا",
          description: "متن توضیحات",
        },
        {
          href: "/questions",
          name: "سوالات متداول",
          description: "متن توضیحات",
        },
        {
          href: "/application",
          name: "اپلیکیشن",
          description: "متن توضیحات",
        },
        {
          href: "/zarinbin",
          name: "زرین بین",
          description: "متن توضیحات",
        },
      ],
    },
  ],
  button: [{ name: "زرین پال من ", href: "/myZarinpal" }],
};
