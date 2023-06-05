import React from 'react'
import img from './img/img.png'


const Reviews = () => {
  return (
    <div>
      <div>
        <div className="container">
          <p className='dark:text-[white] text-[#333333] text-[14px] mt-[10px]'>Главная > Отзывы</p>
          <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>Отзывы</h1>
          <p className='dark:text-[white] text-[#868686] mt-[15px]'>Более 10 лет ООО «БелКопроСтрой» работает в сфере устройства свайных фундаментов. Для осуществления деятельности компания имеет все необходимые разрешительные документы для качественного производства работ (свидетельства, аттестаты соответствия и сертификаты).</p>
          <div className='flex justify-between flex-wrap mt-[15px]'>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
            <div><img src={img} alt="" /></div>
          </div>
          <div className='flex justify-center mt-[20px] mb-[40px]'>
            <button className='border-2 border-[#D74C20] text-[#D74C20] px-[20px] py-[7px] rounded-[7px]'>Показать еще</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews