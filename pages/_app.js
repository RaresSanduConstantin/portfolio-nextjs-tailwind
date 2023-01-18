import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import DefaultLayout from "../components/layout/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </DefaultLayout>
  );
}

export default MyApp;