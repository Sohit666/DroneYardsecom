// src/app/layout.tsx
"use client";
import './globals.css';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path to your store file
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'; // Import your custom theme
import CssBaseline from '@mui/material/CssBaseline';
import { metadata } from './metadata'; // Import the metadata

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {metadata.authors.map((author, index) => (
          <meta key={index} name="author" content={author.name} />
        ))}
        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
      </head>
      <body>
        <Provider store={store}> {/* Wrap the application with Redux Provider */}
          <ClerkProvider> {/* Wrap with ClerkProvider */}
            <Navbar /> {/* Exclude Navbar from the ThemeProvider */}
            
            {/* ThemeProvider applied only to the main content */}
            <ThemeProvider theme={theme}>
              <CssBaseline /> {/* Ensure consistent styling */}
              <main className="min-h-screen">{children}</main>
            </ThemeProvider>

            <Footer /> {/* Exclude Footer from the ThemeProvider */}
          </ClerkProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
