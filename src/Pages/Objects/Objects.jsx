import React from 'react'
import img from './img/img.png'
import im2g from './img/im2g.png'

const Objects = () => {
  return (
    <div>
      <div>
        <div className="container">
          <p className='dark:text-[white] text-[#333333] text-[14px] mt-[10px]'>Главная > Объекты</p>
          <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>География</h1>
        </div>
      </div>
      <div>
        <div className="container">
          <div className='g flex justify-center items-center my-[20px]'>
            <div className='py-[80px]'>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='py-[50px]'>
        <div className="container">
          <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>Строительство торгового центра «Leroy Merlin»</h1>
          <p className='text-[#D74C20] text-[14px] mt-[10px]'>Вернуться к карте</p>
          <div className='md:flex justify-between mt-[20px]'>
            <div className='md:w-[40%]'>
              <img src={im2g} alt="" />
            </div>
            <div className='md:w-[50%]'>
              <p className='dark:text-[white] text-[#868686] text-[16px]'>Первый в Беларуси магазин Leroy Merlin будет расположен в столице страны – г. Минске. Генподрядчик – Группа компаний Litana – партнер SVAI.BY в Республике Беларусь с 2012 года.</p>
              <div className='bg-[#F4F4F4] flex mt-[20px]'>
                <div className='w-[0.5%] dark:bg-[red] bg-[#0D4373] '></div>
                <p className='w-[90%] m-auto text-[#333333] text-[16px]'>Итоговый срок погружения 1770 железобетоных свай составил 25 календарных дней.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objects