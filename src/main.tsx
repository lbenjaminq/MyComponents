import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeConfig } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeConfig>
    <App />
  </ThemeConfig>
)
