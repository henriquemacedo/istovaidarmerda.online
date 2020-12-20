import Head from "next/head";

import Hero from "components/Hero";

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
		</>
	);
}
