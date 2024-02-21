import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import "../styles/antd.min.css"
// import Sidebar from "./component/sidebar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "spp",
  description: "website spp sekolah",
};

const RootLayout = ({ children }) => { 
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div id="app">
          <div id="app-loading"> */}
            
            <AntdRegistry>
              {/* <Sidebar> */}
              {children}
              {/* </Sidebar> */}
            </AntdRegistry>
          {/* </div>
        </div> */}
      </body>
    </html>
  );
}

export default RootLayout