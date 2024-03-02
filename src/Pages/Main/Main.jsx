import React from 'react'
import SwiperAutoplay from './Components/Autoplay'
import img from './img/img.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import card from './img/card.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'
import card4 from './img/card4.png'
import cardMan2 from './img/cardMan2.png'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../../api/Product'
import { useGetBrandsQuery } from '../../api/Brands'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../reducers/basket'

const Main = () => {

    const { data = [] } = useGetProductsQuery()
    console.log(data);

    const dispatch = useDispatch()

    const { data: brands } = useGetBrandsQuery()
    console.log(brands);


    return (
        <div className='bg-[white] xl:rounded-[30px]'>
            <div className="xl:container w-[98%]  m-auto">
                <div className='xl:py-[35px] w:py-[20px]'>
                    <SwiperAutoplay />
                    <div className='flex 2xl:gap-[26px] xl:gap-[8px] flex-wrap mt-[10px]'>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img} alt="" /> </div>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img2} alt="" /> </div>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] w:mt-[10px] lg:mt-[0]  flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img} alt="" /> </div>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] w:mt-[10px] lg:mt-[0]  flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img2} alt="" /> </div>
                    </div>
                    <div className=''>
                        <p className='text-[30px] font-bold'>Хиты продаж</p>
                        <div className='flex flex-wrap justify-between'>
                            <div className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
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
                            <div className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
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
                            <div className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
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
                            <div className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
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
                            <div className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
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
                            <div className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
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

                            {
                                data.length > 0 && (
                                    data.map((elem) => {
                                        return (
                                            <div key={elem.id} className='hoverCard xl:w-[20%] lg:w-[25%] md:w-[30%] sm:w-[48%]'>
                                                <div className='bg-[white] py-[5px] rounded-[10px] md:hover:shadow-xl'>
                                                    <Link to={"/aboutProduct"}> <div className='w-[195px]  h-[25vh] m-auto pt-[10px]'> <img className='hoverCard w-[100%] h-[100%] rounded-[7%]' src={`http://localhost:3000/${elem.media[0].src}`} alt="" /> </div> </Link>
                                                    <div className='xl:w-[84%] lg:w-[80%] md:w-[95%]  m-auto'>
                                                        <span className='font-bold text-[24px]'> {elem.price} ₽ </span> {elem.discount && (<span className='line-through text-[#5d5d5d]'> {elem.discount} ₽ </span>)}
                                                        <h1>
                                                            <span>Best Style</span> / <span className=' text-[#5d5d5d] text-[14px]'> {elem.name} </span>
                                                            
                                                        </h1>
                                                        <span className='text-[#5d5d5d]'> Доставка </span> / <span> послезавтра </span>
                                                    </div>
                                                    <div className='blockButton bg-[#ffffff]  m-auto pt-[10px] mb-[20px]'>
                                                        <div className='xl:w-[195px]  m-auto'>
                                                            <button onClick={() => {
                                                                dispatch(addProduct(elem))
                                                                console.log(elem);
                                                            }} className='bg-[#cb11ab] text-[white] px-[20px] py-[6px] rounded-[5px]'>В корзину</button>
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
                                        )
                                    })
                                )
                            }

                        </div>
                    </div>
                    <div className='flex 2xl:gap-[26px] xl:gap-[8px] flex-wrap my-[30px] mb-[10px]'>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img} alt="" /> </div>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img2} alt="" /> </div>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] w:mt-[10px] lg:mt-[0]  flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img} alt="" /> </div>
                        <div className='2xl:w-[280px] xl:w-[250px] md:w-[25%] w-[50%] w:mt-[10px] lg:mt-[0]  flex items-center'> <img className='w-[95%] xl:rounded-[15px] w:rounded-[10px] m-auto xl:hover:w-[100%] duration-500' src={img2} alt="" /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main