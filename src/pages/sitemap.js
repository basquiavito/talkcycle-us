import Link from 'next/link'


export default function sitemap(){
    return <>
    <main>
    <div className="container">
        <h1>Sitemap</h1>


        <h2><span>2023</span></h2>
        <h3><span>April</span></h3>
   <p><Link href="https://www.talkcycle.net/articles/Spanish-practice-with-the-verb-gustar"><span>Spanish Practice With The Verb: Gustar</span></Link></p>  

     <p><Link href="https://www.talkcycle.net/articles/Spanish-Practice-Word-of-the-Day-Cariño"><span>Spanish Practice Word Of The Day: Cariño</span></Link></p>
     <h3><span>May</span></h3>
    </div>
    


    </main>
    <style jsx>{`
    main {
        display: flex; 
        flex-flow: row wrap;
        align-self: center;
        justify-content: center;
        max-width: 84rem;
        margin: auto;
        padding: 1.5rem;
      height: 100vh;
      margin: auto;
    }
    h1 {
        display: flex ;
        justify-content: center;
        align-item: center;
        margin-bottom: 2.25rem;

    }
    
    `}</style>
    </>
}