import Head from "next/head";
import Hero from "components/hero";
import Schedule from "components/schedule";
import Where from "components/where";
import Hein from "components/hein";
import Partners from "components/partners";
import Footer from "components/footer";
import { agenda } from "../utils/agenda";
import { rubrics } from "../utils/rubrics";
import { partners } from "../utils/partners";

/**
 * Home Page
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Isto vai dar merda 💩</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta key="description" name="description" content="" />
        <meta key="keywords" name="keywords" content="" />
      </Head>

      <Hero />
      <Schedule agenda={agenda} rubrics={rubrics} />
      <Where twitter="https://twitter.com/IstoVai" youtube="https://www.youtube.com/channel/UC-M0MHRa0CNewKhjCz4c2Qg" />
      <Hein />
      <Partners partners={partners} />
      <Footer />
    </>
  );
}
