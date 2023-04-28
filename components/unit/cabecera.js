 


function aheadline(props){
    return<>
    <div className="articleHeadline">
    <h2 className="head1">{props.title}
</h2>

 
    </div>
    
    


    <style jsx>
        {`
        .articleHeadline {
          
            padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 1;
    justify-content: center;
         -webkit-font-smoothing: antialiased;
            
        
        }
        
        
        

        @media (min-width: 601px){
            .articleHeadline{
                padding-left: 24px;
                padding-right: 24px;
             
            }
        }
        @media (min-width: 1000px){
            .articleHeadline{

         
            }
        }

        .head1 {
            align-self: stretch;
            color: rgb(33, 33, 33);
            font-weight: 400;
            font-size: 28px;
            line-break: auto;
    line-height: 1.27em;
            margin-top: 20px;
            margin-bottom: 30px;
            cursor: unset;
            text-align: center;
            font-family: Walfork, serif;
            font-weight: 600;
            -webkit-font-smoothing: antialiased;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            cursor: unset;
            text-align: center;
            letter-spacing: -0.013em;
            text-transform: capitalize;
            align-self: stretch;
           
        
        }


        @media (max-width: 599.95px){
        .head1 {
         
            font-size: 30px;
            line-height: 34px;
            margin-top: 10px;
            margin-bottom: 20px;
        
        }}
        `}
    </style>
    </>
}


export default aheadline