import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/ui/NavBar";
import Footer from "@/app/components/ui/Footer";
import ProvideRedux from "@/store/ProvideRedux";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PointXero",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProvideRedux>
        <body
          className={`${poppins.className} bg-black/90 no-scrollbar overflow-y-auto`}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </ProvideRedux>
    </html>
  );
}
