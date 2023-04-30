 
import { connectToDatabase } from '../../utils/mongoDb'
 import Head from 'next/head'
 import SectionTitle from '../../components/unit/sectionTitle'
 
 import Link from 'next/link'
import AudioCard from '../../components/unit/audioCard'
 
import LazyLoad from 'react-lazy-load';
 
 import Button from '../../components/unit/button'





export default function Home({ audios }) {
  
  
    return <>


      <main>

 
   
    {audios.map((audio) => (
      <div id="main" key={audio._id}>

        
<div className='containerFluid'>

 <LazyLoad>
        <div className='containerHold'>
   
        <Link  href={`/listen/${audio.slug}`}>
            <AudioCard 
         spanish={audio.spanish} 
         english={audio.english} 
         image={audio.image}
            audio={audio.mp3}
            caption={audio.caption}
            
            
            />
        
   
 </Link>
 
 
       
      </div>
      
      
      </LazyLoad></div></div>
    ))}






 

 
{/* <SectionTitle title="Music"/>
    {audios.map((audio) => (
      <div id="music" key={audio._id}>

        
<div className='containerFluid'>

 <LazyLoad>
        <div className='containerHold'>
   
   
            <Cardwithmusic
      
         song={audio.song}
         artist={audio.artist}
         excerpt={audio.excerpt}
link={audio.link}
        //  artist={audio.music[0].artist}
        //     link={audio.music[0].link}
        //     excerpt={audio.music[0].excerpt}
            />
        
   
 
 
 
       
      </div></LazyLoad></div></div>
    ))} */}

{/* 

<SectionTitle title="Watch"/>
{audios.map((audio) => (
      <div id="main" key={audio._id}>

        
<div className='containerFluid'>

 <LazyLoad>
        <div className='containerHold'>
  
   
            <CardWatch 
         youtube={audio.youtube}
            caption={audio.caption}
            
            />
        
   
 
 
 
       
      </div></LazyLoad></div></div>
    ))}




<InfiniteScrolling />
 */}








  </main>
    

    <style jsx>
      {`
   main {
 max-width: 80rem;
 display: flex;
 flex-flow: row wrap;
 justify-content: center;
 padding: 1.5rem;
 margin: auto;


}
#music {
  display: flex;
  flex-flow: row wrap;
 
}
      `}
    </style>
    </>

}




export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const audios = await db
      .collection("audios")
      .find({})
      .sort({   })
      .limit(25)
      .toArray();


      
    return {
      props: {
     audios: JSON.parse(JSON.stringify(audios)),
      },revalidate:60
    };
  }
