import Head from "next/head";
import Heatmap from "../components/Heatmap";
import Header from "../components/Header";
import Tasks from "../components/Tasks/Tasks";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Tasks />
      <div className="w-screen p-4 flex justify-center overflow-scroll sm:overflow-hidden">

          <Heatmap />

      </div>
    </>
  );
};

export default IndexPage;
