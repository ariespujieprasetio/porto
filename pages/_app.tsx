// _app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Pastikan Component adalah tipe ReactElement
  const ComponentElement = Component as React.ElementType;

  return <ComponentElement {...pageProps} />;
}

export default MyApp;
