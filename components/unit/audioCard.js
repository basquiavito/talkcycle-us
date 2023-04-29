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
           display: flex
           flex-flow: column wrap;
           justify-content: center;
            padding-top: 1rem;
            margin-top: 1rem;
            margin: 10px;
     

        }

        .imageContainer {
            padding-left:2px;

        }

        
        `}
    </style>
    </>
}


export default audiocard