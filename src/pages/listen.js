 
import { connectToDatabase } from '../../utils/mongoDb'
 import Head from 'next/head'
 import SectionTitle from '../../components/unit/sectionTitle'
 
 import Link from 'next/link'
import AudioCard from '../../components/unit/audioCard'
 
import LazyLoad from 'react-lazy-load';
 
 import Button from '../../components/unit/button'





export default function Home({ audios }) {
  
  
    return <>
       
       <Head>
 
 <meta charSet="utf-8"/>
 <title>Talkcycle | Listen </title>
 <meta name="Description" content="Talkcycle.net — Spanish practice listening page gives tools — media, music, phonetics, pronunciation, and more — for you to improve your spanish skills "/>
 <meta property="og:url" content="https://talkcycle.net/listen"/>
 <meta property="og:type" content="Listen"/>
 <meta property="og:title" content='Talkcycle: Listen '/>
 <meta property="og:description" content="Talkcycle.net — Take your Spanish skills to the next level with Talkcycle's online Spanish course for adults. Our self-paced beginner's course includes easy online Spanish lessons and conversation classes through Zoom, designed to help you become fluent. Submit your practice conversations and receive expert feedback from our instructors, plus one live session a week for assistance and support. Choose the best online Spanish course  and start speaking Spanish like a pro with Talkcycle today!   "/>
 <meta property="og:image" content=''></meta>
 
 <link rel="icon" type="image/svg" href=""/>
 
 
 
 <link rel="canonical" href='https://www.talkcycle.net/listen' content="index,follow"/>
 
 
 
 
 
 
 <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta http-equiv="content-language" content="en"></meta>
 <meta name="copyright" content="Copyright (c) Talkcycle 2023"></meta>
 <meta name="author" content="Talkcycle"></meta>
 <meta name="content-type" content="listen"></meta>
 
  
 <meta name="twitter:card" content="summary_large_image"></meta>
 <meta name="twitter:creator" content="@talkcycle_us"></meta>
 <meta name="twitter:title" content='Home'/> 
 <meta name="twitter:description" content="Talkcycle.net — Take your Spanish skills to the next level with Talkcycle's online Spanish Practice platform. Our self-paced beginner's course includes easy online Spanish lessons and conversation classes through Zoom, designed to help you become fluent. Submit your practice conversations and receive expert feedback from our instructors, plus one live session a week for assistance and support. Choose the best online Spanish course  and start speaking Spanish like a pro with Talkcycle today!   "></meta>
 <meta name="article:author" content='Talkcycle'></meta>
 <meta property="twitter:image" content=''/>
 <meta property="twitter:site" content="@talkcycle_us"></meta>
 <meta name="twitter:url" content="https://www.talkcycle.net/listen">
 
 
 
 
 
 </meta>
 <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="googlebot" content="all" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"></meta>
  <meta name="Description" content="Talkcycle "/>
  <meta name="google-site-verification" content=""></meta>
 
  <meta property="og:url" content="https://www.talkcycle.net/listen"/>
 <meta property="og:locale" content="en_US"/>
 
 <meta property="fb:app_id" content=""/>
 <meta property="og:site_name" content="Talkcycle"/>
 
 <meta name="keywords" content='spanish listening, spanish pronunciation, spanish phonetics, online spanish course for adults, online spanish beginners course, online spanish conversation classes, online spanish lessons easy, best online spanish course for high school students, online spanish courses to become fluent, online spanish classes zoom
' ></meta>


      </Head>

      <main>

 
   
    {audios.map((audio) => (
      <div id="main" key={audio._id}>

        
<div className='containerFluid'>

 <LazyLoad>
        <div className='containerHold'>
   
        <Link  href={`/listen/${audio.slug}`} legacyBehavior>
          <a className='linking'>
            <AudioCard 
         spanish={audio.spanish} 
         english={audio.english} 
         image={audio.image}
         title={audio.title}
       
            
            
            />
        </a>
   
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
min-height: 1000px;

}
#music {
  display: flex;
  flex-flow: row wrap;
 
}


.linking {
  color: #181818;
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
