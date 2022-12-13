import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { persistor, store } from '../store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import userLayout from '../layout/userLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
