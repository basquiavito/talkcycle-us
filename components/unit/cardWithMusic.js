import Image from "next/image"
 import SectionTitle from "./sectionTitle";
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function audiocard(props){
    return <>
    <div id="main">
 
 
<iframe allow="autoplay *; encrypted-media *;"  frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={props.link}></iframe>
<div className="lyricContainer">
    <p ><span>{props.excerpt}</span></p></div>
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
   .song {


width:100%; 
maxWidth:660px; 
overflow:hidden;
 background:transparent;
 }
   .lyricContainer {
    margin: 1.25rem;
    min-height: 0px;
    max-width: 300px;
   } 
        `}
    </style>
    </>
}


export default audiocard