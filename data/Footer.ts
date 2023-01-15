export interface Tfooter {
  support: support[];
  socialNetworks: socialNetworks[];
  button: Button[];
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
    { name: "پشتیبانی24ساعته 7روز هفته" },
  ],
  socialNetworks: [{ name: ": زرین پال در شبکه های اجتماعی" }],
  button: [{ name: "درخواست پشتیبانی", href: "/" }],
};
