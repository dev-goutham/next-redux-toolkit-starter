import { Provider } from 'react-redux'

import store from 'lib/redux/store'
import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
