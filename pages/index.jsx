import React, { useState, useEffect } from "react";
import Head from "next/head";
import Habits from "../components/Habits/Habits";
import AddHabit from "../components/Habits/AddHabit";
import Spinner from "../components/Spinner"
import { useSession } from 'next-auth/react'
import { connect, useDispatch } from "react-redux";
import { setHabits } from "../redux/habits/actions"
import Hamburger from "../components/Hamburger";

const IndexPage = ({habits, showAddHabit}) => {
const {data: session} = useSession();
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

  console.log(habits)

  return (
    <>
      <Head>
        <title>Self Regulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <div className="sticky top-0 h-20 max-w-7xl mx-auto">
      < div className="flex w-full h-full items-center">
         <h1 className="ml-auto text-right mr-5 text-custom-secondaryAccent">{session ? session.user.name : ''}</h1>
        </div>
        <Hamburger showAddHabit={showAddHabit} session={session} />
        {/* <DarkModeToggle /> */}
      </div>

      <main className="grid gap-1 max-w-7xl mx-auto">
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