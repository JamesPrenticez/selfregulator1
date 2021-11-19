import Head from 'next/head'
import Header from '../components/Header'
//import Tick from '../components/Tick';

const IndexPage = () => {
	return (
    <>
        <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* <Tick /> */}
    </>
);
};

export default IndexPage;