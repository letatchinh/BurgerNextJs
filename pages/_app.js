import '../styles/globals.css'
import {store} from '../redux/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout >
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Component {...pageProps} /> 
    </Layout>
    </Provider>
  )
}

export default MyApp
