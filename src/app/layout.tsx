import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Panaverse Website",
  description: "This is the unofficial Panaverse Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
