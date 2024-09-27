
import "./globals.css";


import './globals.css'; // Your global CSS and Tailwind styles
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export const metadata = {
  title: 'DroneYards',
  description: 'Your one-stop shop for drone parts and accessories',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
      <ClerkProvider>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer/>
        </ClerkProvider>
      
      </body>
    </html>
  );
};

export default RootLayout;
