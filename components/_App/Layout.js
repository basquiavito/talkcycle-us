import Header from './Header'
   import Subheader from './subHeader'
import Footer from './Footer'
 import { Container } from 'semantic-ui-react'
 import { Analytics } from '@vercel/analytics/react'
 import localFont from 'next/font/local'


 const myFont = localFont({ src: '../../public/Walfork-Regular.woff' })

 export default function layout({children}){
    return <>

<header>
        <div id="header">
    <Header />
    </div>  

    <div id="header">
    <Subheader />
    </div>
    </header>

    <main className={myFont.className}>
<div className="children">
 <Container>
{children}

 </Container>
 <Analytics />
</div>

</main>
 

    
 


<footer>
 
  <Footer />  
  </footer>

<style jsx>
    {`
 main {
 max-width: 64rem;
 padding: 1.5rem;
 margin: auto;
 
 }
    `}
</style>
    </>
}