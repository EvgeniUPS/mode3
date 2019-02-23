import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import theme from './theme'
import GlobalStyle from './theme/GlobalStyle'
import * as serviceWorker from './services/serviceWorker'
import RootRouter from './routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
