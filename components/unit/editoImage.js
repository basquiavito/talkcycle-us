import Link from 'next/link'
import Image from 'next/image'



function image(props){
    return <>
    <div className='container'>
<div className="heroImageLink">
 
  <Image
 src={`https://res.cloudinary.com/dwq5dlyvd/image/upload/c_scale,h_380,w_680/${props.image}`}
 alt={`${props.title}`}
 width="680"
 height="380"
 style={{objectFit:"cover"}}
 className="sizeImage"
 priority

 />
 
  
 </div>
 </div>


<style jsx>
    {`
    
 
      .container {
        display: grid;
        padding: 0;
        margin: 
      }
      @media only screen and (max-width: 1200px){
        .heroImageLink {
         grid-column: grid-start / grid-end; 
     
        }}
       
         @media only screen and (min-width: 1201px){
        .heroImageLink {
            grid-column: grid-start / grid-end; 
       
        }}
    
    
    `}
</style>
    
    </>
}

export default image