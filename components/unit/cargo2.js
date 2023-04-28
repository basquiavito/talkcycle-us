import { Grid,  Text, Image} from "@nextui-org/react";
import TimeAgo from 'react-timeago'

 

export default function card(props){
    return <>
    <div className="cont">
    <Grid.Container     >
      <Grid  >
        <Image
          src={props.image}
          alt={props.alt}
          width={320}
          height={250}
    
      
        />
      <div className="headerContainer"><h2><span className="textContent">{props.title}</span></h2><br/>
      
      
      <span className="dekk">{props.dekk}</span> 
      </div>  



   
 <div className="authorContainer"><span className="authorContent"> {props.author}</span></div>  

 <div className="authorContainer"><span className="authorContent"> {props.year}</span></div> <br/>
 <time className="timeContainer"><span className="timeContent"><span > {props.date}</span></span></time> 

     
      </Grid>

      </Grid.Container>
    
 
  </div>


  <style jsx>{`
  .cont {
 display: flex;
 flex-flow: column wrap;
 justify-content: center;
text-align: center;
margin-bottom: 1rem;
  }
  .headerContainer {
 max-width: 340px;
    display: block;
 padding: 0;
    transition: color .15s;
    color: #2b2b2b; 
    text-align: center;
    font-family: Tiempos;
  
  
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
    font-size: 1.3rem;
}}

.dekkContainer{
 
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 2em;
  color: #2b2b2b;
  text-align: center;
  letter-spacing: .01em;
 
}
@media only screen and (min-width: 768px){
.dekkContainer {
    -webkit-box-flex: 1;
 
    flex: 1 1 auto;
}}
.dekkcontent {
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 2em;
  color: #2b2b2b;
  text-align: center;
  margin-top: 0;
  letter-spacing: .01em;

}


.authorContainer {
  color: #5e5e5e;
  display: inline;
  text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: .075em;
    font-weight: 600;
}

.authorContent {
 color: #2b2b2b;
}


.timeContent{
  text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: .075em;
    font-weight: 600;
    color: #b3b3b3;
}
  `}</style>
    </>
}

 
 