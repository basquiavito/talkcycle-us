import { Grid,  Text, Image} from "@nextui-org/react";
import TimeAgo from 'react-timeago'

 

export default function card(props){
    return <>
    <div className="cont">
 
      <Grid  >
        <div className="container">
        <Image
          src={props.image}
          alt={props.title}
          width={160}
          height={140}
 
      objectFit="cover"
        /></div>
      <div className="headerContainer">
     <span className="textContent">{props.player}</span> 
 <div className="authorContainer"><span className="authorContent"> {props.year}</span></div>  

        
        </div> 
  

     
      </Grid>

 
    
 
  </div>


  <style jsx>{`


  .cont {
 display: flex;
 flex-flow: column wrap;
 padding-right: 14px;
justify-content: center;
align-items: center;
margin-bottom: 40px;
  }


  .container {
    max-height: 150px;
    text-align: center;
  }
  .headerContainer {
 
    display: flex;
    flex-flow: column wrap;
    transition: color .15s;
    color: #2b2b2b; 
 
    font-family: Tiempos;
    justify-content: center;
align-items: center;
  
  
  }

  .textContent {
    font-weight: 700;
    text-align: center;
    word-wrap: break-word;
    margin: 0;
    line-height: 1.3;
    font-size: 1rem;
    
  }

  @media only screen and (min-width: 992px){
  .textContent  {
    font-size: 16px;
}}

 
 
 


 
 
  `}</style>
    </>
}

 
 