import Head from 'next/head'
import Graph from '../components/Graph';
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
        <Graph />
    </>
);
};

export default IndexPage;