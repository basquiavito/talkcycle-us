 
  
 import Cabeza from './cabeza'
 import 'semantic-ui-css/semantic.min.css'

 
  




export default function layout({children}){

  return <>

 
<Cabeza />
<div>
{children} 
</div>
 
 




<style jsx>
  {`

 

  
  `}
</style>



  </>
}