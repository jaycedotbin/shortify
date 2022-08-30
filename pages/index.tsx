import { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen py-16 flex-1 flex w-full flex-col justify-center items-center">
				<h1 className="text-7xl text-center">
					Welcome to{" "}
					<a
						className="text-[#0070f3] no-underline hover:underline focus:underline active:underline text-center"
						href="https://nextjs.org"
					>
						Next.js!
					</a>
				</h1>

				<p className="my-16 leading-normal text-2xl text-center">
					Get started by editing{" "}
					<code className="dark:bg-neutral-800 rounded p-3 text-lg font-mono">
						pages/index.js
					</code>
				</p>

				<div className="flex items-center justify-center flex-wrap max-w-3xl">
					<a
						href="https://nextjs.org/docs"
						className="m-4 p-6 text-left border dark:border-neutral-800 border-neutral-100 rounded-xl transition-colors max-w-xs hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
					>
						<h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
						<p className="text-xl leading-normal">
							Find in-depth information about Next.js features and API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn"
						className="m-4 p-6 text-left border dark:border-neutral-800 border-neutral-100 rounded-xl transition-colors max-w-xs hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
					>
						<h2 className="mb-4 text-2xl">Learn &rarr;</h2>
						<p className="text-xl leading-normal">
							Learn about Next.js in an interactive course with quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className="m-4 p-6 text-left border dark:border-neutral-800 border-neutral-100 rounded-xl transition-colors max-w-xs hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
					>
						<h2 className="mb-4 text-2xl">Examples &rarr;</h2>
						<p className="text-xl leading-normal">
							Discover and deploy boilerplate example Next.js projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="m-4 p-6 text-left border dark:border-neutral-800 border-neutral-100 rounded-xl transition-colors max-w-xs hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
					>
						<h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
						<p className="text-xl leading-normal">
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className="flex flex-1 py-8 border-t border-neutral-400 justify-center items-center">
				<a
					className="flex justify-center items-center grow"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className="h-4 ml-2">
						<Image
							className="invert"
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</>
	);
};

export default Home;
