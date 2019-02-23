import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'
import store from './store'
import theme from './theme'
import RootRouter from './routes'
import GlobalStyle from './theme/GlobalStyle'
import * as serviceWorker from './services/serviceWorker'

export const history = createBrowserHistory()

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
