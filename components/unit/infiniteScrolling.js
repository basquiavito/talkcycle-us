 
 
 

import AudioCard from './audioCard'
 
export default function Home(props) {
 
 

  return (
    <div>
 
<AudioCard 
         spanish={props.spanish} 
          english={props.english} 
          image={props.image}
             audio={props.audio}
      
      />

 
   
    </div>
  );
}
