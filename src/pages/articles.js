import Link from 'next/link'
import { connectToDatabase } from '../../utils/mongoDb'
 import Head from 'next/head'
 
import Cargo2 from '../../components/unit/cargo2'
 import Script from 'next/script'
 import redirect from 'nextjs-redirect'



export default function Home({ articles  }) {
  
  
    return <>
 <Head>
 
 <meta charSet="utf-8"/>
 <title>Talkcycle:  | Articles</title>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <meta name="Description" content="Talkcycle.net — Take your Spanish skills to the next level with Talkcycle's online Spanish course for adults. Our self-paced beginner's course includes easy online Spanish lessons and conversation classes through Zoom, designed to help you become fluent. Submit your practice conversations and receive expert feedback from our instructors, plus one live session a week for assistance and support. Choose the best online Spanish course  and start speaking Spanish like a pro with Talkcycle today!  "/>
 <meta property="og:url" content="https://www.talkcycle.net/articles"/>
 <meta property="og:type" content="article"/>
 <meta property="og:title" content='Talkcycle: Spanish Practice articles to help you improve your spanish conversations skills | Talkcycle'/>
 <meta property="og:description" content='Talkcycle: Spanish Practice articles to help you improve your conversations | Talkcycle '/>
 <meta property="og:image" content=' '></meta>
 
 
 
 
 
 <link rel="canonical" href='https://www.talkcycle.net/articles' content="index,follow"/>
 
 
 
 
 <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta http-equiv="content-language" content="en"></meta>
 <meta name="copyright" content="Copyright (c) Talkcycle 2023"></meta>
 <meta name="author" content="Talkcycle"></meta>
 <meta name="content-type" content="homepage"></meta>
 <link rel="icon" type="image/png" href=" "/>
 
 <meta name="twitter:card" content="summary_large_image"></meta>
 <meta name="twitter:creator" content=""></meta>
 <meta name="twitter:title" content='Home'/> 
 <meta name="twitter:description" content='Talkcycle: Spanish Practice articles to help you improve your conversations | Talkcycle '></meta>
 <meta name="article:author" content=''></meta>
 <meta property="twitter:image" content=''/>
 <meta property="twitter:site" content=""></meta>
 <meta name="twitter:url" content="https://www.talkcycle.net/articles">
 
 
 
 
 
 </meta>
 <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="googlebot" content="all" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"></meta>
  <meta name="Description" content="Talkcycle "/>
  <meta name="google-site-verification" content=""></meta>
 
  <meta property="og:url" content="https://www.talkcycle.net/articles"/>
 <meta property="og:locale" content="en_US"/>
 
 <meta property="fb:app_id" content=""/>
 <meta property="og:site_name" content="Talkcycle"/>
 
 <meta name="keywords" content='online spanish course for adults, online spanish beginners course, online spanish conversation classes, online spanish lessons easy, best online spanish course for high school students, online spanish courses to become fluent, online spanish classes zoom'></meta>
 
 
   
 
 
   </Head>
 

      <main>

    {articles.map((article) => (
      <div id="main" key={article._id}>
<div className='containerFluid'>
        <div className='containerHold'>
        <Link  href={`/articles/${article.slug}`}>
       

            <Cargo2
            alt={article.title}
            player={article.player}
              title={article.title}
              author={article.author}
              image={`${article.image}`} 
              date={article.date}
           dekk={article.dekk}
  
 
 
        />
        </Link>
      </div></div></div>
    ))}
  </main>
    

    <style jsx>
      {`
      main {
    min-height: 1200px;
 max-width: 64rem;
 padding: 1.5rem;
 margin: auto;
    
              display: flex;
       flex-flow: row wrap
      
      }
   
      @media (max-width: 400px){
        main {
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
      
      }}
     
      `}
    </style>
    </>

}




export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const articles = await db
      .collection("articles")
      .find({ready: true})
      .sort({   })
      .limit(25)
      .toArray();


      
    return {
      props: {
     articles: JSON.parse(JSON.stringify(articles)),
      },revalidate:60
    };
  }
