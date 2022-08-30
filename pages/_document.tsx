import { DocumentType } from "next/dist/shared/lib/utils";
import { Head, Html, Main, NextScript } from "next/document";

const Document: DocumentType = () => {
	return (
		<Html>
			<Head />
			<body className="dark:bg-neutral-900 dark:text-neutral-200">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
