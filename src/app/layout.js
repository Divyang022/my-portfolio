import Footer from "@components/Footer"
import NavBar from "@components/Navbar"
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Portfolio",
  description: "Built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
