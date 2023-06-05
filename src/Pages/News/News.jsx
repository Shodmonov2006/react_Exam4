import React from 'react'
import img from './img/img.png'

const News = () => {
  return (
    <div>
      <div>
        <div className="container">
          <p className='dark:text-[white] text-[#333333] text-[14px] mt-[10px]'>Главная > Новости</p>
          <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>Новости</h1>
          <div className='flex flex-wrap my-[50px] justify-between'>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white]  text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white] text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white] text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white] text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white] text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white] text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
            <div className='w-[330px]'>
              <div><img src={img} alt="" /></div>
              <h1 className='dark:text-[white] text-[#0D4373] text-[18px] font-bold'>Белкопрострой. 10 лет на рынке свайных фундаментов</h1>
              <p className='text-[#868686]'>02.10.2020</p>
              <p className='text-[#D74C20] font-bold mt-[10px]'>Подробнее</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='text-[#D74C20] border-2 border-[#D74C20] px-[20px] py-[7px] rounded-[5px] mb-[30px]'>Показать еще</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News