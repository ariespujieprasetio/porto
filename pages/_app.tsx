// _app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof Component === 'function') {
    return <Component {...pageProps} />;
  }

  // Handle cases where Component is not a function (if needed)
  return null; // Or return default behavior
}

export default MyApp;
