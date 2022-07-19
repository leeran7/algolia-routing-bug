import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const PersonPage: NextPage<{ id: number }> = ({ id }) => {
	return <div>{id}</div>;
};
export const getStaticPaths: GetStaticPaths = async () => ({
	paths: [],
	fallback: true,
});
export const getStaticProps: GetStaticProps<{ id: number }> = async ({
	params,
}) => {
	if (typeof params?.id !== "string" || !params?.id) {
		throw new Error("");
	}

	return {
		props: { id: Number(params.id) },
	};
};

export default PersonPage;
