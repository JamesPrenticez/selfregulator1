import Head from 'next/head'
import Course from '../components/Course';
import Header from '../components/Header'

const CoursePage = () => {
	return (
		<>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Course />
    </>
	);
};

export default CoursePage;