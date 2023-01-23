import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body dir="rtl">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
