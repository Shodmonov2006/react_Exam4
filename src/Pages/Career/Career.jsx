import React from 'react'
import SimpleAccordion from './Components/Accordion/SimpleAccordion'

const Career = () => {
  return (
    <div>
      <div>
        <div className="container">
          <p className='dark:text-[white] text-[#333333] text-[14px] mt-[10px]'>Главная > Карьера</p>
          <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>Карьера</h1>
          <h1 className='dark:text-[white] text-[#333333] text-[18px] font-bold mt-[20px]'>Работа в OOO «БелКопроСтрой» (текст для примера)</h1>
          <p className='dark:text-[white] text-[#868686] text-[16px] mt-[10px]'>Мы с гордостью заявляем, что наша компания это отличное место для начала или продолжения карьеры в данной отрасли. Мы предлагаем возможности для развития, доверительную рабочую атмосферу, различные льготы и многое другое. Вы можете добиться успеха на любой из множества должностей. Наша компания придерживается клиентоориентированных принципов работы, и мы всегда ищем людей, которые принесут нам пользу и сделают наши услуги еще лучше.</p>
          <h1 className='dark:text-[white] text-[#333333] text-[18px] font-bold mt-[20px]'>Что значит работать в SVAI.BY</h1>
          <p className='dark:text-[white] text-[#868686] text-[16px] mt-[10px]'>Нацеленные на командную работу и полные энтузиазма сотрудники - наш самый ценный ресурс, и мы боремся за привлечение талантливых специалистов, стараемся обеспечить их развитие и удержать их. Подбирая оптимальную команду и создавая для нее подходящие условия труда, мы разрабатываем решения, помогающие одерживать победу нашим заказчикам, а следовательно, и нам.</p>
        </div>
      </div>
      <div>
        <div className="container">
          <div className='my-[50px]'>
            <SimpleAccordion />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career