import Head from 'next/head'
import Header from '../components/Header'
import WinTheDay from '../components/WinTheDay'

const ToolsPage = () => {
	return (
        <>
            <Head>
            <title>Self Regulator</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <WinTheDay />
        </>
	);
};

export default ToolsPage;