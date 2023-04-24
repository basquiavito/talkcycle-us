import Link from 'next/link'
 
function Header( ) {


 
 return (
   <>
        
<div className="subnav">
<Link 
href="/blogs" legacyBehavior><a  className="chartList"><span className="details">blogs</span> </a> 
</Link>

  
{/* <Link 
href="/" legacyBehavior><a  className="chartList"><span className="details">Hoopnotes</span> </a> 
</Link> */}
 
 
  
 
 
 

        
    
</div>
 <style jsx>
   {`   
 
 
 
 #borderLeft {
    border-left: 1px solid rgb(255, 255, 255);  
 }
 .subnav {
    height: 41px;
    background:  #0ff;
    display: flex;
    -webkit-box-pack: center;
    justify-content:center;
    -webkit-box-align: center;
    align-items: center;
}
 
.chartList {
    height: 0.875rem;
    padding: 0px 1.5rem;
    line-height: 1;
    color:#000;
}
 
 
a {
  
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.chartList span {
    white-space: nowrap;
    position: relative;
    top: -1px;   
}
 
 .details {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #282828;
    font-weight: bold;
 }
 
 
 
 
   a{
     text-decoration: none;
     color: #fff;
   }
   
   `}
 </style>
 
 
 </>)
}
 
export default Header;