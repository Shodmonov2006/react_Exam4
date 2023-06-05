import React from 'react'
import img1 from './img/img1.jpg'
import img2 from './img/im2g.jpg'
import img3 from './img/im3g.png'
import { useTranslation } from 'react-i18next'


const Main = () => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
      i18n.changeLanguage(language)
  }

  return (
    <div>
      <div className='bg'>
        <div className="container">
          <div className='py-[95px]'>
            <span className='sm:text-[37px] text-[#D74C20] md:text-[60px] font-bold'>{t("t7")}</span>
            <h1 className='sm:text-[45px] md:text-[60px] text-[white] font-bold'>{t("t8")}</h1>
            <p className='text-[#F3F3F3] text-[20px] md:w-[35%]'>{t("t9")}</p>
            <p className='text-[20px] text-[#F3F3F3] mt-[20px] font-bold'>{t("t10")}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className='bg-[#0D4373] py-[20px]'>
            <div className='w-[85%] md:flex justify-between m-auto'>
              <h1 className='text-[18px] text-[white]'>{t("t11")}</h1>
              <div className='sm:hidden md:block w-[0.2%] h-[5vh] bg-[#D74C20]'></div>
              <p className='text-[#D74C20] text-[18px]'>{t("t12")}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className='md:flex justify-between mt-[60px]'>
            <div className='bgCrd sm:w-[100%] md:w-[66%]'>
              <h1 className='text-[18px] font-bold text-[white] w-[90%] m-auto mt-[220px]'>CFA</h1>
              <p className='text-[16px] text-[#a4a4a4] w-[90%] m-auto'>{t("t13")}</p>
              <p className='text-[16px] text-[white] w-[90%] m-auto mt-[10px] mb-[20px]'>{t("t10")}</p>
            </div>
            <div className='md:w-[32%]'>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h1 className='dark:text-[white] text-[18px] font-bold text-[black] m-auto'>CFA</h1>
                <p className='dark:text-[white]  text-[16px] text-[#6a6a6a] m-auto'>{t("t13")}</p>
                <p className='dark:text-[white] text-[16px] text-[black] m-auto mt-[10px]'>{t("t10")}</p>
              </div>
            </div>
          </div>
          <div className='md:flex justify-between mt-[25px]'>
            <div className='md:w-[32%]'>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h1 className='dark:text-[white] text-[18px] font-bold text-[black] m-auto'>CFA</h1>
                <p className='dark:text-[white] text-[16px] text-[#6a6a6a] m-auto'>{t("t13")}</p>
                <p className='dark:text-[white] text-[16px] text-[black] m-auto mt-[10px]'>{t("t10")}</p>
              </div>
            </div> <div className='md:w-[32%]'>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h1 className='dark:text-[white] text-[18px] font-bold text-[black] m-auto'>CFA</h1>
                <p className='dark:text-[white] text-[16px] text-[#6a6a6a] m-auto'>{t("t13")}</p>
                <p className='dark:text-[white] text-[16px] text-[black] m-auto mt-[10px]'>{t("t10")}</p>
              </div>
            </div> <div className='md:w-[32%]'>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h1 className='text-[18px] font-bold text-[#D74C20] m-auto'>CFA</h1>
                <p className='dark:text-[white] text-[16px] text-[#6a6a6a] m-auto'>{t("t13")}</p>
                <p className='text-[16px] text-[#D74C20] m-auto mt-[10px]'>{t("t10")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bbg py-[90px] mt-[30px]'>
        <div className="container">
          <h1 className='text-[#D74C20] font-bold text-center sm:text-[40px] md:text-[60px]'>{t("t14")}</h1>
          <h1 className='text-[white] font-bold text-center sm:text-[40px] md:text-[60px]'>{t("t15")}</h1>
        </div>
      </div>
      <div>
        <div className="container">
          <div className='md:flex items-center py-[50px] justify-between'>
            <div className='md:w-[20%]'>
              <div className='bg-[#0D4373] text-[white] text-[18px]'>
                <h1 className='w-[85%] text-end py-[10px]'>{t("t16")}</h1>
              </div>
              <div className='bg-[#F4F4F4] text-[18px] mt-[5px]'>
                <h1 className='dark:text-[black] w-[85%] text-end py-[10px]'>{t("t17")}</h1>
              </div>
              <div className='bg-[#F4F4F4] text-[18px] mt-[5px] py-[10px]'>
                <h1 className='w-[85%] text-end dark:text-[black]'>{t("t18")}</h1>
              </div>
            </div>
            <div className='md:w-[75%]'>
              <h1 className='dark:text-[white] text-[#333333] font-bold  text-[18px]'>SVAI.BY</h1>
              <p className='dark:text-[white] text-[#868686]  text-[16px]'>{t("t19")}</p>
              <h1 className='dark:text-[white] text-[#333333] font-bold  text-[18px]'>{t("t20")}</h1>
              <p className='dark:text-[white] text-[#868686]  text-[16px]'>{t("t21")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main