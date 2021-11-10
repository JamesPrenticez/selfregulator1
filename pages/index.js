import Head from 'next/head'
import Header from '../components/Header'

const IndexPage = () => {
	return (
		<>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
	);
};

export default IndexPage;