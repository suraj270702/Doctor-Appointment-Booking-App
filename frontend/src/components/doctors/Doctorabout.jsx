import React from 'react'
import FormatDate from '../../utils/FormatDate'
const Doctorabout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-7 text-headingColor font-semibold flex items-center gap-3 '>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Muhibir Rahman</span>
            </h3>
            <p className="text__para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dignissimos perspiciatis quae quod fugiat beatae. Recusandae, fugiat repellat. Nam ab odio saepe deserunt itaque sed iste, repudiandae voluptatem, magnam aut excepturi cumque! Quis fuga dignissimos odit quos et soluta maxime nam ab aperiam consequuntur, blanditiis nostrum facere at vitae porro?
            </p>
        </div>
        <div className='mt-12'>
          <h3 className='text-[20px] leading-7 text-headingColor font-semibold'>Education</h3>
          <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[16px] leading-7 font-semibold '>{FormatDate('23 june,2008')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in surgeon</p>
                </div>
                
                <p className='text-[16px] leading-6 font-medium text-textColor'>Apollo Hospital</p>

            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[16px] leading-7 font-semibold '>{FormatDate('25 December,2010')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in surgeon</p>
                </div>
                
                <p className='text-[16px] leading-6 font-medium text-textColor'>Apollo Hospital</p>

            </li>

          </ul>
        </div>
        <div className='mt-12'>
          <h3 className='text-[20px] leading-7 text-headingColor font-semibold'>Experience</h3>
          <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
              <li className='p-4 rounded bg-[#fff9ea] '>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{FormatDate('07-23-2016')} - {FormatDate('10-23-2020')}</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                <p className='text-[16px] leading-6 font-medium text-textColor'>New Apollo Hospital</p>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Doctorabout