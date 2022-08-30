import { AppProps } from "next/app";
import { AppType } from "next/dist/shared/lib/utils";
import "../styles/tailwind.css";

const App: AppType = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
