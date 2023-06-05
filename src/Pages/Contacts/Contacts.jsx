import React from 'react'
import icon from './img/icon.png'
import img from './img/img.png'

const Contacts = () => {
  return (
    <div>
      <div>
        <div className="container">
          <p className='dark:text-[white] text-[#333333] text-[14px] mt-[10px]'>Главная > Контакты</p>
          <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>Контакты</h1>
          <div className='md:flex justify-between'>
            <div>
              <h1 className='dark:text-[white] text-[#333333] text-[18px] font-bold'>Пожалуйста, заполните форму ниже</h1>
              <div className='mt-[20px]'>
                <p className='text-[#868686]'>Ваше имя (обязательно)</p>
                <input className='pl-[20px] mt-[5px] bg-[#F3F3F3] w-[100%] py-[7px] rounded-[7px]' type="text" />
              </div>
              <div className='mt-[20px]'>
                <p className='text-[#868686]'>E-mail (обязательно)</p>
                <input placeholder='user@example.com' className='pl-[20px] mt-[5px] bg-[#F3F3F3] w-[100%] py-[7px] rounded-[7px]' type="text" />
              </div>
              <div className='mt-[20px]'>
                <p className='text-[#868686]'>Сообщение</p>
                <textarea className='pl-[20px] pt-[10px] mt-[5px] bg-[#F3F3F3] w-[100%] h-[30vh] rounded-[7px]'></textarea>
              </div>
              <div className='mt-[20px] mb-[50px]'>
                <button className='px-[40px] py-[10px] text-[white] rounded-[7px] bg-[#D74C20]'>Отправить</button>
              </div>
            </div>
            <div className='md:w-[40%]'>
              <h1 className='dark:text-[white] text-[#333333] text-[18px] font-bold'>Пожалуйста, заполните форму ниже</h1>
              <p className='dark:text-[white] text-[#868686] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis posuere velit aliquet.</p>
              <h1 className='dark:text-[white] text-[#333333] text-[18px] font-bold'>Контакты</h1>
              <div className='flex gap-[10px] mt-[10px]'>
                <div><img src={icon} alt="" /></div>
                <p className='dark:text-[white] text-[#868686]'>Адрес</p>
              </div>
              <div className='flex gap-[10px] mt-[10px]'>
                <div><img src={icon} alt="" /></div>
                <p className='dark:text-[white] text-[#868686]'>Телефон</p>
              </div>
              <div className='flex gap-[10px] mt-[10px]'>
                <div><img src={icon} alt="" /></div>
                <p className='dark:text-[white] text-[#868686]'>e-mail</p>
              </div>
              <div className='flex gap-[10px] mt-[10px]'>
                <div><img src={icon} alt="" /></div>
                <p className='dark:text-[white] text-[#868686]'>Время работы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Contacts