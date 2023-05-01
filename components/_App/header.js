 
 import 'semantic-ui-css/semantic.min.css'

import Link from 'next/link'
 
 
 

 

function Header( ) {


 
 return (
   <>
        
<nav role="navigation">
 
      
 

 <div className="logo">
 <Link  href="/" ><h1><span>TalkCycle</span></h1></Link></div>
 


 
 


</nav>
 <style jsx>
   {`   
 
   .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
    text-transform: uppercase;
    font-family: Walfork, helvetica, sans-serif;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: 0.083em;
    font-variant-ligatures: none;
    line-break: auto;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 600;
    overflow-wrap: normal;
   }

   a {
    color: #181818;
   }

   h1{
    font-family: Walfolk;
color: #181818;

   }


   `}
 </style>
 
 
 </>)
}
 
 
export default Header;