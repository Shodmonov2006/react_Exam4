import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
        <div className='bg'>
            <Accordion>
                <AccordionSummary
                    className='bg text-[white]'
                    expandIcon={<ExpandMoreIcon className='text-[grey]' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='text-[white]'> Покупателям </Typography>
                </AccordionSummary>
                <AccordionDetails className='bg'>
                    <Typography className='text-[white]'>
                        <ul>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> Как сделать заказ </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Способы оплаты </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Доставка </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Возврат товара </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Возврат денежных средств </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Правила продажи </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Правила пользования торговой площадкой </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Вопросы и ответы </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className='bg text-[white]'
                    expandIcon={<ExpandMoreIcon className='text-[grey]' />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='text-[white]'>Партнерам</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg'>
                    <Typography className='text-[white]'>
                        <ul>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> Продавайте на Wildberries </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Курьерам </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Перевозчикам </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Партнерский пункт выдачи </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Франшизный пункт выдачи </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className='bg text-[white]'
                    expandIcon={<ExpandMoreIcon className='text-[grey]' />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className='text-[white]'>Наши проекты</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg'>
                    <Typography className='text-[white]'>
                        <ul>

                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> WB Guru </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Трудоустройство </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Цифровые товары </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className='bg text-[white]'
                    expandIcon={<ExpandMoreIcon className='text-[grey]' />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography className='text-[white]'>Компания</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg'>
                    <Typography className='text-[white]'>
                        <ul>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> О нас </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Реквизиты </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Пресс-центр </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Контакты </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Bug Bounty </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> WB.Tech </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className='bg text-[white]'
                    expandIcon={<ExpandMoreIcon className='text-[grey]' />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography className='text-[white]'>Мы в соцсетях</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg'>
                    <Typography className='text-[white]'>
                        <ul>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[10px]'> ВКонтакте </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Одноклассники </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> YouTube </li>
                            <li className='text-[#b6b6b6] text-[18px] hover:text-[white] cursor-pointer mt-[5px]'> Телеграм </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}