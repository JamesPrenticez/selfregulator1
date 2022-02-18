import Head from 'next/head'
// import Dates from '../components/Sandbox/Dates';
//import Graph from '../components/Sandbox/Graph';
import Heatmap from '../components/Sandbox/Heatmap';
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
        {/* <Dates /> */}
        {/* <Graph /> */}
        <Heatmap />
    </>
);
};

export default IndexPage;