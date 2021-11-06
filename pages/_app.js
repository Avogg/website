import 'tailwindcss/tailwind.css'
import AppBar from '../components/AppBar';
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {

  // create the AppBar if page
  const router = useRouter()
  if (router.pathname != "/"){
    return (
    <AppBar>
    <Component {...pageProps} />
    </AppBar>)
  }

  return <Component {...pageProps} />
  
}

export default MyApp
