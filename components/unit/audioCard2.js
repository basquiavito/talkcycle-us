import Image from "next/image"
 import SectionTitle from "./sectionTitle";
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



function audiocard(props){
    return <>
    <div id="main">
 <div className="titleContainer"><h2>{props.title}</h2></div>
<div className="meta">
   <span className="spanish">{`${props.spanish}`}</span>   <span className="english">{props.english}</span>  
    
</div>
<div className="meta2">
   <p><em><span>{props.caption}</span></em></p> 
    
</div>
<div>
 

{ props.image ? ( <div className="imageContainer">
<Image  
width="240"
height="240"
alt="sonido"
src={props.image}


/>
</div>) : null }


</div>
<div className="audioContainer">
 <AudioPlayer
  src={props.audio}
 
  controls
/>  
</div>
 
 



    </div>
    
    
    <style jsx>
        {`
       #main {
 font-family: Tiempos;
 display: flex;
 flex-flow: column wrap;
 border-right: 1px solid #eee;
 padding-right: 2px;
        padding: 1rem;
       }

.titleContainer {
    padding: 2.25rem;
    
}
.titleContainer > h2 {
    font-size: 14px;
}
       @media (max-width: 600px){
       #main {
        border-right: 0;
       }}




     .spanish {
      
            font-weight: 900;
            font-size: 16px;
        }


        .english {
font-size: 14px; 
        }
.meta {
display: flex;
justify-content: space-between;
padding: 15px; 10px 0 15px;
border-bottom: 1px solid #ccc;
}

 .meta2{
    max-width: 240px;
  min-height:76px;
    border-opacity: 0.2;
    padding: 5px;
 }
 p{
    text-transform: none;
    font-family: Walfolk;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: normal;
    line-break: auto;
    line-height: 28px;
    font-size: 18px;
    font-weight: 400;
    overflow-wrap: normal;
   
    max-width: 1600px;
    color: rgb(33, 33, 33);
}
        `}
    </style>
    </>
}


export default audiocard