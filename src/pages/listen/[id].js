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
    <Cabecera title={audio.title} />
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
        
        `}</style>
  </>
  }