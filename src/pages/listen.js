import Link from 'next/link'
import { connectToDatabase } from '../../utils/mongoDb'
 import Head from 'next/head'
 
import Cargo2 from '../../components/unit/cargo2'
 import Script from 'next/script'
 import redirect from 'nextjs-redirect'
import AudioCard from '../../components/unit/audioCard'


export default function Home({ audios }) {
  
  
    return <>
 <Head>
 
 <meta charSet="utf-8"/>
 <title>Talkcycle  | Listen </title>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <meta name="Description" content="Talkcycle.net — Listening is an essential to get good results during spanish practice. Dive into the spanish pronunciation topics and improve today  "/>
 <meta property="og:url" content="https://www.talkcycle.net/listen"/>
 <meta property="og:type" content="talkcycle"/>
 <meta property="og:title" content='Talkcycle: Listen , practice , and speak Spanish| Talkcycle'/>
 <meta property="og:description" content='Talkcycle.net — Listening is an essential to get good results during spanish practice. Dive into the spanish pronunciation topics and improve today '/>
 <meta property="og:image" content=' '></meta>
 
 
 
 
 
 <link rel="canonical" href='https://www.talkcycle.net/listen' content="index,follow"/>
 
 
 
 
 <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta http-equiv="content-language" content="en"></meta>
 <meta name="copyright" content="Copyright (c) Talkcycle 2023"></meta>
 <meta name="author" content="Talkcycle"></meta>
 <meta name="content-type" content="listen"></meta>
 <link rel="icon" type="image/png" href=""/>
 
 <meta name="twitter:card" content="summary_large_image"></meta>
 <meta name="twitter:creator" content="Talkcycle"></meta>
 <meta name="twitter:title" content='listen'/> 
 <meta name="twitter:description" content='Talkcycle.net — Listening is an essential to get good results during spanish practice. Dive into the spanish pronunciation topics and improve today    '></meta>
 <meta name="article:author" content='Talkcycle'></meta>
 <meta property="twitter:image" content=' '/>
 <meta property="twitter:site" content=""></meta>
 <meta name="twitter:url" content="https://www.talkcycle.net/listen">
 
 
 
 
 
 </meta>
 <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="googlebot" content="all" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"></meta>
  <meta name="Description" content="Talkcycle Talkcycle.net — Listening is an essential to get good results during spanish practice. Dive into the spanish pronunciation topics and improve today   "/>
  <meta name="google-site-verification" content=""></meta>
 
  <meta property="og:url" content="https:/www.talkcycle.net/"/>
 <meta property="og:locale" content="en_US"/>
 
 <meta property="fb:app_id" content=""/>
 <meta property="og:site_name" content="Talkcycle"/>
 
 <meta name="keywords" content='online spanish course for adults, online spanish beginners course, online spanish conversation classes, online spanish lessons easy, best online spanish course for high school students, online spanish courses to become fluent, online spanish classes zoom '></meta>
 
 {/* GA starts */}
 
 <Script id="google-analytics" strategy='afterInteractive'>
  {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
 ga('create', 'G-RFNG3P5QHF', 'auto');
 ga('send', 'pageview');`}
 </Script>
   {/* GA end */}
 
 
   {/* Start GTA */}
   <Script src="https://www.googletagmanager.com/gtag/js?id=G-RFNG3P5QHF"   strategy='afterInteractive'   /> 
 
 <Script
  id="gta-tags" strategy='afterInteractive'>
 {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-RFNG3P5QHF');
 `}
 </Script>
 
 
 
 
 
 
 
   
 
 
 
 
 
   
 
 
   </Head>
 

      <main>

    {audios.map((audio) => (
      <div id="main" key={audio._id}>
<div className='containerFluid'>
        <div className='containerHold'>
   
       

            <AudioCard 
          episode={audio.episode} 
         duration={audio.duration} 
         image={audio.image}
            audio={audio.mp3}
            
            
            />
        
  
 
 
       
      </div></div></div>
    ))}
  </main>
    

    <style jsx>
      {`
   main {
 max-width: 64rem;
 display: flex;
 flex-flow: row wrap;
 justify-content: center;
 padding: 1.5rem;
 margin: auto;


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
