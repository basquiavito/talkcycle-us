import { connectToDatabase } from '../../../utils/mongoDb'
 import Head from 'next/head';
import Script from 'next/script';
import LinkToa2 from '../../../components/unit/linkToa2'
import AudioCard from '../../../components/unit/audioCard';
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
  export default function Article({ audio }) {
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
 
 <meta name="description" content={audio.dekk}></meta>
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
<meta property="twitter:image" content={audio.ogImage}/>
<meta property="twitter:site" content=""></meta>


<link rel="shortlink" href={`https://www.talkcycle.net/articles/${audio.slug}`}></link>


<link rel="icon" type="image/png" href=""/>


<meta property="og:description" content={audio.ogDescription}/>
<meta property="og:image" content={audio.ogImage}></meta>
<meta property="og:image:type" content="image/webp" /> 
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"></meta>
<meta property="og:site_name" content="Talkcycle"/>
<meta property="og:title" content={audio.title}/>
<meta property="og:type" content="talkcycle"/>
<meta property="og:url" content={`https://www.talkcycle.net/articles/${audio.slug}`}/>
<meta property="og:locale" content="en_US"/>

<meta property="fb:app_id" content=""/>
<link rel="canonical" href={`https://www.talkcycle.net/articles/${audio.slug}`} content="index,follow"/>
 



 
</Head>
    
 
    <div className="pageGrid">
        <div className="gridCenter">
       <p duration={audio.duration}/>
        </div></div> 

        <style jsx>{`
        .pageGrid {
   
            max-width: 64rem;
    
            margin: auto;
            background-color: rgb(247, 247, 243);
      
        }
        
        
        `}</style>
  </>
  }