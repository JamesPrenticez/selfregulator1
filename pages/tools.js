import Head from 'next/head'
import Header from '../components/Header'
import Tasks from '../components/Tasks/Tasks';

const ToolsPage = () => {
	return (
        <>
            <Head>
            <title>Self Regulator</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Tasks />
        </>
	);
};

export default ToolsPage;