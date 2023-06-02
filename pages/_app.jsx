import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { Footer } from '../src/components/footer/Footer';
import '../src/styles/global.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>Project Futibiribas</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    )
}