import Head from "next/head";
import Header from "../components/Header";
import Habits from "../components/Habits";
import Spinner from "../components/Spinner"
import { useGetHabitsQuery } from "../redux/query/habits";

const IndexPage = () => {
  const { data: habits, isFetching } = useGetHabitsQuery()
  // console.log(habits)
 // const [cryptos, setCryptos] = useState(cryptosList?.data.coins)

  return (
    <>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="p-10">
        {isFetching ?
          <Spinner />
          : 
          <Habits habits={habits}/>
        }
      </div>

    </>
  );
};

export default IndexPage;