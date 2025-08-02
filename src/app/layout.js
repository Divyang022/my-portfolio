import Footer from "@components/Footer"
import NavBar from "@components/Navbar"
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Portfolio",
  description: "Built with Next.js",
  // 👇 Manually add preload for image
  other: {
    'link': [
      {
        rel: 'preload',
        as: 'image',
        href: 'https://leetcard.jacoblin.cool/Divyang_Pandoh02?theme=unicorn&font=Alegreya&ext=heatmap',
      },
    ],
  },
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
