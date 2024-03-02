import React from 'react'

const Login = () => {
    return (
        <div className='bg-[white] xl:rounded-[30px]'>
            <div className="lg:container w-[90%] m-auto">
                <div className='py-[60px]'>
                    <div className='bg-[white] py-[45px] shadow-xl lg:w-[60%]  xl:w-[40%] m-auto rounded-[30px]'>
                        <p className='font-bold text-[24px] text-center'> Войти или создать профиль </p>
                        <form className='m-auto w-[70%] mt-[30px]'>
                            <input placeholder='+7 000 000-00-00' className='border rounded-[10px] py-[12px] pl-[20px] text-[#681980]  focus:outline-[#681980] focus:bg-[white] duration-[1s] w-[100%] bg-[#e4e4e4]' type="text" />
                        </form>
                        <div className='w-[70%] m-auto my-[25px]'>
                            <button className='bg-[#4e1392] hover:bg-[#5d18ac] text-[white] py-[12px] rounded-[10px] w-[100%]'> Получить код </button>
                        </div>
                        <div className='flex gap-[10px] w-[70%] m-auto'>
                            <input className='w-[20px]' type="checkbox" name="" id="" />
                            <p>Чужой компютер</p>
                        </div>
                        <div className='w-[70%] m-auto mt-[25px]'>
                            <p>Соглашаюсь с правилами пользования торговой площадкой и возврата</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login