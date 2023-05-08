import { connectToDatabase } from '../../../utils/mongoDb'
 import Head from 'next/head';
import Script from 'next/script';
import LinkToa2 from '../../../components/unit/linkToa2'
 
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
  export default function Article({ article }) {
    return <>  
        <Head>

<title>{article.title}</title>
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
 



 
</Head>
    
 
    <div className="pageGrid">
        <div className="gridCenter">
        <LinkToa2 

li0={article.list[0]}
 li1={article.list[1]}
li2={article.list[2]}
li3={article.list[3]}
li4={article.list[4]}
li5={article.list[5]}
li6={article.list[6]}
li7={article.list[7]}

lia0={article.list1[0]}
 lia1={article.list1[1]}
lia2={article.list1[2]}
lia3={article.list1[3]}
lia4={article.list1[4]}
lia5={article.list1[5]}
lia6={article.list1[6]}
lia7={article.list1[7]}




gif={article.gifs[0]}  
gif1={article.gifs[1]}  
gif2={article.gifs[2]}
gif3={article.gifs[3]}    
gif4={article.gifs[4]}  
gif5={article.gifs[5]}  
gif6={article.gifs[6]}  
gif7={article.gifs[7]}  
gif8={article.gifs[8]}  



 title={article.title}  
author={article.author}
  date={article.date}
  dekk={article.dekk}
image={article.image}
category={article.category}
categoryLink={article.categoryLink}

slug={article.slug}
/** paragragh 1 start */
leadpreLink={article.lead.preLink}
leadlinkto={article.lead.linkto}
leadlinktxt={article.lead.linktxt}
leadpostLink={article.lead.postLink}
/** division 1*/
leadpreLink0={article.lead.preLink0}
leadlinkto0={article.lead.linkto0}
leadlinktxt0={article.lead.linktxt0}
leadpostLink0={article.lead.postLink0}
/** paragragh 1 end*/



/** paragragh 1 start */
preLink={article.nutgraph0.preLink}
linkto={article.nutgraph0.linkto}
linktxt={article.nutgraph0.linktxt}
postLink={article.nutgraph0.postLink}
/** division 1*/
preLink0={article.nutgraph0.preLink0}
linkto0={article.nutgraph0.linkto0}
linktxt0={article.nutgraph0.linktxt0}
postLink0={article.nutgraph0.postLink0}
/** paragragh 1 end*/




/** paragragh 2 start */
preLink1={article.nutgraph1.preLink}
linkto1={article.nutgraph1.linkto}
linktxt1={article.nutgraph1.linktxt}
postLink1={article.nutgraph1.postLink}
/** division 1*/
preLink1b={article.nutgraph1.preLink0}
linkto1b={article.nutgraph1.linkto0}
linktxt1b={article.nutgraph1.linktxt0}
postLink1b={article.nutgraph1.postLink0}
/** paragragh 2 end*/





 

video={article.video[0].video}
img={article.video[0].img}
 

video1={article.video[1].video}
img1={article.video[1].img}
 

video2={article.video[2].video}
img2={article.video[2].img}
 
 
video3={article.video[3].video}
img3={article.video[3].img}
 

video4={article.video[4].video}
img4={article.video[4].img}
 
video5={article.video[5].video}
img5={article.video[5].img}

video6={article.video[6].video}
img6={article.video[6].img}
 

video7={article.video[7].video}
img7={article.video[7].img}

video8={article.video[8].video}
img8={article.video[8].img}
 


/** paragragh 3 start */
preLink2={article.nutgraph2.preLink}
linkto2={article.nutgraph2.linkto}
linktxt2={article.nutgraph2.linktxt}
postLink2={article.nutgraph2.postLink}
/** division 1*/
preLink2b={article.nutgraph2.preLink0}
linkto2b={article.nutgraph2.linkto0}
linktxt2b={article.nutgraph2.linktxt0}
postLink2b={article.nutgraph2.postLink0}
/** paragragh 3 end*/











/** paragragh 4 start */
preLink3={article.nutgraph3.preLink}
linkto3={article.nutgraph3.linkto}
linktxt3={article.nutgraph3.linktxt}
postLink3={article.nutgraph3.postLink}
/** division 1*/
preLink3b={article.nutgraph3.preLink0}
linkto3b={article.nutgraph3.linkto0}
linktxt3b={article.nutgraph3.linktxt0}
postLink3b={article.nutgraph3.postLink0}
/** paragragh 4 end*/




 

/** paragragh 5 start */
preLink4={article.nutgraph4.preLink}
linkto4={article.nutgraph4.linkto}
linktxt4={article.nutgraph4.linktxt}
postLink4={article.nutgraph4.postLink}
/** division 1*/
preLink4b={article.nutgraph4.preLink0}
linkto4b={article.nutgraph4.linkto0}
linktxt4b={article.nutgraph4.linktxt0}
postLink4b={article.nutgraph4.postLink0}
/** paragragh 5 end*/

/** paragragh 5 start */
preLink5={article.nutgraph5.preLink}
linkto5={article.nutgraph5.linkto}
linktxt5={article.nutgraph5.linktxt}
postLink5={article.nutgraph5.postLink}
/** division 1*/
preLink5b={article.nutgraph5.preLink0}
linkto5b={article.nutgraph5.linkto0}
linktxt5b={article.nutgraph5.linktxt0}
postLink5b={article.nutgraph5.postLink0}
/** paragragh 5 end*/



/** paragragh 5 start */
preLink6={article.nutgraph6.preLink}
linkto6={article.nutgraph6.linkto}
linktxt6={article.nutgraph6.linktxt}
postLink6={article.nutgraph6.postLink}
/** division 1*/
preLink6b={article.nutgraph6.preLink0}
linkto6b={article.nutgraph6.linkto0}
linktxt6b={article.nutgraph6.linktxt0}
postLink6b={article.nutgraph6.postLink0}
/** paragragh 5 end*/



/** paragragh 5 start */
preLink7={article.nutgraph7.preLink}
linkto7={article.nutgraph7.linkto}
linktxt7={article.nutgraph7.linktxt}
postLink7={article.nutgraph7.postLink}
/** division 1*/
preLink7b={article.nutgraph7.preLink0}
linkto7b={article.nutgraph7.linkto0}
linktxt7b={article.nutgraph7.linktxt0}
postLink7b={article.nutgraph7.postLink0}
/** paragragh 5 end*/

/** paragragh 5 start */
preLink8={article.nutgraph8.preLink}
linkto8={article.nutgraph8.linkto}
linktxt8={article.nutgraph8.linktxt}
postLink8={article.nutgraph8.postLink}
/** division 1*/
preLink8b={article.nutgraph8.preLink0}
linkto8b={article.nutgraph8.linkto0}
linktxt8b={article.nutgraph8.linktxt0}
postLink8b={article.nutgraph8.postLink0}
/** paragragh 5 end*/

/** paragragh 5 start */
preLink9={article.nutgraph9.preLink}
linkto9={article.nutgraph9.linkto}
linktxt9={article.nutgraph9.linktxt}
postLink9={article.nutgraph9.postLink}
/** division 1*/
preLink9b={article.nutgraph9.preLink0}
linkto9b={article.nutgraph9.linkto0}
linktxt9b={article.nutgraph9.linktxt0}
postLink9b={article.nutgraph9.postLink0}
/** paragragh 5 end*/
 


      
          
         
  
 player={article.player}
  
 inStreetClothes={article.inStreetClothes}
color={article.color1}
 inStreetClothesFigcaption={article.inStreetClothesFigcaption}


 gram1={article.gram[1]}
 gram2={article.gram[2]}
 gram3={article.gram[3]}
 gram4={article.gram[4]}
 gram5={article.gram[5]}
 gram6={article.gram[6]}
 gram7={article.gram[7]}
 gram8={article.gram[8]}
 
 tweet={article.tweet[0]}
 tweet1={article.tweet[1]}
 tweet2={article.tweet[2]}
 tweet3={article.tweet[3]}
 tweet4={article.tweet[4]}
 tweet5={article.tweet[5]}
 tweet6={article.tweet[6]}
 tweet7={article.tweet[7]}
 tweet8={article.tweet[8]}
 
 
 
 youtube={article.youtube[0]}
 youtube1={article.youtube[1]} 
 youtube2={article.youtube[2]} 
 youtube3={article.youtube[3]} 
 youtube4={article.youtube[4]} 
 youtube5={article.youtube[5]}
 youtube6={article.youtube[6]} 
 youtube7={article.youtube[7]} 
 youtube8={article.youtube[8]} 
 
 
 tiktok={article.tiktok[0]} 
 tiktok1={article.tiktok[1]} 
 tiktok2={article.tiktok[2]} 
 tiktok3={article.tiktok[3]} 
 tiktok4={article.tiktok[4]} 
 tiktok5={article.tiktok[5]} 
 tiktok6={article.tiktok[6]} 
 tiktok7={article.tiktok[7]} 
 tiktok8={article.tiktok[8]} 
  

heading0={article.headings[0]}
heading1={article.headings[1]}
heading2={article.headings[2]}
heading3={article.headings[3]}
heading4={article.headings[4]}
heading5={article.headings[5]}
heading6={article.headings[6]}
heading7={article.headings[7]}
heading8={article.headings[8]}

          />
        </div>
        
     
</div>
        
        
        
        
        
  

        <style jsx>{`
        .pageGrid {
   
            max-width: 64rem;
    padding: 1.5rem;
            margin: auto;
            background-color: rgb(247, 247, 243);
      
        }
        
        
        `}</style>
  </>
  }