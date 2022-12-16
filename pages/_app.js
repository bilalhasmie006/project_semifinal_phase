import '../styles/globals.css'
import { persistor, store } from '../store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import userLayout from '../layout/userLayout';

function MyApp({ Component, pageProps }) {

  const Layout= Component.Layout || (({children})=><>{children}</>);

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
      <Component {...pageProps} />
      </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
