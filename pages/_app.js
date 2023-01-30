import '../styles/globals.css'
import {store} from '../redux/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
    <Layout >
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Component {...pageProps} /> 
    </Layout>
    </Provider>
    </SessionProvider>
  )
}

export default MyApp
