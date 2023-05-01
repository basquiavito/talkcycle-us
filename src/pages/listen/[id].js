import { connectToDatabase } from '../../../utils/mongoDb'
 import Head from 'next/head';
import Script from 'next/script';
import LinkToa2 from '../../../components/unit/linkToa2'
import AudioCard2 from '../../../components/unit/audioCard2'
import { InstagramEmbed,PinterestEmbed ,YouTubeEmbed, TikTokEmbed, TwitterEmbed } from 'react-social-media-embed';
import Image from 'next/image';

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
       {audio.title ? ( <AudioCard2
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


{ audio.gif ? (
<div className="gifContainer">
  <Image width="350" height="350" alt={`image of ${audio.player}`} src={audio.gif} />
</div> ) : null }

{audio.gram ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={audio.gram} width={320} />
  </div>
) : null} 


        </div></div> 
 
        <style jsx>{`
        .pageGrid {
   
        display: flex;
        justify-content: center;
            margin: auto;
            background-color: rgb(247 , 247, 243);
      min-height: 1000px;
        }
        
        
        `}</style>
  </>
  }