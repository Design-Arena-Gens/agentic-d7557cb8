import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عرض المنتج | سعر 3500 دج والتوصيل مجاني",
  description:
    "اكتشف العرض المميز لهذا المنتج بسعر 3500 دينار جزائري مع توصيل مجاني في كامل التراب الوطني.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
