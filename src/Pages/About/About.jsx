import React from 'react'
import sertificate from './img/sertificate.jpg'
import img from './img/img.png'
import icon from './img/icon.png'
import icon2 from './img/icon2.png'
import img2 from './img/img2.png'

const About = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div>
                        <p className='dark:text-[white] text-[#333333] text-[14px] mt-[10px]'>Главная > О компании</p>
                        <h1 className='text-[#0D4373] text-[24px] mt-[20px]'>О компании</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='lg:flex justify-between my-[50px]'>
                        <div><img src={img} alt="" /></div>
                        <div className='lg:w-[50%]'>
                            <h1 className='text-[#333333] text-[18px] font-bold'>Основная информация</h1>
                            <p className='text-[#868686] dark:text-[white] mt-[15px]'>SVAI.BY специализированная строительная группа компаний, основным видом деятельности которой является выполнение работ по устройству свайных фундаментов из забивных и буронабивных свай, а также предоставление в аренду специализированной сваебойной и буровой техники. Предприятие активно работает на рынке строительных услуг Беларуси с 2010г. Располагаем всей необходимой техникой для качественного выполнения работ: современными сваебойными установками, предназначенными для забивки свай, шпунтов и труб, буровыми установками для устройства буронабивных и вибронабивных свай, лидерного бурения, а также оборудованием, необходимым для срубки оголовков свай. Сегодня, имея многолетний практический опыт в области устройства свайных фундаментов и команду квалифицированных работников – более 40 специалистов в свайном деле, SVAI.BY способны выполнить любой объем свайных работ в оптимальные для заказчика сроки.</p>
                            <div className='flex items-center gap-[20px] mt-[20px]'>
                                <div><img className='w-[200px]' src={icon} alt="" /></div>
                                <p className='text-[#868686] dark:text-[white] mt-[15px]'>Наличие собственной строительной техники, автотранспорта и средств малой механизации позволяет компании проводить полный комплекс строительно-монтажных работ и делает нас конкурентной на рынке строительных услуг.</p>
                            </div>
                            <div className='flex items-center gap-[20px] mt-[10px]'>
                                <div><img className='w-[200px]' src={icon} alt="" /></div>
                                <p className='text-[#868686] dark:text-[white] mt-[15px]'>Наличие собственной строительной техники, автотранспорта и средств малой механизации позволяет компании проводить полный комплекс строительно-монтажных работ и делает нас конкурентной на рынке строительных услуг.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#e3e3e3]'>
                <div className="container">
                    <div className='py-[50px] lg:flex justify-between'>
                        <div>
                            <div className='flex items-center gap-[20px]'>
                                <div><img src={icon2} alt="" /></div>
                                <div className='bg-[white] rounded-[5px] py-[7px]'><p className='text-[#D74C20] w-[85%] m-auto'>Имеем сертификат соответствия СТБ ISO 9001-2015</p></div>
                            </div>
                            <div className='flex items-center gap-[20px] mt-[40px]'>
                                <div><img src={icon2} alt="" /></div>
                                <div className='bg-[white] rounded-[5px] py-[7px]'><p className='w-[85%] m-auto'>Имеем сертификат соответствия СТБ ISO 9001-2015</p></div>
                            </div>
                            <div className='flex items-center gap-[20px] mt-[40px]'>
                                <div><img src={icon2} alt="" /></div>
                                <div className='bg-[white] rounded-[5px] py-[7px]'><p className='w-[85%] m-auto'>Имеем сертификат соответствия СТБ ISO 9001-2015</p></div>
                            </div>
                            <div className='flex items-center gap-[20px] mt-[40px]'>
                                <div><img src={icon2} alt="" /></div>
                                <div className='bg-[white] rounded-[5px] py-[7px]'><p className='w-[85%] m-auto'>Имеем сертификат соответствия СТБ ISO 9001-2015</p></div>
                            </div>
                            <div className='flex items-center gap-[20px] mt-[40px]'>
                                <div><img src={icon2} alt="" /></div>
                                <div className='bg-[white] rounded-[5px] py-[7px]'><p className='w-[85%] m-auto'>Имеем сертификат соответствия СТБ ISO 9001-2015</p></div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div><img src={img2} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='bg-[#0D4373] py-[20px]'>
                        <div className='w-[85%] md:flex justify-between m-auto'>
                            <h1 className='text-[18px] text-[white]'>Профессиональное устройство свайных фундаментов из забивных и буронабивных свай</h1>
                            <div className='sm:hidden md:block w-[0.2%] h-[5vh] bg-[#D74C20]'></div>
                            <p className='text-[#D74C20] text-[18px]'>Связаться с нами</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='pb-[50px]'>
                        <h1 className='font-sans text-[#333333] mt-[40px] text-[18px] font-bold'>Сертификаты</h1>
                        <p className='text-[#868686] mt-[10px]'>Более 10 лет ООО «БелКопроСтрой» работает в сфере устройства свайных фундаментов. Для осуществления деятельности компания имеет все необходимые разрешительные документы для качественного производства работ (свидетельства, аттестаты соответствия и сертификаты).</p>
                        <div className='flex flex-wrap mt-[20px] justify-between'>
                            <div className='w-[250px]'><img src={sertificate} alt="" /></div>
                            <div className='w-[250px]'><img src={sertificate} alt="" /></div>
                            <div className='w-[250px]'><img src={sertificate} alt="" /></div>
                            <div className='w-[250px]'><img src={sertificate} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About