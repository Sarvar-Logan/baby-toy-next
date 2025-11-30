import type { AppProps } from "next/app"; // `AppProps`ni to'g'ri import qilish
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import '../scss/app.scss'
import '../scss/pc/main.scss'
import { appWithTranslation } from 'next-i18next';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";


const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const [theme, setTheme] = useState(createTheme(light));
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default appWithTranslation(App);