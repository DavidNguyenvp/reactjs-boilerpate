import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import MuiThemeProvider from './themes/MuiThemeProvider'
import i18n from './translations/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider>
                <BrowserRouter>
                    <I18nextProvider i18n={i18n}>
                        <App />
                    </I18nextProvider>
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>
)
