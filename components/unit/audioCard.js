import Image from "next/image"
 
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function audiocard(props){
    return <>
    <div id="main">
<div>
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
        padding-left: 10px;
       }
       
        

        
        `}
    </style>
    </>
}


export default audiocard