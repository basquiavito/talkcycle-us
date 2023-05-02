import { connectToDatabase } from '../../../utils/mongoDb'
 import Head from 'next/head';
import Script from 'next/script';
import LinkToa2 from '../../../components/unit/linkToa2'
import AudioCard2 from '../../../components/unit/audioCard2'
import { InstagramEmbed,PinterestEmbed ,YouTubeEmbed, TikTokEmbed, TwitterEmbed } from 'react-social-media-embed';
import Image from 'next/image';
import Cabecera from '../../../components/unit/cabecera'
export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const audios = await db.collection("audios").find({}).toArray();

  const paths = audios.map((audio) => ({
    params: { id: audio.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const audio = await db.collection("audios").findOne({
    slug: params.id,
  });

  return {
    props: {
      audio: JSON.parse(JSON.stringify(audio)),
    },
    revalidate: 60,
  };
}
  export default function Audio({ audio }) {
    return <>  
       <Head>

<title>{audio.title}</title>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="msapplication-tap-highlight" content="no"/>
<meta name="author" content="talkcycle"></meta>
<meta name="copyright" content="Copyright (c) Talkcycle 2023"/>
 <meta http-equiv="content-language" content="en"></meta>
 
 <meta name="description" content={audio.ogDescription}></meta>
<meta name="keywords" content={audio.keywords}></meta>
<meta name="news_keywords" content={audio.keywords}></meta>
<meta name="robots" content="index, follow, max-image-preview:large"/>
 
 <meta name="googlebot" content="all" />
 <meta name="google-site-verification" content=""></meta>

 <meta property="article:published_time" content={audio.date}></meta>
<meta name="article:author" content={audio.author}></meta>
<meta property="article:section" content="tags"></meta>


<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:creator" content="@talkcycle"></meta>
<meta name="twitter:title" content={audio.title}/> 
<meta name="twitter:description" content={audio.ogDescription}></meta>
<meta property="twitter:domain" content="https://www.talkcycle.net"></meta>
<meta property="twitter:image" content={audio.image}/>
<meta property="twitter:site" content="listen"></meta>


<link rel="shortlink" href={`https://www.talkcycle.net/listen/${audio.slug}`}></link>


<link rel="icon" type="image/png" href=""/>


<meta property="og:description" content={audio.ogDescription}/>
<meta property="og:image" content={audio.image}></meta>
<meta property="og:image:type" content="image/webp" /> 
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"></meta>
<meta property="og:site_name" content="Talkcycle"/>
<meta property="og:title" content={audio.title}/>
<meta property="og:type" content="talkcycle"/>
<meta property="og:url" content={`https://www.talkcycle.net/listen/${audio.slug}`}/>
<meta property="og:locale" content="en_US"/>

<meta property="fb:app_id" content=""/>
<link rel="canonical" href={`https://www.talkcycle.net/listen/${audio.slug}`} content="index,follow"/>
 



 
</Head>
    
    
 <div className='timeContainer'>
 <time className='date'>{audio.date}</time>
  </div>
    <div className="pageGrid">
        <div className="gridCenter">
       {audio.audio? ( <AudioCard2
title={audio.title}
spanish={audio.spanish}
english={audio.english}
slug={audio.slug }
 image={audio.image}
 audio={audio.audio}
 caption={audio.caption}
 
          />) : null }



{audio.tweet ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={audio.tweet} width={325} />
</div>) : null }

{audio.youtube ? ( <div style={{ display: 'flex', justifyContent: 'center',  padding:'1rem'  }}>
  <YouTubeEmbed url={audio.youtube} width={325} height={220} />
</div>) : null }
{ audio.video ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${audio.video }`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${audio.video}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${audio.video}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${audio.video}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${audio.videoo}`}</a>
</video></div> ) : null }   


{audio.tiktok ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={audio.tiktok} width={325} />

</div>

) : null }


{audio.gram ? (
  <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column wrap'  }}>
  <div className='cabecera'>  <Cabecera title={audio.title} /> </div>
      <div className='captionCont'><p>{audio.caption}</p></div>
    <InstagramEmbed url={audio.gram} width={320} />
    <div className='captionCont'><p>{audio.caption2}</p></div>
  </div>
) : null } 


        </div></div> 
 
        <style jsx>{`

        .captionCont{
          max-width: 350px;
          margin-bottom: 20px;
          font-family: tiempos;
          font-size: 15px;
     
        }
        .pageGrid {
   
        display: flex;
        justify-content: center;
            margin: auto;
            padding: 1rem;
        
      min-height: 1000px;
        }
        p{
          text-transform: none;
          font-family: Walfolk;
          font-feature-settings: normal;
          font-style: normal;
          letter-spacing: normal;
          line-break: auto;
          line-height: 28px;
          font-size: 18px;
          font-weight: 400;
          overflow-wrap: normal;
         
          max-width: 1600px;
          color: rgb(33, 33, 33);
      }
      .timeContainer{
         display: flex;
         justify-content: center;
         align-self: center;
         
        }


        .cabecera {
          max-width: 320px;
        }
        `}</style>
  </>
  }