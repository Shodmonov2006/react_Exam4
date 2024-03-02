import React from 'react'
import logo from './img/logo.png'
import card from './img/card.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import card4 from './img/card4.png'
import CompSelect from './Components/Select'
import { Link } from 'react-router-dom'


const WomanCatalog = () => {
  return (
    <div className='bg-[white] rounded-[30px]'>
      <div className='container'>
        <div className='flex items-center gap-[20px] py-[17px]'>
           <Link to={"/catalogBeatStile"}><img className='cursor-pointer' src={logo} alt="" /></Link>
          <p className='text-[#5d5d5d]'> <span className='hover:text-[black] cursor-pointer hover:border-b-[1px] border-[black]'>Главная</span> / <span className='hover:text-[black] cursor-pointer hover:border-b-[1px] border-[black]'>Бренды на «B»</span> / <span className='hover:text-[black] cursor-pointer hover:border-b-[1px] border-[black]'> Best Style </span> </p>
        </div>
        <div className='flex items-baseline gap-[20px]'>
          <p className='font-bold text-[34px]'>Женские блузки и рубашки</p>
          <p className='text-[#5d5d5d]'> 95 товаров </p>
        </div>
        <div className='flex justify-between py-[25px]'>
          <CompSelect value={'Best Style'}/>
          <CompSelect value={'популярности'}/>
          <CompSelect value={'Категория'}/>
          <CompSelect value={'Продавец'}/>
          <CompSelect value={'Цвет'}/>
          <CompSelect value={'Hello'}/>
          <CompSelect value={'Срок доставки'}/>
        </div>
        <div className='flex flex-wrap gap-[20px] pb-[120px]'>
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow ww-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card2} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow ww-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card4} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow ww-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card2} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card3} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card4} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card3} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card4}  alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card2} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card3}  alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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
          <div className='hoverCard w-[220px] '>
            <div className='bg-[white] boxShadow w-[220px]'>
              <img className='hoverCard w-[195px] m-auto py-[12px] rounded-[7%]' src={card4} alt="" />
              <div className='w-[195px] mx-auto'>
                <span className='font-bold text-[24px]'> 2 599 ₽</span> /<span className='line-through text-[#5d5d5d]'> 4 999 ₽ </span>
                <h1>
                  <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> Куртка джинсовая </span>
                </h1>
                <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
              </div>
              <div className='blockButton bg-[#ffffff]  w-[220px] m-auto pt-[10px] mb-[20px]'>
                <div className='w-[195px] m-auto'>
                  <button className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
                  <div className='flex justify-between mt-[10px]'>
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

export default WomanCatalog