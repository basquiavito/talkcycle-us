import { connectToDatabase } from '../../../utils/mongoDb'
 import Head from 'next/head';
import Script from 'next/script';
import LinkToa2 from '../../../components/unit/linkToa2'
import AudioCard2 from '../../../components/unit/audioCard2'


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
        <AudioCard2

spanish={audio.spanish}
english={audio.english}
slug={audio.slug }
 image={audio.image}
 audio={audio.mp3}
 
          />
        </div></div> 
 
        <style jsx>{`
        .pageGrid {
   
        display: flex;
        justify-content: center;
            margin: auto;
            background-color: rgb(247 , 247, 243);
      
        }
        
        
        `}</style>
  </>
  }