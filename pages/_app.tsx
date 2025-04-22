import "@/styles/globals.css";
import type { AppProps } from "next/app";

console.log('Print')

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
