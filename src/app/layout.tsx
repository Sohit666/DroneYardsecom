// src/app/layout.tsx
"use client";
import './globals.css';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path to your store file
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}> {/* Wrap the application with Provider */}
          <ClerkProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ClerkProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
