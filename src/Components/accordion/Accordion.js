import React,{useState} from 'react'
import './accordion.css'
import { questions } from './api'
import MyAccordian from './MyAccordian'

const Accodion = () => {

  const[data,setData] = useState(questions);
  return (
    <>
    <div className="main-container">
    <h1>FAQ</h1>
    <section className='main-div'>
{
  data.map((curElem)=>{
    const {id} = curElem;
    return <MyAccordian key={id}{...curElem}/>
  })
}
</section>
 <div className='accordition-img'>
            <img src="https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174c09f2ecf6201fc16c_Olympus_Objects_Torus_01_TS_00000%201.png" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1919px) 34vw, 658.5546875px" srcset="https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174c09f2ecf6201fc16c_Olympus_Objects_Torus_01_TS_00000%201-p-500.png 500w, https://assets.website-files.com/621f51702b01b7fee7ff903a/6222174c09f2ecf6201fc16c_Olympus_Objects_Torus_01_TS_00000%201.png 704w" alt="" class="home-faq__flow__img1"/>
            </div>
</div>
    </>
  )
}

export default Accodion;