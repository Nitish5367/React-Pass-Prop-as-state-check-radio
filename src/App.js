import {useState} from 'react'
import Dsp from './Dsp'
let App=()=>{
  let [data,setData]=useState({})
  let [lang,setLang]=useState([])
  let [users,setUsers]=useState([])
 let fun=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
 }
 let fun1=(e)=>{
  if(e.target.checked){
    setLang([...lang,e.target.value])
  }
  else{
    lang.splice(lang.indexOf(e.target.value),1)
  }
 }
 let add=()=>{
  setUsers([...users,{...data,lang:[...lang]}])
 }

  return(
    <div>
      <input type='text' name='name' onChange={fun}/>
      <div>
        <input type='radio' name='gen' onChange={fun} value='male'/>Male
        <input type='radio' name='gen' onChange={fun} value='female'/>Female
      </div>
      <div>
        <input type="checkbox" value="telgu" onChange={fun1}/>Telegu
        <input type="checkbox" value="hindi" onChange={fun1}/>hindi
        <input type="checkbox" value="English" onChange={fun1}/>English
      </div>
      <button onClick={add}>Add</button>
   
      <table border={1}>
        <tr><th>Name</th><th>Gender</th><th>Language</th></tr>
        {
          users.map((item)=><Dsp data={item}/>)
        }
      </table>
    
    </div>
  )
}
export default App