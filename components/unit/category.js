import Link from "next/link"

function category(props){
    return <>
    <Link  
    href={props.categoryLink} legacyBehavior><a className="RubricLink"><span className="rubricName">{props.category}</span></a>
    </Link>
    



    <style jsx>{`
    .RubricLink{
        margin-top: 3rem;
        display: inline-flex;
        justify-content: center;
        text-align: center;
    vertical-align: middle;
    text-decoration: none;
     color: rgb(228, 18, 36);
     text-transform: capitalize;
    }
    a {
        cursor: pointer;
        color: rgb(216, 216, 216);
        transition-property: color, background, text-shadow;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    a {
        background-color: transparent;
    }
    .rubricName {
        color: rgb(228, 18, 36);
    }
    `}</style>
    </>
}

export default category