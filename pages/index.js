import Head from 'next/head'
import Dates from '../components/Sandbox/Dates';
import Graph from '../components/Sandbox/Graph';
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
        <Dates />
        <Graph />
    </>
);
};

export default IndexPage;