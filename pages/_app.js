import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
