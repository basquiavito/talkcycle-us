const button = () => {
    return <>
    
    <div className="button">
<button className="loadMore"  >More</button>

</div>
    



    <style jsx>{`
    
    
    .button {
        grid-column: center-start / center-end;
          text-align: center;
          margin-top: 2rem;
      }
       
      .loadMore{
        border-color: rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        overflow-wrap: break-word;
        word-break: break-word;
        transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
        background-color: transparent;
        border-width: 2px;
        border-style: solid;
        border-radius: 0px;
        cursor: pointer;
        display: inline-block;
        font-family: Walfork;
        font-size: 0.875rem;
        line-height: 1;
        margin: 0px;
        text-align: center;
        padding: 0.75rem 1.313rem;
        vertical-align: top;
        user-select: none;
        appearance: none;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
                
    
    
    
    `}</style>
    </>
}


export default button