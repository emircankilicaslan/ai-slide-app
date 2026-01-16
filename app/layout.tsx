import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Slayt",
  description: "AI destekli slayt oluşturucu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}