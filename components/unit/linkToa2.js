import {
  EmailShareButton,
  FacebookShareButton,
 PinterestShareButton,

  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
 
} from "react-share"; 


import {
  EmailIcon,
  FacebookIcon,
 PinterestIcon,
 RedditIcon,
 TumblrIcon,
TwitterIcon,
 
} from "react-share";


import Image from "next/image";
import Link from 'next/link'
import Dekk from './dekk'
import Cabecera from './cabecera'
import Author from './author'
 
 
import Category from './category'
 
import EditoImage from './editoImage'
 
import { InstagramEmbed,PinterestEmbed ,YouTubeEmbed, TikTokEmbed, TwitterEmbed } from 'react-social-media-embed';


 
function linkto(props){
 
    return <>
 

    <main> 
      <div className='root'>
    <article>
<section>

{/* <span className="translate"><a href="https://indd.adobe.com/view/5724c515-6bcd-4aa5-affa-504488e20be4">Leer en ESPAÑOL aqui</a>  </span> */}


<div className='aContainer'>
<div className='leadArticle'>
<EditoImage image={props.image} title={props.caption}    />
 
<Category categoryLink={props.categoryLink} category={props.category} />
 
<Cabecera title={props.title}   />



<Dekk dekk={props.dekk}/>
<Author author={props.author} />
<span className="shareCTO">SHARE:</span>
<span className="date">  {props.date}</span>

 
<div className="share">
<div><TwitterShareButton url={`https://www.hooperos.com/profiles/${props.slug}`}>
{shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
<TwitterIcon size={32} round={true} /> 
</TwitterShareButton></div>
 
<div><FacebookShareButton url={`https://www.hooperos.com/profiles/${props.slug}`}>
{shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
<FacebookIcon size={32} round={true} />


</FacebookShareButton>
</div>



 
<div><EmailShareButton url={`https://www.hooperos.com/profiles/${props.slug}`}>
{shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
<EmailIcon size={32} round={true} />


</EmailShareButton>
</div>


<div><RedditShareButton url={`https://www.hooperos.com/profiles/${props.slug}`}>
{shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
<RedditIcon size={32} round={true} />


</RedditShareButton>
</div>

<div><TumblrShareButton url={`https://www.hooperos.com/profiles/${props.slug}`}>
{shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
<TumblrIcon size={32} round={true} />


</TumblrShareButton>
</div>

</div>




<div id="articleContainer">
<div className="articleContent">
{/* Lead Start */}

<p><span>{props.leadpreLink}</span>

<Link href={props.leadlinkto}> <span className='lintTextContent'>{props.leadlinktxt} </span>
 
 </Link>

 <span>{props.leadpostLink}</span>

 
 <span>{props.leadpreLink0}</span>

<Link href={props.leadlinkto0}> <span className='lintTextContent'>{props.leadlinktxt0} </span>
 
 </Link>

 <span>{props.leadpostLink0}</span></p>


{/* Lead End */}



{ props.heading0 ? (
<div className="headcontainer">
  <h2>{props.heading0}</h2>
 </div> ) : null } 
<p>
 
<span>{props.preLink}</span>

<Link href={props.linkto}> <span className='lintTextContent'>{props.linktxt} </span>
 
 </Link>

 <span>{props.postLink}</span>

 
 <span> {props.preLink0}</span>

<Link href={props.linkto0}> <span className='lintTextContent'>{props.linktxt0} </span>
 
 </Link>

 <span>{props.postLink0}</span>
 </p>

 
{ props.list0 ? (
<div className="listing">
  <h2>{props.list0}</h2>
 </div> ) : null } 



  {props.gram ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram} width={320} />
  </div>
) : null} 


{props.tiktok ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok} width={325} />

</div>

) : null }



{props.tweet ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet} width={325} />
</div>) : null }






{props.youtube ? ( <div style={{ display: 'flex', justifyContent: 'center',  padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube} width={325} height={220} />
</div>) : null }




{ props.gif ? (
<div className="gifContainer">
  <Image width="350" height="350" alt={`image of ${props.player}`} src={props.gif} />
</div> ) : null }



 { props.video ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video}`}</a>
</video></div> ) : null }   




{/* Paragraph 2 End */}






{ props.heading1 ? (
<div className="headcontainer">
  <h2>{props.heading1}</h2>
 </div> ) : null }  
{/* Paragraph 3 Start */}
<p>

<span>{props.preLink1}</span>

<Link href={props.linkto1}> <span className='lintTextContent'>{props.linktxt1} </span>

</Link>

<span>{props.postLink1}</span>

 
<span>{props.preLink1b}</span>

<Link href={props.linkto1b}> <span className='lintTextContent'>{props.linktxt1b} </span>

</Link>

<span>{props.postLink1b}</span>

</p>

{ props.li0 ? (
<div className="listing">
  <ul>
    
    <li>{props.li0}</li>
    <li>{props.li1}</li>
    <li>{props.li2}</li>
    <li>{props.li3}</li>
    <li>{props.li4}</li>
    <li>{props.li5}</li>
    <li>{props.li6}</li>
    <li>{props.li7}</li></ul>
 </div> ) : null } 


{props.gram1 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram1} width={320} />
  </div>
) : null}


{props.tiktok1 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok1} width={325} />

</div>

) : null }



{props.tweet1 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <TwitterEmbed url={props.tweet1} width={325} />
</div>) : null }






{props.youtube1 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem' }}>
  <YouTubeEmbed url={props.youtube1} width={325} height={220} />
</div>) : null }


{ props.gif1 ? (
<div className="gifContainer">
  <Image width="350" height="350" alt={`image of ${props.player}`} src={props.gif1} />
</div> ) : null }
 { props.video1 ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img1}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video1}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video1}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video1}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video1}`}</a>
</video></div> ) : null }  



{/* Media 1 end */}

 







{ props.heading2 ? (
<div className="headcontainer">
  <h2>{props.heading2}</h2>
 </div> ) : null }  

 
<p>

<span>{props.preLink2}</span>

<Link href={props.linkto2}> <span className='lintTextContent'>{props.linktxt2} </span>

</Link>

<span>{props.postLink2}</span>
 
<span>{props.preLink2b}</span>

<Link href={props.linkto2b}> <span className='lintTextContent'>{props.linktxt2b} </span>

</Link>

<span>{props.postLink2b}</span>



</p>

{ props.list2 ? (
<div className="listing">
<ul className="listado">
    
    <li>{props.liB0}</li>
    <li>{props.liB1}</li>
    <li>{props.liB2}</li>
    <li>{props.liB3}</li>
    <li>{props.liB4}</li>
    <li>{props.liB5}</li>
    <li>{props.liB6}</li>
    <li>{props.liB7}</li></ul>
 </div> ) : null } 


{props.gram2 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram2} width={320} />
  </div>
) : null}


{props.tiktok2 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok2} width={325} />

</div>

) : null }



{props.tweet2 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet2} width={325} />
</div>) : null }






{props.youtube2 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube2} width={325} height={220} />
</div>) : null }


{ props.gif2 ? (
<div className="gifContainer">
  <Image width="500" height="400" alt={`image of ${props.player}`} src={props.gif2} />
</div> ) : null }
 { props.video2 ?  (
<div  className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img2}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}`}</a>
</video></div> ) : null }  
{/* Media 1 end */}



{ props.heading3 ? (
<div className="headcontainer">
  <h2>{props.heading3}</h2>
 </div> ) : null }  
<p>

<span>{props.preLink3}</span>

<Link href={props.linkto3}> <span className='lintTextContent'>{props.linktxt3} </span>

</Link>

<span>{props.postLink3}</span>
 
<span>{props.preLink3b}</span>

<Link href={props.linkto3b}> <span className='lintTextContent'>{props.linktxt3b} </span>

</Link>

<span>{props.postLink3b}</span>



</p>

{ props.list3? (
<div className="listing">
<ul>
    
    <li>{props.Cli0}</li>
    <li>{props.Cli1}</li>
    <li>{props.Cli2}</li>
    <li>{props.Cli3}</li>
    <li>{props.Cli4}</li>
    <li>{props.Cli5}</li>
    <li>{props.Cli6}</li>
    <li>{props.Cli7}</li></ul>
 </div> ) : null } 


{props.gram3 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram3} width={320} />
  </div>
) : null}


{props.tikto3 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok3} width={325} />

</div>

) : null }



{props.tweet3 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet3} width={325} />
</div>) : null }






{props.youtube3 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube3} width={325} height={220} />
</div>) : null }





{ props.gif3 ? (
<div className="gifContainer">
  <Image width="350" height="300" alt={`image of ${props.player}`} src={props.gif3} />
</div> ) : null }
  { props.video3 ? (
<div  className="wpVideo">

<video className="wp-video-shortcode"  width="350" height="300" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img3}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video3}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video3}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video3}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video3}`}</a>
</video></div> ) : null }      


{/* Media 1 end */}


{ props.heading4 ? (
<div className="headcontainer">
<ul>
    
    <li>{props.Dli0}</li>
    <li>{props.Dli1}</li>
    <li>{props.Dli2}</li>
    <li>{props.Dli3}</li>
    <li>{props.Dli4}</li>
    <li>{props.Dli5}</li>
    <li>{props.Dli6}</li>
    <li>{props.Dli7}</li></ul>
 </div> ) : null } 
<p>

<span>{props.preLink4}</span>

<Link href={props.linkto4}> <span className='lintTextContent'>{props.linktxt4} </span>

</Link>

<span>{props.postLink4}</span>

 
<span>{props.preLink4b}</span>

<Link href={props.linkto4b}> <span className='lintTextContent'>{props.linktxt4b} </span>

</Link>

<span>{props.postLink4b}</span>


{/* Media 1 end */}
</p>
 

{ props.list4 ? (
<div className="listing">
  <h2>{props.list4}</h2>
 </div> ) : null } 

{props.gram4 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram4} width={320} />
  </div>
) : null}


{props.tiktok4 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok4} width={325} />

</div>

) : null }



{props.tweet4 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet4} width={325} />
</div>) : null }






{props.youtube4 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube4} width={325} height={220} />
</div>) : null }



{ props.gif4 ? (
<div className="gifContainer">
  <Image width="350" height="400" alt={`image of ${props.player}`} src={props.gif4} />
</div> ) : null }
 
 { props.video4 ? (
 
<div   className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img4}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video4}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video4}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video4}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video4}`}</a>
</video></div> ) : null }
 
 
 

{ props.heading5 ? (
<div className="headcontainer">
  <h2>{props.heading5}</h2>
 </div> ) : null } 
<p>

<span>{props.preLink5}</span>

<Link href={props.linkto5}> <span className='lintTextContent'>{props.linktxt5} </span>

</Link>

<span>{props.postLink5}</span>

 
<span>{props.preLink5b}</span>

<Link href={props.linkto5b}> <span className='lintTextContent'>{props.linktxt5b} </span>

</Link>

<span>{props.postLink5b}</span>

</p>


{ props.list5 ? (
<div className="listing">
<ul>
    
    <li>{props.Eli0}</li>
    <li>{props.Eli1}</li>
    <li>{props.Eli2}</li>
    <li>{props.Eli3}</li>
    <li>{props.Eli4}</li>
    <li>{props.Eli5}</li>
    <li>{props.Eli6}</li>
    <li>{props.Eli7}</li></ul>
 </div> ) : null } 


{props.gram5 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram5} width={320} />
  </div>
) : null}


{props.tiktok5 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok5} width={325} />

</div>

) : null }



{props.tweet5? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet5} width={325} />
</div>) : null }






{props.youtube5 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube5} width={325} height={220} />
</div>) : null }

{ props.gif5 ? (
<div className="gifContainer">
  <Image width="350" height="400" alt={`image of ${props.player}`} src={props.gif5} />
</div> ) : null }

  { props.video5 ? (
<div className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img5}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video5}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video5}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video5}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}`}</a>
</video></div> ) : null }  








 

 
   


 
 
{ props.heading6 ? (
<div className="headcontainer">
<ul>
    
    <li>{props.Fli0}</li>
    <li>{props.Fli1}</li>
    <li>{props.Fli2}</li>
    <li>{props.Fli3}</li>
    <li>{props.Fli4}</li>
    <li>{props.Fli5}</li>
    <li>{props.Fli6}</li>
    <li>{props.Fli7}</li></ul>
 </div> ) : null } 
<p>

<span>{props.preLink6}</span>

<Link href={props.linkto6}> <span className='lintTextContent'>{props.linktxt6} </span>

</Link>

<span>{props.postLink6}</span>
 
<span>{props.preLink6b}</span>

<Link href={props.linkto6b}> <span className='lintTextContent'>{props.linktxt6b} </span>

</Link>

<span>{props.postLink6b}</span>

</p>
 
{ props.list6 ? (
<div className="listing">
  <h2>{props.list6}</h2>
 </div> ) : null } 


{props.gram6 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram6} width={320} />
  </div>
) : null}


{props.tiktok6 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok6} width={325} />

</div>

) : null }



{props.tweet6 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet6} width={325} />
</div>) : null }






{props.youtube6 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube6} width={325} height={220} />
</div>) : null }


{ props.gif6 ? (
<div className="gifContainer">
  <Image width="350" height="400" alt={`image of ${props.player}`} src={props.gif6} />
</div> ) : null }
{ props.video6 ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img6}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video6}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video6}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video6}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}`}</a>
</video></div> ) : null } 

 



{ props.heading7 ? (
<div className="headcontainer">
<ul>
    
    <li>{props.Gli0}</li>
    <li>{props.Gli1}</li>
    <li>{props.Gli2}</li>
    <li>{props.Gli3}</li>
    <li>{props.Gli4}</li>
    <li>{props.Gli5}</li>
    <li>{props.Gli6}</li>
    <li>{props.Gli7}</li></ul>
 </div> ) : null } 
<p>

<span>{props.preLink7}</span>

<Link href={props.linkto7}> <span className='lintTextContent'>{props.linktxt7} </span>

</Link>

<span>{props.postLink7}</span>

 
<span>{props.preLink7b}</span>

<Link href={props.linkto7b}> <span className='lintTextContent'>{props.linktxt7b} </span>

</Link>

<span>{props.postLink7b}</span>

</p>
 
{ props.list8 ? (
<div className="listing">
  <h2>{props.list8}</h2>
 </div> ) : null } 


{props.gram7 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram7} width={320} />
  </div>
) : null}


{props.tiktok7 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok7} width={325} />

</div>

) : null }



{props.tweet7 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet7} width={325} />
</div>) : null }






{props.youtube7 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube7} width={325} height={220} />
</div>) : null }




{ props.gif7 ? (
<div className="gifContainer">
  <Image width="350" height="400" alt={`image of ${props.player}`} src={props.gif7} />
</div> ) : null }
 { props.video7 ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="330" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img7}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video7}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video7}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video7}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video2}`}</a>
</video></div> ) : null } 

{/* Media 1 end */}






{ props.heading8 ? (
<div className="headcontainer">
  <h2>{props.heading8}</h2>
 </div> ) : null } 
<p>

<span>{props.preLink8}</span>

<Link href={props.linkto8}> <span className='lintTextContent'>{props.linktxt8} </span>

</Link>

<span>{props.postLink8}</span>




<span>{props.preLink8b}</span>

<Link href={props.linkto8b}> <span className='lintTextContent'>{props.linktxt8b} </span>

</Link>

<span>{props.postLink8b}</span>

</p>

 { props.list8 ? (
<div className="listing">
  <h2>{props.list8}</h2>
 </div> ) : null } 



  {props.gram8 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram8} width={320} />
  </div>
) : null}  

{props.tiktok8 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok8} width={325} />

</div>

) : null }



{props.tweet8 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet8} width={325} />
</div>) : null }






{props.youtube8 ? ( <div style={{ display: 'flex', justifyContent: 'center' , padding:'1rem' }}>
  <YouTubeEmbed url={props.youtube8} width={325} height={220} />
</div>) : null }


 


{ props.gif8 ? (
<div className="gifContainer">
  <Image width="350" height="400" alt={`image of ${props.player}`} src={props.gif8} />
</div> ) : null }
{ props.video8 ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img8}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video8}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video8}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video8}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video}`}</a>
</video></div> ) : null } 




 


{ props.heading9 ? (
<div className="headcontainer">
  <h2>{props.heading9}</h2>
 </div> ) : null } 
<p>

<span>{props.preLink9}</span>

<Link href={props.linkto9}> <span className='lintTextContent'>{props.linktxt9} </span>

</Link>

<span>{props.postLink9}</span>




<span>{props.preLink9b}</span>

<Link href={props.linkto9b}> <span className='lintTextContent'>{props.linktxt9b} </span>

</Link>

<span>{props.postLink9b}</span>

</p>

{ props.list9 ? (
<div className="listing">
<ul>
    
    <li>{props.Hli0}</li>
    <li>{props.Hli1}</li>
    <li>{props.Hli2}</li>
    <li>{props.Hli3}</li>
    <li>{props.Hli4}</li>
    <li>{props.Hli5}</li>
    <li>{props.Hli6}</li>
    <li>{props.Hli7}</li></ul>
 </div> ) : null } 



  {props.gram9 ? (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url={props.gram9} width={320} />
  </div>
) : null}  

{props.tiktok9 ? ( 
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url={props.tiktok9} width={325} />

</div>

) : null }



{props.tweet9 ? ( <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TwitterEmbed url={props.tweet9} width={325} />
</div>) : null }






{props.youtube9 ? ( <div style={{ display: 'flex', justifyContent: 'center', padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube9} width={325} height={220} />
</div>) : null }


 
{ props.video9 ? (
<div   className="wpVideo">

<video className="wp-video-shortcode" id="video-0-579" width="350" height="350" poster={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.img9}`} preload="none" controls="controls">
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video9}?_=579`}/>
<source type="video/mp4" src={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video9}`}/>
<a href={`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video9}`}>{`https://res.cloudinary.com/dwq5dlyvd/video/upload/v1681221169/mp4s/${props.video9}`}</a>
</video></div> ) : null } 




 




 
 
 






 





  





 




 


 






 
 




 
 

 
 
 



</div>

</div>

</div></div>
</section>




    </article>
    
    </div></main>


    <style jsx>{`
    
    .aContainer{ 
      padding: 0;
      width: 100%;
      display: block;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      max-width:1600px;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
    }
    .inStreetClothes {
      padding: 1rem;
   
    }
   
  .leadArticle {
  -webkit-font-smoothing: antialiased;
  padding-top: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  }
   
  .divider {
      display: flex;
      justify-content: center;
      padding-bottom: 1rem;
    }
    
    .contentDivider {
      text-align: center;
      justify-self: center;
      grid-column: 1 / -1;
      margin-top: 2rem;
        display: block;
        grid-column: 1 / -1;
        border-bottom: 2px solid rgb(255, 53, 48);
        width: 100px;
    }
   
    #articleContainer {
      position: relative;
      padding-top: 10px; 
      margin: 0px auto;
      width: 100%;
      max-width: 1600px;
      margin-bottom: 3rem;
      
  }

  
  .articleContent {
      color: #333;
   
      line-height: 1.5;
     
      margin-right: auto;
      margin-left: auto;
      text-transform: none;
      font-family: Walfolk, helvetica, sans-serif;
      font-feature-settings: normal;
      font-style: normal;
      letter-spacing: normal;
      line-break: auto;
      line-height: 28px;
   
      font-weight: 400;
      overflow-wrap: normal;
      padding: 0px;
      max-width: 1600px;
      color: rgb(26, 26, 26);
      margin-bottom: 6rem;
  }
  @media (max-width: 600px){
      articleContent > P {
          padding-left: 16px;
          padding-right: 16px;
          margin-right: auto;
          margin-left: auto;
          color: #333;
          
          
      }
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
      padding: 12px;
      max-width: 1600px;
      color: rgb(33, 33, 33);
  }

  ul > li {
    
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
      padding: 12px;
      max-width: 1600px;
      color: rgb(33, 33, 33);
  
  }
  .wpVideo {
      width: 626px;  
      margin: auto;
    }
    @media (max-width: 767px){
    .wpVideo {
        width: 100%!important;
        height: auto;
        position: relative;
     
    }}
    
    .wpVideo > video {
        min-width: 100%!important;
        height: auto;
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
      }
   .lintTextContent {
     color: rgb(228, 18, 36);
     transition: color 200ms ease 0s;
   }
   a {
      background-color: transparent;
      color: rgb(228, 18, 36);
      transition: color 200ms ease 0s;
   }
   .chartcontainer {
    display: fles;
    justify-content: center; 
    align-items: center;
    max-width: 1200px;
    width: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
   }
   
    .chartcontainer {
      display: flex;
      justify-content: center; 
      align-items: center;
      max-width: 1200px;
      width: auto;
      margin-top: 2rem;
    
      margin-bottom: 2rem;
   }
   .categoryContainer {
    display: flex;
    justify-content: center; 
    align-items: center;
   }
   figure {
    margin: 0;
    padding: 0;
   }
   figcaption > span {
    font-size: 10px;
    margin-top: -15px;;
   }
   .name {
    padding-bottom: 2rem;
   }

   .socialItems {
    padding: 1rem;
   }

   .share {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
   }

   .share > div {
    padding: 1rem;
   }

   .date {
    text-align: center;
    padding: 0.5rem;
   }


   .shareCTO {
    text-align: center;
   }


   .wp-video-shortcode {
     
   }

   .tableContainer {
    padding:2rem;
   }

   .gifContainer {
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 1rem;
   }

.translate {
  display: flex;
  justify-content: center;
  align-self: center;
  color: blue;
}

ul > li{
  list-style-type: none;
}

ul {
  margin-bottom: 0;
}
.headcontainer {
   
  padding-left: 10px;
}
 `}</style>
    </>
}



export default linkto