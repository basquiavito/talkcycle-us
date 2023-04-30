import Image from "next/image"
 import SectionTitle from "./sectionTitle";
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



function audiocard(props){
    return <>
    <div id="main">
 
<div className="meta">
    <strong><span className="spanish">{`${props.spanish}`}</span></strong>  <em><span>{props.english}</span></em>
    
</div>
<div className="meta2">
    <em><span>{props.caption}</span></em>
    
</div>

<div className="imageContainer">
<Image  
width="240"
height="240"
alt="sonido"
src={props.image}


/>
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
 
 display: flex;
 flex-flow: column wrap;
 border-right: 1px solid #eee;
 padding-right: 2px;
        padding: 1rem;
       }



       @media (max-width: 600px){
       #main {
        border-right: 0;
       }}




     .spanish {
            font-weight: 700;
        }
.meta {
display: flex;
justify-content: space-between;
padding: 15px; 10px 0 15px;
}

 .meta2{
    max-width: 240px;
  min-height:76px;
    border-opacity: 0.2;
    padding: 5px;
 }
        
        `}
    </style>
    </>
}


export default audiocard