import '../styles/global.css'
import { SessionProvider } from "next-auth/react"
import { wrapper } from '../redux/store'

function App({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default wrapper.withRedux(App)