import { InstagramEmbed,PinterestEmbed ,YouTubeEmbed, TikTokEmbed, TwitterEmbed } from 'react-social-media-embed';
import Dekk from './dekk'


function watch(props){
    return <>
    <main>
   <div style={{ display: 'flex', justifyContent: 'center',  padding:'1rem'  }}>
  <YouTubeEmbed url={props.youtube} width={325} height={220} />
</div> 

<div className='captionContainer'>
<Dekk dekk={props.caption}/>
</div>
</main>


    <style jsx>{`
    .captionContainer {
        max-width: 350px;
        text-align: center;
    }
    
    main {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
    }
    
    `}</style>
    </>
}


export default watch