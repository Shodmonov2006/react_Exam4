import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Basket = () => {
    // const products = useSelector(({ basket }) => basket.products)
    // console.log(products);
    // const products = useSelector(({ basket }) => basket.products);
    const total = useSelector(({basket}) => basket.total)
    console.log(total);

    return (
        <div className='bg-[white] xl:rounded-[30px]'>
            <div className="container">
                <div className='w:py-[180px] lg:py-[80px]'>
                    <p className='text-[24px] font-bold text-center xl:w-[60%] m-auto'>В корзине пока пусто</p>
                    <p className='text-center my-[15px] xl:w-[35%] text-[grey] m-auto'>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</p>
                    <div className='lg:w-[25%] xl:w-[17%] m-auto'>
                        <Link to={"/"}>
                            <button className='w-[100%] bg-[#cb11ab] text-[white] rounded-[10px] py-[12px]'> Перейти на главную </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket 