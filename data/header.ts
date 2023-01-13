export interface Theader {
  menu: Menu[];
  button: Button[];
}

export interface Button {
  name: string;
}

export interface Menu {
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

export const header: Theader = {
  menu: [
    {
      name: "بیشتر",
      submenu: [
        {
          href: "/weblog",
          name: "وبلاک",
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

  button: [{ name: "زرین پال من " }],
};
