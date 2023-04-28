import Link from 'next/link'

function author(props){
    return <>
    <div className="container">
    <div className="byLineWrapperContainer">
        <p className="authorContainer"> <span itemProp="name" className="autorWrapper">
            <span className="by">By </span>
         <span className="byLineName">{props.author}</span>
            </span></p>
       
            </div>
    

            </div>

    <style jsx>


        {`
        .authorContainer {
        
    text-transform: none;
    font-family: Walfork, helvetica, sans-serif;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: normal;
    font-variant-ligatures: none;
    line-break: auto;
    line-height: 1.5em;
    font-size: 14px;
    font-weight: 400;
    overflow-wrap: normal;
    margin: 0.5rem 0px 0px;
    text-align: center;
    --color__token-name: colors.consumption.lead.standard.accreditation;
    color: rgb(43, 43, 43);
    display: block;
    padding-top: 1rem
    
          }
          
.byLineName {
    display: inline-block; 
}
        
        
 .by {
    text-transform: none;
    font-family: Walfork, helvetica, sans-serif;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: normal;
    font-variant-ligatures: none;
    line-break: auto;
    line-height: 1.5em;
    font-size: 10px;
    font-weight: 400;
    overflow-wrap: normal;
    text-transform: uppercase;
    color: rgb(43, 43, 43);
 }  
 
 .byLineName {
    text-transform: none;
    font-family: Walfork, helvetica, sans-serif;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: normal;
    font-variant-ligatures: none;
    line-break: auto;
    line-height: 1.5em;
    font-size: 10px;
    font-weight: 600;
    overflow-wrap: normal;
    color: rgb(228, 18, 36);
    transition-property: color, background, text-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
 }
        `}
    </style>
    </>
}

export default author