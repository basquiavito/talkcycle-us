import { connectToDatabase } from '../../../utils/mongoDb'
 import Head from 'next/head';
import Script from 'next/script';
import LinkToa2 from '../../../components/unit/linkToa2'
import Sound from '../../../components/unit/sound'
export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const articles = await db.collection("articles").find({}).toArray();

  const paths = articles.map((article) => ({
    params: { id: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const article = await db.collection("articles").findOne({
    slug: params.id,
  });

  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
    },
    revalidate: 60,
  };
}
  export default function Article({ audio }) {
    return <>  
        <Head>

{/* <title>{article.title}</title>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="msapplication-tap-highlight" content="no"/>
<meta name="author" content="talkcycle"></meta>
<meta name="copyright" content="Copyright (c) Talkcycle 2023"/>
 <meta http-equiv="content-language" content="en"></meta>
 
 <meta name="description" content={article.dekk}></meta>
<meta name="keywords" content={article.keywords}></meta>
<meta name="news_keywords" content={article.keywords}></meta>
<meta name="robots" content="index, follow, max-image-preview:large"/>
 
 <meta name="googlebot" content="all" />
 <meta name="google-site-verification" content=""></meta>

 <meta property="article:published_time" content={article.date}></meta>
<meta name="article:author" content={article.author}></meta>
<meta property="article:section" content="tags"></meta>


<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:creator" content="@talkcycle"></meta>
<meta name="twitter:title" content={article.title}/> 
<meta name="twitter:description" content={article.ogDescription}></meta>
<meta property="twitter:domain" content="https://www.talkcycle.net"></meta>
<meta property="twitter:image" content={article.ogImage}/>
<meta property="twitter:site" content=""></meta>


<link rel="shortlink" href={`https://www.talkcycle.net/articles/${article.slug}`}></link>


<link rel="icon" type="image/png" href=""/>


<meta property="og:description" content={article.ogDescription}/>
<meta property="og:image" content={article.ogImage}></meta>
<meta property="og:image:type" content="image/webp" /> 
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"></meta>
<meta property="og:site_name" content="Talkcycle"/>
<meta property="og:title" content={article.title}/>
<meta property="og:type" content="talkcycle"/>
<meta property="og:url" content={`https://www.talkcycle.net/articles/${article.slug}`}/>
<meta property="og:locale" content="en_US"/>

<meta property="fb:app_id" content=""/>
<link rel="canonical" href={`https://www.talkcycle.net/articles/${article.slug}`} content="index,follow"/>
 
 */}


 
</Head>
    
 
    <div className="pageGrid">
        <div className="gridCenter">
        <Sound 
        duration={audio.duration} 
        slug={audio}
        
        />


 


 
        
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