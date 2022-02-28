import '../styles/global.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux';
import { store } from '../redux/store'

function App({ Component, pageProps: { session, ...pageProps} }) {
  return (
  <Provider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </Provider>
  )
}

export default App;