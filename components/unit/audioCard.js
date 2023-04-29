import Image from "next/image"
 
function audiocard(props){
    return <>
    <div>
<div>
    <span>{`Episode ${props.episode}`}</span><span>{props.duration}</span>
</div>

<div className="imageContainer">
<Image  
width="100px"
height="100px"
alt="sonido"
src={`https://res.cloudinary.com/dsidx1efo/image/upload/${props.image}`}


/>

<p>ok</p>

</div>

    </div>
    
    
    </>
}


export default audiocard