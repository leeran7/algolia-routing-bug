import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch/lite";
import {
	InstantSearch,
	useHits,
	useRefinementList,
	UseRefinementListProps,
} from "react-instantsearch-hooks-web";
import Router from "next/router";
const searchClient = algoliasearch(
	process.env.ALGOLIA_APP_ID ?? "",
	process.env.ALGOLIA_API_KEY ?? ""
);

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Main />
			</main>
		</div>
	);
};

const Main: React.FC = () => {
	return (
		<InstantSearch
			indexName="algolia-test-routing-bug"
			searchClient={searchClient}
			routing
		>
			<Filter attribute="categories" limit={20} />
			<Hits />
		</InstantSearch>
	);
};

const Filter: React.FC<UseRefinementListProps> = (props) => {
	const { items, refine } = useRefinementList(props);
	if (items.length <= 1) return null;
	return (
		<div>
			{items.map((i) => (
				<button onClick={() => refine(i.value)}>{i.label}</button>
			))}
		</div>
	);
};

const Hits: React.FC = () => {
	const { hits } = useHits();
	return (
		<div>
			{hits.map((h: any) => (
				<div onClick={() => Router.push(`/person/${h.post_id}`)}>
					<h2>{h.author_name}</h2>
					<img src={h.author_image_url} />
				</div>
			))}
		</div>
	);
};
export default Home;
