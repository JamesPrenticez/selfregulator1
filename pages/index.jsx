import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Habits from "../components/Habits/Habits";
import AddHabit from "../components/Habits/AddHabit";
import Spinner from "../components/Spinner"

import { connect, useDispatch } from "react-redux";
import { setHabits } from "../redux/habits/actions"
import { toggleShowAddHabit } from "../redux/showAddHabit/actions"

const IndexPage = ({habits, showAddHabit}) => {
 const dispatch = useDispatch();
 const [isLoading, setLoading] = useState(true)

 useEffect(() => {
   //Fake loading time just for fun =P
    setTimeout(() => {
      setLoading(true)
      dispatch(setHabits())
      setLoading(false)
    }, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="grid gap-1 max-w-7xl mx-auto mt-4">
        {isLoading ?
          <Spinner />
          : 
          <Habits habits={habits}/>
        }

        {showAddHabit ? 
          <AddHabit />
        :
          ""
        }
      </main>
    </>
  );
};

function mapStateToProps(state) {
  return {
    habits: state.habits,
    showAddHabit: state.showAddHabit
  };
}

export default connect(mapStateToProps)(IndexPage);