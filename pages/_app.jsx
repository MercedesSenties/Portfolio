import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <div className="bg-[#fafafa] dark:bg-primary-dark transition duration-300">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
