/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
	reactStrictMode: true,
	env: {
		ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
		ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
	},
};

module.exports = nextConfig;
