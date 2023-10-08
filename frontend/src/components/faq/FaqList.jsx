import React from 'react'
import {faqs} from '../../assets/data/faqs'
import FaqItem from './faqItem'


export const FaqList = () => {
  return (
   <ul className='mt-[30px] '>
      {
        faqs.map((item,index)=>(
            <FaqItem item={item} index={index}/>
        ))
      }
   </ul>
  )
}
