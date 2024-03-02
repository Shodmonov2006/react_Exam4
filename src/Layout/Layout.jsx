import React, { useState } from 'react'
import './Style/StyleDrop.css'

import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Link, Outlet } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuOutlined, WomanOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import card from './img/ccard.png'
import shoes from './img/shoes.ico'
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import woman from './img/цщ.jpg'
import SimpleAccordion from './Components/Accordion';

const Layout = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div className='bg'>
                <div className='xl:container m-auto'>
                    <div className='w:hidden xl:flex items-center gap-[30px] py-[10px]'>
                        <div>
                            <div class="tooltipCurrency">
                                <div className='text'>
                                    <div className='w-[88%] m-auto'>
                                        <h1 className='font-bold text-[15px] pt-[10px]'>Выберите валюту</h1>
                                        <div className='flex gap-[15px] items-center mt-[10px] my-[5px] hover:bg-[#e8e8e8]'>
                                            <img className='rounded-[50%] w-[35px]' src="https://www.pikpng.com/pngl/m/313-3133932_uzbekistan-round-flag-circle-clipart.png" alt="" />
                                            <p className='text-[14px] text-[#c7c7c7]'>UZB</p>
                                            <p className='text-[16px]'>Узбекский сум</p>
                                        </div>
                                        <div className='flex gap-[15px] items-center my-[5px] hover:bg-[#e8e8e8]'>
                                            <img className='rounded-[50%] w-[28px] ml-[5px]' src="https://avatars.mds.yandex.net/i?id=9dd73785ff7f451c676ae339da7875b082d5c880-9041799-images-thumbs&n=13" alt="" />
                                            <p className='text-[14px] text-[#c7c7c7]'>AMD</p>
                                            <p className='text-[16px]'>Армянский драм</p>
                                        </div>
                                        <div className='flex gap-[15px] mb-[10px] items-center my-[5px] hover:bg-[#e8e8e8]'>
                                            <img className='rounded-[50%] w-[28px] ml-[5px]' src="https://live.staticflickr.com/65535/49214918628_de55cc9093_o.jpg" alt="" />
                                            <p className='text-[14px] text-[#c7c7c7]'>RUB</p>
                                            <p className='text-[16px]'>Российский рубль</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px] py-[20px]'>
                                    <img className='rounded-[50%] w-[15px]' src="https://live.staticflickr.com/65535/49214918628_de55cc9093_o.jpg" alt="" />
                                    <p className='text-[#c7c7c7] text-[10px]'>RUB</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[2px]  cursor-pointer items-center'>
                            <PlaceIcon fontSize='smal' className='text-[#c7c7c7] hover:text-[white]' />
                            <p className='text-[#c7c7c7] hover:text-[white] text-[14px]'>Москва</p>
                        </div>
                        <div className='bg-[#a41dde] shadow-xl rounded-[20px] cursor-pointer'>
                            <p className='text-[white] text-center text-[14px] py-[2px] px-[15px]'>Продавйте на Wildberries</p>
                        </div>
                        <div className='rounded-[20px] bg-[#ffa920] shadow-xl cursor-pointer'>
                            <p className='text-center text-[white] text-[14px] py-[2px] px-[15px]'>Работа в Wildberries</p>
                        </div>
                    </div>
                    <div className='xl:pb-[20px] w:py-[10px]  items-center'>
                        <div className='flex items-center xl:justify-between  2xl:gap-[10px]'>
                            <div className='flex items-center xl:w-[31%] gap-[10px]'>
                                <div onClick={() => setOpenModal(true)} className='border-[#c0c0c0] w:hidden xl:block hover:border-[white] border w-[15%] rounded-[7px] duration-[0.5s]'>
                                    <img className='w-[75%] m-auto py-[5px]' src="https://www.pinclipart.com/picdir/big/532-5328945_menu-bar-icon-white-clipart-png-download-menu.png" alt="" />
                                </div>
                                <div>
                                    
                                    {openModal && (
                                        <div className='fixed top-0 left-0 bgMenuOpenModal'>
                                            <div className='flex'>
                                                <div className=" flex w-[100%] h-[100%]  left-0 top-0 ll ">
                                                    <div className="bg-[#ffffff] min-w-[290px] overflow-y-auto ">
                                                        <ul class="h-[100%] w-[100%]">
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <FaceOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Женщинам
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>
                                                                    <div className='dropdown2'>
                                                                        <p className='text-[black] hover:text-[#cb11ab] font-bold cursor-pointer duration-[0.2s] text-[18px]'>Женщинам</p>
                                                                        <Link onClick={() => setOpenModal(false)} to={"/womanCatalog"}> <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Блузки и рубашки</p> </Link>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Брюки</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Верхняя одежда</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Джемперы, водолазки и кардиганы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Джинсы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Комбинезоны</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Костюмы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Лонгсливы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Пиджаки, жилеты и жакеты</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Платья и сарафаны</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Толстовки, свитшоты и худи</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Туники</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Футболки и топы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Халаты</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Шорты</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Юбки</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Белье</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Большие размеры</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Будущие мамы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для высоких</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для невысоких</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Одежда для дома</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Офис</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Пляжная мода</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Религиозная</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Свадьба</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Спецодежда и СИЗы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Подарки женщинам</p>
                                                                        <div className='dropdown-content2'>
                                                                            <div>
                                                                                <img className='w-[250px] m-auto hover:w-[260px] duration-[0.7s] cursor-pointer' src={woman} alt="" />
                                                                            </div>
                                                                            <p className='text-center hover:hover:text-[#cb11ab] duration-[0.2s] font-bold mt-[10px] cursor-pointer'>Женские-костьюмы</p>
                                                                        </div>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <img className='w-[20px]' src={shoes} alt="" />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Обувь
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>
                                                                    <div>
                                                                        <p className='text-[black] hover:text-[#cb11ab] font-bold cursor-pointer duration-[0.2s] text-[18px]'>Обувь</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Детская</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для новорожденных</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Женская</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Мужская</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Ортопедическая обувь</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Аксессуары для обуви</p>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <Face6OutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Мужчинам
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>
                                                                    <div>
                                                                        <p className='text-[black] hover:text-[#cb11ab] font-bold cursor-pointer duration-[0.2s] text-[18px]'>Мужчинам</p>
                                                                        <Link onClick={() => setOpenModal(false)} to={"/manCatalog"}><p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Брюки</p></Link>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Верхняя одежда</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Джемперы, водолазки и кардиганы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Джинсы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Комбинезоны и полукомбинезоны</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Костюмы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Лонгсливы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Майки</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Пиджаки, жилеты и жакеты</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Пижамы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Рубашки</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Толстовки, свитшоты и худи</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Футболки</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Футболки-поло</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Халаты</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Шорты</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Белье</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Большие размеры</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для высоких</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для невысоких</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Одежда для дома</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Офис</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Пляжная одежда</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Религиозная</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Свадьба</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Спецодежда и СИЗы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Подарки мужчинам</p>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <ChildFriendlyOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Детям
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>
                                                                    <div>
                                                                        <p className='text-[black] hover:text-[#cb11ab] font-bold cursor-pointer duration-[0.2s] text-[18px]'>Детям</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для девочек</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для мальчиков</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Для новорожденных</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Детская электроника</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Конструкторы</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Детский транспорт</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Детское питание</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Религиозная одежда</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Товары для малыша</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Подгузники</p>
                                                                        <p className='text-[grey] hover:text-[black] cursor-pointer my-[7px]'>Подарки детям</p>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] hover:bg-[#cb11ab] px-[10px] py-[2px] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                    <CottageOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Дом
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <HeadphonesOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Электроника
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <SportsBaseballOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Спорт
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <Diversity1OutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Здоровье
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]   '>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <LibraryBooksOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Книги
                                                                    </h1>
                                                                </div>
                                                                <div className='bg-[white] h-[100%] w-[50%]'>
                                                                    <p className='dropdown-content'>Empty</p>
                                                                </div>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <FaceOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Женщинам
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>hi</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <img className='w-[20px]' src={shoes} alt="" />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Обувь
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <Face6OutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Мужчинам
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <ChildFriendlyOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Детям
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className=' py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] hover:bg-[#cb11ab] px-[10px] py-[2px] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                    <CottageOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Дом
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <HeadphonesOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Электроника
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <SportsBaseballOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Спорт
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]'>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <Diversity1OutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Здоровье
                                                                    </h1>
                                                                </div>
                                                                <p className='dropdown-content'>Empty</p>
                                                            </div>
                                                            <div className='dropdown py-[8px]   '>
                                                                <div className='flex items-center hover:text-[white] dropdown w-[70%] m-auto hover:bg-[#cb11ab] px-[10px] py-[2px] hover:rounded-[5px]'>
                                                                    <LibraryBooksOutlinedIcon />
                                                                    <h1 className='hover:text-[white] dropdown w-[70%] m-auto  hover:rounded-[5px]'>
                                                                        Книги
                                                                    </h1>
                                                                </div>
                                                                <div className='bg-[white] h-[100%] w-[50%]'>
                                                                    <p className='dropdown-content'>Empty</p>
                                                                </div>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div onClick={() => setOpenModal(false)} className='absolute ml-[300px] top-0'>
                                                    <p className='cursor-pointer text-[white] text-[30px]'>X</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <Link to={"/"}> <h1 className='text-[white] cursor-pointer font-bold text-[36px]'>WIlDBERRIES</h1> </Link>
                                </div>
                                <div className='sm:flex xl:hidden gap-[5px] items-center'>
                                    <SearchIcon className='text-[white]' />
                                    <PlaceIcon className='text-[white]' />
                                </div>
                                <div className='w:hidden flex items-center gap-[15px]'>
                                    <div class="tooltipCurrency">
                                        <div className='text'>
                                            <div className='w-[88%] m-auto'>
                                                <h1 className='font-bold text-[15px] pt-[10px]'>Выберите валюту</h1>
                                                <div className='flex gap-[15px] items-center mt-[10px] my-[5px] hover:bg-[#e8e8e8]'>
                                                    <img className='rounded-[50%] w-[35px]' src="https://www.pikpng.com/pngl/m/313-3133932_uzbekistan-round-flag-circle-clipart.png" alt="" />
                                                    <p className='text-[14px] text-[#c7c7c7]'>UZB</p>
                                                    <p className='text-[16px]'>Узбекский сум</p>
                                                </div>
                                                <div className='flex gap-[15px] items-center my-[5px] hover:bg-[#e8e8e8]'>
                                                    <img className='rounded-[50%] w-[28px] ml-[5px]' src="https://avatars.mds.yandex.net/i?id=9dd73785ff7f451c676ae339da7875b082d5c880-9041799-images-thumbs&n=13" alt="" />
                                                    <p className='text-[14px] text-[#c7c7c7]'>AMD</p>
                                                    <p className='text-[16px]'>Армянский драм</p>
                                                </div>
                                                <div className='flex gap-[15px] mb-[10px] items-center my-[5px] hover:bg-[#e8e8e8]'>
                                                    <img className='rounded-[50%] w-[28px] ml-[5px]' src="https://live.staticflickr.com/65535/49214918628_de55cc9093_o.jpg" alt="" />
                                                    <p className='text-[14px] text-[#c7c7c7]'>RUB</p>
                                                    <p className='text-[16px]'>Российский рубль</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-[10px] py-[20px]'>
                                            <img className='rounded-[50%] w-[15px]' src="https://live.staticflickr.com/65535/49214918628_de55cc9093_o.jpg" alt="" />
                                            <p className='text-[#c7c7c7] text-[10px]'>RUB</p>
                                        </div>
                                    </div>
                                    <PlaceIcon fontSize='medium' className='text-[white]' />
                                    <SearchIcon fontSize='medium' className='text-[#ffffff]' />
                                </div>
                            </div>
                            <div className='relative 2xl:flex items-center w-[65%] w:hidden'>
                                <PhotoCameraIcon className=' absolute right-4 text-[#c7c7c7] ml-[20px]' />
                                <input className='bg-[#ffffff42] border-none outline-none  w-[100%] pl-[50px] rounded-[50px] py-[17px] focus:bg-[white] hover:bg-[#ffffff89] duration-[0.5s]' placeholder='Я ищу...' type="text" />
                                <SearchIcon className=' absolute text-[#c7c7c7] ml-[20px] focus:bg-[red]' />
                            </div>
                            <div className='w:hidden xl:flex gap-[28px]'>
                                <a href="https://yandex.ru/maps/213/moscow/chain/wildberries/2129228517/filter/chain_id/2129228517/?ll=37.649134%2C55.601916&sll=37.649134%2C55.601295&z=9" target='_tablet'>
                                    <div className='cursor-pointer'>
                                        <div className='flex  justify-center'>
                                            <PlaceIcon fontSize='medium' className='text-[white]' />
                                        </div>
                                        <p className='text-[white] text-center'>Адресса</p>
                                    </div>
                                </a>
                                <Link to={"/login"}> <div className='cursor-pointer'>
                                    <div className='flex justify-center'>
                                        <PersonIcon fontSize='medium' className='text-[white]' />
                                    </div>
                                    <p className='text-[white] text-center'>Войти</p>
                                </div> </Link>
                                <Link to={"/basket"}>
                                    <div className='cursor-pointer'>
                                        <div className='flex justify-center'>
                                            <ShoppingCartIcon fontSize='medium' className='text-[white]' />
                                        </div>
                                        <p className='text-[white] text-center'>Корзина</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative w:hidden xl:flex items-center 2xl:hidden mb-[15px]'>
                        <PhotoCameraIcon className=' absolute right-4 text-[#c7c7c7] ml-[20px]' />
                        <input className='bg-[#ffffff42] border-none outline-none  w-[100%] pl-[50px] rounded-[50px] py-[17px] focus:bg-[white] hover:bg-[#ffffff89] duration-[0.5s]' placeholder='Я ищу...' type="text" />
                        <SearchIcon className=' absolute text-[#c7c7c7] ml-[20px] focus:bg-[red]' />
                    </div>
                </div>

                <Outlet />

                <div className='xl:hidden sm:block'>
                    <SimpleAccordion />
                </div>

                <div className=" w:fixed xl:hidden bottom-0 w-[100%] z-[9999] border-t-2 ">
                    <div className="flex justify-evenly items-center bg-white p-[15px_0] ">
                        <Link to={"/"} className="flex items-center flex-col text-gray-500 focus:text-[#9f2c98]">
                            <HomeIcon />
                        </Link>
                        <Link className="flex items-center flex-col text-gray-500 focus:text-[#9f2c98]">
                            <ManageSearchIcon />
                        </Link>
                        <Link to={"/basket"} className="flex items-center flex-col text-gray-500 focus:text-[#9f2c98]">
                            <ShoppingCartOutlinedIcon />
                        </Link>
                        <Link className="flex items-center flex-col text-gray-500">
                            <FavoriteIcon />
                        </Link>
                        <Link to={"/login"} className="flex items-center flex-col text-gray-500 focus:text-[#9f2c98]">
                            <PersonIcon />
                        </Link>
                    </div>
                </div>

                <div className='w:hidden xl:block'>
                    <div className="container">
                        <footer>
                            <div className='flex justify-between pt-[30px]'>
                                <div className='w-[24%]'>
                                    <ul>
                                        <li className='text-[white] text-[20px] font-bold'> Покупателям </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> Как сделать заказ </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Способы оплаты </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Доставка </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Возврат товара </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Возврат денежных средств </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Правила продажи </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Правила пользования торговой площадкой </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Вопросы и ответы </li>
                                    </ul>
                                </div>
                                <div>
                                    <div>
                                        <ul>
                                            <li className='text-[white] text-[20px] font-bold'> Партнерам </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> Продавайте на Wildberries </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Курьерам </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Перевозчикам </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Партнерский пункт выдачи </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Франшизный пункт выдачи </li>
                                        </ul>
                                    </div>
                                    <div className='mt-[40px]'>
                                        <ul>
                                            <li className='text-[white] text-[20px] font-bold'> Наши проекты </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> WB Guru </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Трудоустройство </li>
                                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Цифровые товары </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        <li className='text-[white] text-[20px] font-bold'> Компания </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> О нас </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Реквизиты </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Пресс-центр </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Контакты </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Bug Bounty </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> WB.Tech </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className='text-[white] text-[20px] font-bold'> Мы в соцсетях </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> ВКонтакте </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Одноклассники </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> YouTube </li>
                                        <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Телеграм </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='text-[white] text-[19px] font-bold'>Приложение Wildberries</p>
                                    <div className='mt-[10px] cursor-pointer'>
                                        <img className='rounded-[20px]' src={card} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[55%] m-auto mt-[60px]'>
                                <p className='text-center text-[white] text-[15px]'>2004-2023 © Wildberries — модный интернет-магазин одежды, обуви и аксессуаров. Все права защищены. Доставка по всей России.</p>
                            </div>
                            <p className='text-[white] text-[15px] text-center line-through'>Проверка совместимости</p>
                            <div className='pb-[25px]'>
                                <ArrowCircleUpIcon fontSize='large' color='primary' className='bg-[#cb11ab] border border-[#cb11ab]' />
                                {/* <img className='w-[70px]' src={arrow} alt="" /> */}
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout