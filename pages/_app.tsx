import "../styles/global.css"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
