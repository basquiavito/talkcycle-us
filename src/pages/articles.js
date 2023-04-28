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
 <title>Hooperos:  | Articles</title>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <meta name="Description" content="Hooperos.com — is home to the biggest source of NBA basketball moves and countermoves collection designed to enhance user performace and provide insight into the world of basketball scoring.  "/>
 <meta property="og:url" content="https://www.hooperos.com/articles"/>
 <meta property="og:type" content="article"/>
 <meta property="og:title" content='Hooperos: Basketball Scoring, Moves, Countermoves, Urban Culture | Hooperos'/>
 <meta property="og:description" content='Hooperos.com — is home to the biggest source of NBA basketball moves and countermoves collection designed to enhance user performace and provide insight into the world of basketball scoring.  '/>
 <meta property="og:image" content='https://res.cloudinary.com/dwq5dlyvd/image/upload/v1682182966/assets/favicon.png'></meta>
 
 
 
 
 
 <link rel="canonical" href='https://www.hooperos.com/articles' content="index,follow"/>
 
 
 
 
 <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  <meta http-equiv="content-language" content="en"></meta>
 <meta name="copyright" content="Copyright (c) Hooperos 2023"></meta>
 <meta name="author" content="Hooperos"></meta>
 <meta name="content-type" content="homepage"></meta>
 <link rel="icon" type="image/png" href="/https://res.cloudinary.com/dwq5dlyvd/image/upload/v1682182966/assets/favicon.png"/>
 
 <meta name="twitter:card" content="summary_large_image"></meta>
 <meta name="twitter:creator" content="@hooperos_us"></meta>
 <meta name="twitter:title" content='Home'/> 
 <meta name="twitter:description" content='Hooperos.com — is home to the biggest source of NBA basketball Scoring, moves and countermoves collection designed to enhance user performace and provide insight into the world of basketball scoring.   '></meta>
 <meta name="article:author" content='Hooperos'></meta>
 <meta property="twitter:image" content='https://res.cloudinary.com/dwq5dlyvd/image/upload/v1682182966/assets/favicon.png'/>
 <meta property="twitter:site" content="@hooperos_us"></meta>
 <meta name="twitter:url" content="https://www.hooperos.com/articles">
 
 
 
 
 
 </meta>
 <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta name="googlebot" content="all" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"></meta>
  <meta name="Description" content="Hooperos "/>
  <meta name="google-site-verification" content="3vPt_83gjgDlwNpSwqVFOgiUWnIP-sBphFQVu_wS6q0"></meta>
 
  <meta property="og:url" content="https:/www.hooperos.com/"/>
 <meta property="og:locale" content="en_US"/>
 
 <meta property="fb:app_id" content="908303963313109"/>
 <meta property="og:site_name" content="Hooperos"/>
 
 <meta name="keywords" content='basketball, scoring, NBA,'></meta>
 
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
 {/* End GTA */}
 
 
     {/* Start Branch.io*/}
  <Script
  strategy='afterInteractive'
  id="branch.io"
  dangerouslySetInnerHTML={{
  __html: ` 
  
  (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking qrCode".split(" "), 0);
  
  branch.init('key_live_jDlno8AO6ODgeCdtUdDrJeoorvc0V95s');
  `
  }}
  />
   {/* Ends Branch io */}
   <Script
  strategy='afterInteractive'
  id="hotjar"
  dangerouslySetInnerHTML={{
  __html: `   (function(h,o,t,j,a,r){
   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
   h._hjSettings={hjid:3431852,hjsv:6};
   a=o.getElementsByTagName('head')[0];
   r=o.createElement('script');r.async=1;
   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
   a.appendChild(r);
 })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />
 
 
 
      {/* quancast start */}
  <Script
  strategy='afterInteractive'
  id="quantcast"
  dangerouslySetInnerHTML={{
  __html: ` 
  window._qevents = window._qevents || [];
  (function() {
   var elem = document.createElement('script');
   elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
   elem.async = true;
   elem.type = "text/javascript";
   var scpt = document.getElementsByTagName('script')[0];
   scpt.parentNode.insertBefore(elem, scpt);
   })();
   
   window._qevents.push({
   qacct:"p-XqxS8v6XgkVhW",
   uid:"ino@hooperos.com"
   });
  `
  }}
  />
  
  <noscript>
 <div className="quantcastThing">
 <img src="//pixel.quantserve.com/pixel/p-XqxS8v6XgkVhW.gif" border="0" height="1" width="1" alt="Quantcast"/>
 </div>
 </noscript>
   
    {/* quancast end*/}
 
    <Script
  strategy='afterInteractive'
  id="tiktok"
  dangerouslySetInnerHTML={{
  __html: ` !function (w, d, t) {
   w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
 )ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
 
   ttq.load('CGHPP1JC77U1JI9QH600');
   ttq.page();
 }(window, document, 'ttq');`}} />
 
 
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
              image={`https://res.cloudinary.com/dwq5dlyvd/image/upload/c_scale,q_70,w_512/${article.image}`} 
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
       flex-flow: column wrap
      
      }
   
 
    
    
      }
     
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
