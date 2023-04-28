export default function banner(){
    return <>
    
    <div className="container">
					<h1 className="text-dark">
                        <span className="word-animation">
                            Refresh</span> your Spanish game with an intuitive practice&nbsp;course.</h1>
					<p className="fix-6-12">Improve your spanish skills 20x faster, with no grammar hassles  and no boring&nbsp;classes.</p>
				<div className="cto"><a href="" className="done">Get Started</a></div>	
				</div>
    
    <style jsx>{`
    .container {
        width: 100%!important;
    margin-left: auto!important;
    margin-right: auto!important;
    float: none;
    max-width: 980px!important;
    border: 0;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    user-select: text;
    overflow: visible;
    height: auto;
    position: relative!important;
    display: flex;
    flex-flow: column wrap;
    align-self: center;
    align-items: center;
    table-layout: fixed;
    position: relative;
    width: 100%;
 
    opacity: 1;
    }
    
    
   .text-dark {
    font-family: Walfolk;    
    margin-bottom: 20px!important;
    #101d24!important;
    font-size: 54px;
    letter-spacing: -.05em;
    line-height: 112%;
    text-align: center;
    font-weight: 900!important;
}
.text-dark:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    margin-top: -2.25px
} 
    

.word-animation {
    
  
    background-repeat: repeat;
 
    animation: 71s diagonal-flow infinite linear,23s hue-rotate infinite linear;
    webkit-text-fill-color: transparent;
 
    background-clip: text;
  
    box-decoration-break: clone;
 
}

 
.fix-6-12 {
    font-size: 22px;
    letter-spacing: -.019em;
    margin-bottom: 30px!important;
    opacity: .6!important;
    font-weigh: 200;
    text-align: center;
    font-family: tiempos;
    width: 80%;
 
  
}

@media (max-width: 435px){
.fix-6-12 {
    font-size: 18px;
    letter-spacing: -.014em;

}}

@media (max-width: 767px)
.fix-6-12 {
    font-size: 20px;
    letter-spacing: -.017em;
}

@media (max-width: 1023px)
.fix-6-12 {
    font-size: 22px;
    letter-spacing: -.018em;
}

.done {
 
    background: #101d24;
    position: relative;
    transition: .35s;   
    font-weight: 600;
    margin: 0!important;
    box-shadow: none!important;
    display: inline-block;
    border-radius: 8px;
    padding: 14px 22px;
    color: #fff;
    border: none;
    outline: 0;
    text-decoration: none;
    background: #101d24;
    font-size: 16px;
    line-height: 1.5;
 
    text-align: center;
    vertical-align: top;
    cursor: pointer;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    letter-spacing: normal!important;
    position: relative;
    white-space: nowrap;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    box-shadow: 0 1px 4px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.1);
    -webkit-appearance: none;
    margin-bottom: 10px;
    transition: .3s;
    -webkit-user-select: none!important;
    -moz-user-select: none!important;
    user-select: none!important;
 
}



@media (max-width: 435px)
.done {
    width: 100%!important;
    margin-left: 0!important;
    margin-right: 0!important;
    max-width: 100%!important;
    
}
.cto {
    display: flex;
    justify-content: center;
    align-self: center;
    max-width: 700px;
}
`}</style>
    </>
}