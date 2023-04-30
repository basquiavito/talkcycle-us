import Image from "next/image"
 import SectionTitle from "./sectionTitle";
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



function audiocard(props){
    return <>
    <div id="main">
 
<div className="meta">
    <strong><span>{`${props.spanish}`}</span></strong>  <em><span>{props.english}</span></em> </div>

<div className="imageContainer">
<Image  
width="300"
height="300"
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
        padding-left: 5px;
 
        margin-bottom: 1rem;
        padding: 2.25rem;
       }
       
        
.meta {
display: flex;
justify-content: space-between;
padding: 15px; 10px 0 15px;
}
        
        `}
    </style>
    </>
}


export default audiocard