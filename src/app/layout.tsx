import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
// import Navbar from "@/components/layout/Navbar/Navbar";
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
      <head>
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body>
        <div className="sticky top-0 z-[100] bg-white shadow-md">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
