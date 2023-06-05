import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h1 className='text-[#D74C20] font-bold'>Менеджер по продажам</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <h1 className='text-[#333333] font-bold'>Должностные обязанности:</h1>
              <div className='flex gap-[20px] mt-[20px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Продажи компьютерного оборудования</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Развитие, поддержание отношений с новыми и существующими клиентами компании</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Проведение переговоров и подготовка коммерческих предложений</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Выполнение плана по продажам</p>
              </div>
            </div>
            <div className='mt-[40px]'>
              <h1 className='text-[#333333] font-bold'>Должностные обязанности:</h1>
              <div className='flex gap-[20px] mt-[20px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Продажи компьютерного оборудования</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Развитие, поддержание отношений с новыми и существующими клиентами компании</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Проведение переговоров и подготовка коммерческих предложений</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Выполнение плана по продажам</p>
              </div>
            </div>
            <div className='mt-[40px]'>
              <h1 className='text-[#333333] font-bold'>Должностные обязанности:</h1>
              <div className='flex gap-[20px] mt-[20px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Продажи компьютерного оборудования</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Развитие, поддержание отношений с новыми и существующими клиентами компании</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Проведение переговоров и подготовка коммерческих предложений</p>
              </div>
              <div className='flex gap-[20px] mt-[10px]'>
                <input type="checkbox" />
                <p className='text-[#868686]'>Выполнение плана по продажам</p>
              </div>
            </div>
            <div className='mt-[50px]'>
              <button className='bg-[#D74C20] text-[white] px-[20px] py-[7px] rounded-[5px]'>Отправить Резюме</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1 className='text-[#D74C20] font-bold'>Менеджер по продажам</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hello. My Name is Olimkhuja
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='dark:text-[white]'>Полная информация о работе и заработной плате по тел. +375 44 767 60 76</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}