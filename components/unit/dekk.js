function dekk(props){
    return <>
    <div className="dekkContainer"><span className="dekkcontent">{props.dekk}</span></div>



<style jsx>{`

.dekkContainer{
 
  color: rgb(33, 33, 33);
     transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    margin-top: 1.5rem;
    cursor: unset;
    text-align: center;
    --type-token: consumptionEditorial.description-core;
    text-transform: none;
    font-family: Walfork, helvetica, sans-serif;
    font-feature-settings: normal;
    font-style: normal;
    letter-spacing: normal;
    font-variant-ligatures: none;
    line-break: auto;
    line-height: 1.4em;
 padding: 0.85rem;
 
    overflow-wrap: normal;
    margin-top: 0px;
   

   
  }
  @media only screen and (min-width: 768px){
  .dekkContainer {
      -webkit-box-flex: 1;
   
      flex: 1 1 auto;
  }}
  .dekkcontent {
  
    font-size:16px;
    font-weight: 400;
    line-height: 1.33;
    margin-bottom: 2em;
    color: #2b2b2b;
    text-align: center;
    font-style: normal;
    letter-spacing: normal;
    line-break: auto;
    letter-spacing: .01em;
    cursor: unset;
    text-align: center;
  
  }

`}

</style>
    </>
}

export default dekk