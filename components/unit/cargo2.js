import { Grid,  Text, Image} from "@nextui-org/react";
import TimeAgo from 'react-timeago'

 

export default function card(props){
    return <>
    <div className="cont">
    <Grid.Container     >
      <Grid  >
        <Image
          src={`https://res.cloudinary.com/dsidx1efo/image/upload/${props.image}`}
          alt={props.alt}
          width={250}
          height={250}
    
      
        />
      <div className="headerContainer"><h2><span className="textContent">{props.title}</span></h2><br/>
      
      
      <span className="dekk">{props.dekk}</span> 
      </div>  



   
 <div className="authorContainer"><span className="authorContent"> By {props.author}</span></div>  

 <div className="authorContainer"><span className="authorContent"> {props.year}</span></div> <br/>
 <time className="timeContainer"><span className="timeContent"> {props.date}</span></time> 

     
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
color: #000;
padding:1rem;
  }


  @media (max-width: 400px){
    .cont {
padding: 0;
 
color: #000;
    }}


  .headerContainer {
 max-width: 340px;
    display: block;
 padding: 0;
    transition: color .15s;
    color: #2b2b2b; 
    text-align: center;
    font-family: Tiempos;
    color: #000;
  
  }

  .textContent {
    font-weight: 700;
    text-align: center;
    word-wrap: break-word;
    margin: 0;
    line-height: 1.3;
    font-size: 1rem;
    color: #000;
    --type-token: discovery.hed-core-primary;
    text-transform: none;
    font-family: Walfolk, helvetica, sans-serif;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: normal;
    font-variant-ligatures: none;
    line-break: auto;
    line-height: 1.35em;
    font-size: 24px;
    font-weight: 700;
    overflow-wrap: normal;
    
  }

  @media only screen and (min-width: 992px){
  .textContent  {
    font-size: 1.3rem;
}}

.dekkContainer{
  color: #000;
 
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


.dekk {
  color: rgb(26, 26, 26);
  transition-property: color, background, text-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  margin-top: 1.5rem;
  cursor: unset;
  text-align: center;
 s
  text-transform: none;
  font-family: Walfork, helvetica, sans-serif;
  font-feature-settings: normal;
  font-style: normal;
  letter-spacing: normal;
  font-variant-ligatures: none;
  line-break: auto;
  line-height: 1.4em;
  font-size: 14px;
  font-weight: 400;
  overflow-wrap: normal;
}
  `}</style>
    </>
}

 
 