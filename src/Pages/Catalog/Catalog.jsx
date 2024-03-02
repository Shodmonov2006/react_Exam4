import React from 'react'
import logo from './img/logo.png'
import cardMan from './img/cardMan.png'
import card from './img/card.png'
import cardMan2 from './img/cardMan2.png'
import CompSelect from './Components/Select'
import { Link } from 'react-router-dom'


const Catalog = () => {
  return (
    <div className='bg-[white] xl:rounded-[30px]'>
      <div className='xl:container w-[98%] m-auto'>
        <div className='flex items-center gap-[20px] py-[17px]'>
          <img className='cursor-pointer' src={logo} alt="" />
          <p className='text-[#5d5d5d]'> <span className='hover:text-[black] cursor-pointer hover:border-b-[1px] border-[black]'>Главная</span> / <span className='hover:text-[black] cursor-pointer hover:border-b-[1px] border-[black]'>Бренды на «B»</span> / <span className='hover:text-[black] cursor-pointer hover:border-b-[1px] border-[black]'> Best Style </span> </p>
        </div>
        <div className='flex items-baseline gap-[20px]'>
          <p className='font-bold text-[34px]'>Каталог Best Style</p>
          <p className='text-[#5d5d5d]'> 95 товаров </p>
        </div>
        <div className='flex overflow-x-scroll justify-between py-[25px]'>
          <CompSelect value={'Best Style'} />
          <CompSelect value={'популярности'} />
          <CompSelect value={'Категория'} />
          <CompSelect value={'Продавец'} />
          <CompSelect value={'Цвет'} />
          <CompSelect value={'Hello'} />
          <CompSelect value={'Срок доставки'} />
        </div>
        <div className='flex flex-wrap justify-between pb-[20px]'>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={cardMan2} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hoverCard xl:w-[20%] lg:w-[25%] my-[10px] md:w-[30%] sm:w-[48%]'>
            <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
              <Link to={"/aboutProduct"}> <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" /> </Link>
              <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                <div className='xl:w-[195px]  m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex  w-[85%] justify-between mt-[10px]'>
                    <p className='text-[#5d5d5d]'>X</p>
                    <p className='text-[#5d5d5d]'>M</p>
                    <p className='text-[#5d5d5d]'>L</p>
                    <p className='text-[#5d5d5d]'>XL</p>
                    <p className='text-[#5d5d5d]'>2XL</p>
                    <p className='text-[#5d5d5d]'>3XL</p>
                    <p className='text-[#5d5d5d]'>...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog