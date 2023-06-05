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
          <Typography >Могу ли я купить виртуальный выделенный сервер (VDS) в #CloudMTS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Какие существуют способы подключения к Elastic Cloud извне?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Можно ли самостоятельно управлять ресурсами Elastic Cloud: создавать виртуальные машины, настраивать сети, управлять маршрутизацией и т.д.?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>При необходимости реализации Disaster recovery plan, возможно ли разнести части размещаемого в Elastic Cloud ИТ-сервиса между двумя территориально разнесенными площадками?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Возможна миграция в Elastic Cloud c гипервизоров MS Hyper-V, XenServer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          В основе Elastic cloud используется виртуализация VMware Миграция на VMware возможна не только с других систем виртуализации (MS Hyper-V, XenServer), но и с «железных» серверов без виртуализации. Это более сложный и длительный процесс, чем миграция в рамках одной системы виртуализации. Но у #CloudМТS есть опыт проведения миграции клиентских систем c физических серверов без виртуализации и инфраструктуры Hyper-V.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}