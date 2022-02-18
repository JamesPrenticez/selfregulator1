import Head from "next/head";
import Heatmap from "../components/Heatmap";
import Header from "../components/Header";
import Tasks from "../components/Tasks/Tasks";
import { signIn, useSession } from "next-auth/react";

const IndexPage = () => {
  const {data: session} = useSession();

  if (!session) {
    return (
      <>
      <Header />
      <div className="absolute flex flex-wrap h-screenNav w-full items-center justify-center -mt-20">
        <div className="flex flex-wrap h-36 w-full items-center justify-center ">
          <p className="text-red-500 text-3xl w-full text-center">
            You do not have access to this page! Please sign in.
          </p>
          <button
            className="w-32 text-custom-secondary p-2 font-bold border border-custom-tertiaryAccent rounded hover:bg-custom-secondaryAccent hover:text-custom-quarterAccent"
            onClick={signIn}
          >
            Sign In
          </button>
        </div>
      </div>
      </>
    );
  }
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
