// src/app/layout.tsx
"use client";
import './globals.css'; // Your global CSS and Tailwind styles

import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ClerkProvider } from '@clerk/nextjs';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Provider store={store}> {/* Wrap the application with Redux Provider */}
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
