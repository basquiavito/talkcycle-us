 


function About() {
    return <> 
<div>
      <h1>About Talkcycle</h1>
      <p>Welcome to Talkcycle, the online Spanish learning platform that helps you practice your speaking skills and improve your confidence.</p>
      <h2>Our Features</h2>
      <ul>
        <li><h3>Recorded classes with native Spanish speakers</h3><span>Talkcycle offers recorded classes led by native Spanish speakers, which allows students to practice their speaking skills and learn from experienced professionals. These classes are accessible at any time, so students can practice whenever it's convenient for them.</span> </li>
        <li><h3>Personalized feedback and guidance from your teacher</h3> <span>Talkcycle provides personalized feedback and guidance to each student from their teacher, which helps them to identify areas for improvement and receive targeted advice on how to improve their language skills. This feature makes the learning process more effective and efficient.</span></li>
        <li><h3>A user-friendly platform that's easy to navigate</h3> <span>The Talkcycle website is designed to be user-friendly and easy to navigate, even for beginners. The platform offers a clear and intuitive interface that makes it easy to find the content and resources students need to succeed.</span></li>
        <li><h3>A flexible schedule that fits your busy lifestyle</h3><span>Talkcycle's flexible schedule allows students to learn at their own pace and on their own schedule. This feature makes it easy for busy professionals and students to fit language learning into their already-packed schedules.</span> </li>
      </ul>
    </div>


      <style jsx>
        {
            `
            div {
                max-width: 800px;
                margin: 0 auto;
                padding: 50px;
                font-family: Walfolk;
              }
          
              h1 {
                font-size: 36px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 30px;
                font-family: Walfolk;
              }
          
              h2 {
                font-size: 24px;
                font-weight: bold;
                margin-top: 50px;
                text-align: center;
                font-family: Walfolk;
              }
          
              p {
                font-size: 18px;
                line-height: 1.5;
                margin-bottom: 30px;
              }
          
              ul {
                margin-top: 20px;
                margin-bottom: 50px;
              }
          
              li {
                margin-top: 10px;
                 
                font-size: 18px;
                line-height: 1.5;
           padding: 1rem;
                background-color: #f7f7f7;
                border-radius: 10px;
                list-style-type: none;
              }

          span{
            font-weight: 400;
          }
              @media (max-width: 600px) {
                div {
                  padding: 10px;
                }
          
                h1 {
                  font-size: 24px;
                  margin-bottom: 20px;
                }
          
                h2 {
                  font-size: 20px;
                }
          
                p {
                  font-size: 16px;
                  margin-bottom: 20px;
                }
          
                li {
                  font-size: 16px;
                }
              }  
            
            h3{
                font-family: Walfolk; 
            }
            
            
            
            `
        }
      </style>
    </>
  };
  
  export default About;