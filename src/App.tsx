import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './contexts/CartContext'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyles />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
