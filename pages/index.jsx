import Head from "next/head";
import Header from "../components/Header";
import Habits from "../components/Habits";
import Spinner from "../components/Spinner"
import { useState, useEffect } from "react";
import { setHabits } from "../redux/habits/action"
import { connect, useDispatch } from "react-redux";

const IndexPage = ({habits}) => {
 const dispatch = useDispatch();
 const [isLoading, setLoading] = useState(true)

 useEffect(() => {
   //Fake loading time just for fun =P
    setTimeout(() => {
      setLoading(true)
      dispatch(setHabits())
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="p-10">
        {isLoading ?
          <Spinner />
          : 
          <Habits habits={habits}/>
        }
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    habits: state.habits,
  };
}

export default connect(mapStateToProps)(IndexPage);