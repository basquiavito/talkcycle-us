import Image from "next/image"
 
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function audiocard(props){
    return <>
    <div id="main">
<div className="meta">
    <span>{`Episode ${props.episode}`}</span><span>{props.duration}</span>
</div>

<div className="imageContainer">
<Image  
width="300"
height="300"
alt="sonido"
src={`https://res.cloudinary.com/dsidx1efo/image/upload/${props.image}`}


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
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
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