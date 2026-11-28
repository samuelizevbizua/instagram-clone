import DemoBanner from "@/components/DemoBanner";
import Head from "next/head";
import "@/styles/globals.css";
import { LoaderContextProvider } from "@/context/LoaderContext";

export default function App({ Component, pageProps }) {
  return (
    <LoaderContextProvider>
      <Head>
        <title>Social Feed UI Demo | Samuel Izevbizua Portfolio</title>
        <meta name="description" content="Social Feed UI Demo | Samuel Izevbizua Portfolio" />
      </Head>
      <DemoBanner />
      <Component {...pageProps} />
    </LoaderContextProvider>
  );
}
