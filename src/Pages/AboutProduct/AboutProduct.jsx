

import React, { useState } from 'react'
import cardMan from './img/cardMan3.png'
import { Link } from 'react-router-dom'
import Demo from './Components/Color'
import SimpleDialogDemo from './Components/Dialog'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import imgS1 from './img/imgS1.png'
import imggS1 from './img/imggS1.png'
import imggS2 from './img/imggS2.png'
import imgS2 from './img/imgS2.png'
import imgS3 from './img/imgS3.png'


const AboutProduct = () => {

    const [text, setText] = useState(false)
    const [textt, setTextt] = useState(false)

    return (
        <div className='bg-[white] xl:rounded-[30px]'>
            <div className="xl:container w-[98%] m-auto">
                <div className='sm:hidden xl:block  py-[30px]'>
                    <p>
                        <Link to={"/"}> <span className='text-[grey] hover:text-[black] hover:border-b-[1px] border-[black]'> Главная </span> </Link>
                        /
                        <span className='text-[grey] hover:text-[black] hover:border-b-[1px] border-[black]'> Мужчинам </span>
                        /
                        <span className='text-[grey] hover:text-[black] hover:border-b-[1px] border-[black]'> Брюки </span>
                        /
                        <span className='text-[grey] hover:text-[black] hover:border-b-[1px] border-[black]'> NizzaroParadox </span>

                    </p>
                    <p className='font-bold text-[26px] mt-[10px]'> Best Style / Куртка </p>
                    <p className='text-[grey] text-[14px]'> 14 075 оценок  Артикул:  <span className='text-[black]'> 28267395 </span>Купили более 10 300 раз </p>
                    <div className='flex gap-[20px] mt-[20px]'>
                        <div className='w-[6%]'>
                            <div className='imgDropdown'> <img className='hover:border-[#cb11ab] hover:border  rounded-[5px]' src={imgS1} alt="" /> <div className='imgDropdown-content'> <img className='rounded-[5px]' src={imggS1} alt="" /> </div> </div>
                            <div className='imgDropdown'> <img className='hover:border-[#cb11ab] hover:border  rounded-[5px] mt-[5px]' src={imgS2} alt="" /> <div className='imgDropdown-content'> <img className='rounded-[5px]' src={imggS2} alt="" /> </div> </div>
                            <div> <img className='hover:border-[#cb11ab] hover:border  rounded-[5px] mt-[5px]' src={imgS3} alt="" /> </div>
                            <div> <img className='hover:border-[#cb11ab] hover:border  rounded-[5px] mt-[5px]' src={imgS1} alt="" /> </div>
                        </div>
                        <div className='sticky'>
                            <div> <img className='rounded-[10px]' src={cardMan} alt="" /> </div>
                        </div>
                        <div className=''>
                            <p className='text-[30px] font-bold'> 3 042 ₽  <span className='text-[grey] text-[16px]'> 5 850 ₽ </span> </p>
                            <p className='text-[grey] text-[14px] py-[10px] '> Состав: <span className='text-[black]'> хлопок, Эластан 2% </span> </p>
                            <p className='text-[grey] flex  text-[14px] items-center gap-[10px]'>Цвет:  <span className='text-[black]'> серый, серый меланж </span>  </p>
                            <div className='flex gap-[7px] mt-[10px]'>
                                <div> <img className=' rounded-[5px]' src={imgS1} alt="" /> </div>
                                <div> <img className=' rounded-[5px]' src={imgS2} alt="" /> </div>
                                <div> <img className=' rounded-[5px]' src={imgS3} alt="" /> </div>
                                <div> <img className=' rounded-[5px]' src={imgS1} alt="" /> </div>

                            </div>
                            <div>
                                <SimpleDialogDemo />
                                <div className='flex flex-wrap gap-[7px] mt-[10px] items-center'>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                    <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px] my-[25px]'>
                                <button className='bg-[#cb11ab] hover:bg-[#eb12c7] text-[white] px-[40px] font-bold py-[12px] rounded-[10px]'> Добавить в корзину </button>
                                <Link to={"/login"}> <FavoriteBorderIcon className='hover:text-[#cb11ab]' /> </Link>
                            </div>
                            <p className='text-[14px]'> 5 июля <span className='text-[grey]'> доставка со склада Подольск WB </span> </p>
                            <div className='flex gap-[20px] my-[20px]'>
                                <div className='bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]'>
                                    <div className='w-[85%] m-auto py-[5px]'>
                                        <div className='flex gap-[10px]'>
                                            <ThumbUpOffAltIcon />
                                            <p>297 829</p>
                                        </div>
                                        <p className='text-[grey]'>товаров продано</p>
                                    </div>
                                </div>
                                <div className='bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]'>
                                    <div className='w-[85%] m-auto py-[5px]'>
                                        <div className='flex gap-[10px]'>
                                            <TrendingDownIcon />
                                            <p>0.4%</p>
                                        </div>
                                        <p className='text-[grey]'>товаров с браком</p>
                                    </div>
                                </div>
                                <div className='bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]'>
                                    <div className='w-[85%] m-auto py-[5px]'>
                                        <div className='flex gap-[10px]'>
                                            <AccessTimeIcon />
                                            <p>2года и 4мес</p>
                                        </div>
                                        <p className='text-[grey]'>на Wildberries</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-[30px]' > Bronks </p>
                                <div className='flex gap-[20px]'>
                                    <div className='flex gap-[5px]'>
                                        <SyncAltIcon />
                                        <p className='text-[14px]'> 14 дней на возврат </p>
                                    </div>
                                    <div className='flex gap-[5px]'>
                                        <LoyaltyIcon />
                                        <p> Примерка </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[55%]'>
                            <p className='text-[24px] font-bold'> О товаре </p>
                            <p className='text-[16px] mt-[10px]'> Дополнительная информация </p>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Назначени </h1>
                                <h1 className='w-[45%]'> большие размеры; школа; офис </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Утеплитель </h1>
                                <h1 className='w-[45%]'> Без насчеса и утеплителя </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Тип посадки </h1>
                                <h1 className='w-[45%]'> момы свободные </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Страна производства </h1>
                                <h1 className='w-[45%]'> Турция </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Коллекция </h1>
                                <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                            </div>
                            {
                                text && (
                                    <div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Тип посадки </h1>
                                            <h1 className='w-[45%]'> момы свободные </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Страна производства </h1>
                                            <h1 className='w-[45%]'> Турция </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Коллекция </h1>
                                            <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Тип посадки </h1>
                                            <h1 className='w-[45%]'> момы свободные </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Страна производства </h1>
                                            <h1 className='w-[45%]'> Турция </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Коллекция </h1>
                                            <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Тип посадки </h1>
                                            <h1 className='w-[45%]'> момы свободные </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Страна производства </h1>
                                            <h1 className='w-[45%]'> Турция </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Коллекция </h1>
                                            <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                                        </div>
                                    </div>
                                )
                            }
                            <div className='mt-[20px]'>
                                <p onClick={() => setText(!text)} className='border-b-[1px] hover:border-[#cb11ab] text-[14px] cursor-pointer w-[27%] hover:text-[#cb11ab]'> Развернуть характеристики </p>
                                <p className='text-[14px] mt-[35px]'> Вся информация основывается на последних сведениях от производителя </p>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <p className='mt-[35px]' > Состав </p>
                            <p className='text-[14px] mt-[10px]'> вискоза - 80%, полиэстер - 20% </p>
                            <p className='mt-[30px]'> Описание </p>
                            <p className='text-[14px] mt-[10px]'> Базовая классическая повседневная блузка станет любимой в вашем гардеробе - ее легко сочетать с брюками джинсами или юбкой, надевать под пиджак или жакет. Универсальная стильная модная рубашка, в которой Вы будете чувствовать себя комфортно, как в офисе, так и на прогулке, а с помощью аксессуаров легко </p>
                            {
                                textt && (
                                    <p> создадите праздничный нарядный вечерний образ - на корпоратив, вечеринку, свидание. Ткань жатка - не мнется, не надо утюжить. Блузка удобная, подойдет как домашняя одежда для дома, на работу в офис, праздничная одежда, школьная форма для подростка, медицинская рубашка. Топ с коротким не длинным рукавом отлично выглядит на женщине с пышной грудью, отлично смотрится на девочке как блузка школьная в школу, подходит для высоких и невысоких девушек, женщин, подростков, худых и полных. Прямой крой скрывает недостатки фигуры, по бокам разрезы. Все швы закрыты и аккуратно обработаны, что придает изделию дороговизну и лоск. Блуза оверсайз белая бежевая зеленая черная фуксия вишня голубая бордовая серая розовая черная синяя сшита из натуральных тканей, состав вискоза, легко пропускает воздух, прекрасная летняя одежда женская. Подойдет как бохо вещи, если это ваш стиль жизни. Если вы любите стиль zara зара hm - то эта модель идеальный выбор, заменит боди, трикотаж, это не белорусская одежда, производство находится в России. Офисный стиль Одежда для беременных Большие размеры Нарядная Модная Стильная Удобная Деловой стиль Не с рюшами Не с длинным рукавом Не шифон Вечерняя Молодежная Блузка Сезон зима, осень, весна, лето Не хлопок Не трикотажная Не атласный Не кружевная </p>
                                )
                            }
                            <p onClick={() => setTextt(!textt)} className='text-[14px] border-b-[1px] hover:border-[#cb11ab] hover:text-[#cb11ab] cursor-pointer w-[30%] mt-[20px]'> Развернуть описание </p>
                        </div>
                    </div>
                </div>
                <div className='sm:block xl:hidden'>
                    <div>
                        <img src={cardMan} alt="" />
                    </div>
                    <div>
                        <p className='text-[30px] font-bold'> 3 042 ₽  <span className='text-[grey] text-[16px]'> 5 850 ₽ </span> </p>
                        <p className='text-[grey] flex  text-[14px] items-center gap-[10px]'>Цвет:  <span className='text-[black]'> серый, серый меланж </span>  </p>
                    </div>
                    <div className='flex gap-[7px] mt-[10px]'>
                        <div> <img className=' rounded-[5px]' src={imgS1} alt="" /> </div>
                        <div> <img className=' rounded-[5px]' src={imgS2} alt="" /> </div>
                        <div> <img className=' rounded-[5px]' src={imgS3} alt="" /> </div>
                        <div> <img className=' rounded-[5px]' src={imgS1} alt="" /> </div>
                    </div>
                    <div>
                        <div className='flex flex-wrap gap-[7px] mt-[10px] items-center'>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 30-XS <p className='text-[12px] text-[grey]'>30-35</p> </button>
                            <button className='border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]'> 38-XXL <p className='text-[12px] text-[grey]'>30-35</p> </button>
                        </div>
                        <SimpleDialogDemo />
                    </div>
                    <div className='my-[25px]'>
                        <p className='text-[grey] text-[14px]'> 14 075 оценок  Артикул:  <span className='text-[black]'> 28267395 </span>Купили более 10 300 раз </p>
                        <button className='bg-[yellow] w-[100%] rounded-[10px] py-[5px]'> ХИТ ПРОДАЖ </button>
                    </div>
                    <hr />
                    <div>
                        <div className='mt-[20px]'>
                            <p className='text-[24px] font-bold' > О товаре </p>
                            <p className='text-[14px] mt-[10px]'> Базовая классическая повседневная блузка станет любимой в вашем гардеробе - ее легко сочетать с брюками джинсами или юбкой, надевать под пиджак или жакет. Универсальная стильная модная рубашка, в которой Вы будете чувствовать себя комфортно, как в офисе, так и на прогулке, а с помощью аксессуаров легко </p>
                            {
                                textt && (
                                    <p> создадите праздничный нарядный вечерний образ - на корпоратив, вечеринку, свидание. Ткань жатка - не мнется, не надо утюжить. Блузка удобная, подойдет как домашняя одежда для дома, на работу в офис, праздничная одежда, школьная форма для подростка, медицинская рубашка. Топ с коротким не длинным рукавом отлично выглядит на женщине с пышной грудью, отлично смотрится на девочке как блузка школьная в школу, подходит для высоких и невысоких девушек, женщин, подростков, худых и полных. Прямой крой скрывает недостатки фигуры, по бокам разрезы. Все швы закрыты и аккуратно обработаны, что придает изделию дороговизну и лоск. Блуза оверсайз белая бежевая зеленая черная фуксия вишня голубая бордовая серая розовая черная синяя сшита из натуральных тканей, состав вискоза, легко пропускает воздух, прекрасная летняя одежда женская. Подойдет как бохо вещи, если это ваш стиль жизни. Если вы любите стиль zara зара hm - то эта модель идеальный выбор, заменит боди, трикотаж, это не белорусская одежда, производство находится в России. Офисный стиль Одежда для беременных Большие размеры Нарядная Модная Стильная Удобная Деловой стиль Не с рюшами Не с длинным рукавом Не шифон Вечерняя Молодежная Блузка Сезон зима, осень, весна, лето Не хлопок Не трикотажная Не атласный Не кружевная </p>
                                )
                            }
                            <p onClick={() => setTextt(!textt)} className='text-[14px] border-b-[1px] text-[#cb11ab] cursor-pointer mt-[20px]'> Развернуть описание </p>
                        </div>
                        <div className='my-[30px]'>
                            <p className=''>Состав</p>
                            <p className='text-[14px]'> вискоза - 80%, полиэстер - 20% </p>
                        </div>

                        <div className='mt-[10px]'>
                            <p className='text-[16px] mt-[10px]'> Дополнительная информация </p>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Назначени </h1>
                                <h1 className='w-[45%]'> большие размеры; школа; офис </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Утеплитель </h1>
                                <h1 className='w-[45%]'> Без насчеса и утеплителя </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Тип посадки </h1>
                                <h1 className='w-[45%]'> момы свободные </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Страна производства </h1>
                                <h1 className='w-[45%]'> Турция </h1>
                            </div>
                            <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                <h1 className='w-[45%]'> Коллекция </h1>
                                <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                            </div>
                            {
                                text && (
                                    <div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Тип посадки </h1>
                                            <h1 className='w-[45%]'> момы свободные </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Страна производства </h1>
                                            <h1 className='w-[45%]'> Турция </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Коллекция </h1>
                                            <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Тип посадки </h1>
                                            <h1 className='w-[45%]'> момы свободные </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Страна производства </h1>
                                            <h1 className='w-[45%]'> Турция </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Коллекция </h1>
                                            <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Тип посадки </h1>
                                            <h1 className='w-[45%]'> момы свободные </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Страна производства </h1>
                                            <h1 className='w-[45%]'> Турция </h1>
                                        </div>
                                        <div className='text-[14px] flex justify-between  mt-[5px] text-[grey]'>
                                            <h1 className='w-[45%]'> Коллекция </h1>
                                            <h1 className='w-[45%]'> Весна-Лето 2023 </h1>
                                        </div>
                                    </div>
                                )
                            }
                            <div className='mt-[20px]'>
                                <p onClick={() => setText(!text)} className='border-b-[1px] hover:border-[#cb11ab] text-[14px] cursor-pointer text-[#cb11ab]'> Развернуть характеристики </p>
                                <p className='text-[14px] mt-[35px]'> Вся информация основывается на последних сведениях от производителя </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-[30px]' > Bronks </p>
                        <div className='flex gap-[20px]'>
                            <div className='flex gap-[5px]'>
                                <SyncAltIcon />
                                <p className='text-[14px]'> 14 дней на возврат </p>
                            </div>
                            <div className='flex gap-[5px]'>
                                <LoyaltyIcon />
                                <p> Примерка </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[20px] my-[20px]'>
                                <div className='bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]'>
                                    <div className='w-[85%] m-auto py-[5px]'>
                                        <div className='flex gap-[10px]'>
                                            <ThumbUpOffAltIcon />
                                            <p>297 829</p>
                                        </div>
                                        <p className='text-[grey]'>товаров продано</p>
                                    </div>
                                </div>
                                <div className='bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]'>
                                    <div className='w-[85%] m-auto py-[5px]'>
                                        <div className='flex gap-[10px]'>
                                            <TrendingDownIcon />
                                            <p>0.4%</p>
                                        </div>
                                        <p className='text-[grey]'>товаров с браком</p>
                                    </div>
                                </div>
                                <div className='bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]'>
                                    <div className='w-[85%] m-auto py-[5px]'>
                                        <div className='flex gap-[10px]'>
                                            <AccessTimeIcon />
                                            <p>2года и 4мес</p>
                                        </div>
                                        <p className='text-[grey]'>на Wildberries</p>
                                    </div>
                                </div>
                            </div>
                    <div className=''>
                        <button className='bg-[#c32caa] w-[100%] text-[white] py-[10px] rounded-[10px]'> В корзину </button>
                        <p className='text-[grey] text-center'> Доставка <span className='text-[black]'> 6 июлья </span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct