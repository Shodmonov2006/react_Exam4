import React from 'react'
import logo from './img/logo.png'
import icons from './img/icons.png'
import icons2 from './img/icons2.png'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Switcher from '../Dark/Switcher'
import TemporaryDrawer from './Components/TemporaryDrawer/TemporaryDrawer'

const Layout = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <div className='dark:bg-[#0d0d46] dark:text-[white] '>

            <div className='sm:hidden md:block bg-[#F3F3F3]'>
                <div className="container">
                    <div className='flex justify-between'>
                        <ul className='dark:text-[black] flex gap-[20px]'>
                            <Link to={"/about"}> <li>{t("t22")}</li> </Link>
                            <Link to={"/news"}> <li>{t("t23")}</li> </Link>
                            <Link to={"/reviews"}> <li>{t("t24")}</li> </Link>
                        </ul>
                        <div className='flex gap-[20px]'>
                            <button className='dark:text-[black]' onClick={() => changeLanguage("en")}>en</button>
                            <button className='dark:text-[black]' onClick={() => changeLanguage("ru")}>ru</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='flex items-center gap-[20px] justify-between'>
                        <div>
                            <img src={icons} alt="" />
                        </div>
                        <div className='md:hidden'>
                            <TemporaryDrawer />
                        </div>
                        <div className='sm:hidden  md:flex items-center gap-[20px]'>
                            <div className='flex items-center'>
                                <div>
                                    <p>+375 44 767 60 76</p>
                                    <p>info@svai.by</p>
                                </div>
                                <div>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div>
                                <Switcher />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:hidden md:block bg-[#0D4373]'>
                <div className="container">
                    <div className='flex items-center  justify-between py-[10px]'>
                        <div>
                            <ul className='flex items-center gap-[20px] text-[#888888]'>
                                <Link to={"/"}><li className='text-[white] font-bold text-[18px]'>{t("t1")}</li></Link>
                                <Link to={"/services"}><li>{t("t2")}</li></Link>
                                <Link to={"/objects"}><li>{t("t3")}</li></Link>
                                <Link to={"/career"}><li>{t("t4")}</li></Link>
                                <Link to={"/contacts"}><li>{t("t5")}</li></Link>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-[#D74C20] px-[20px] py-[12px] rounded-[5px] text-[white]'>{t("t6")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />

            <div className='bg-[#0D4373] py-[50px]'>
                <div className="container">
                    <div className='flex justify-center'>
                        <img src={icons2} alt="" />
                    </div>
                    <p className='text-center text-[14px] text-[white]'>© Copyrights 2021 Fundamenta. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Layout