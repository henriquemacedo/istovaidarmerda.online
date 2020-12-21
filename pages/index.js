import Head from "next/head";

import Hero from "components/hero";
import Schedule from "components/Schedule";
import Where from "components/Where";
import Hein from "components/Hein";
import { events } from "../utils/schedule";

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
      <Schedule events={events} />
      <Where twitter="https://twitter.com/IstoVai" youtube="https://youtube.com" />
      <Hein />
    </>
  );
}
