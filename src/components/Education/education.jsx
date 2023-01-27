import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SberUniver } from './Sberuniver/sberuniver';
import { Dubna } from './Dubna/dubna';
import { Selfeducation } from './selfeducation/selfeducation';
import './education.css'
import { Technick } from './Technick/technick';

export default function Education() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <h1 className='flex_column'>
                Образование
            </h1>
            <div style={{ alignSelf: 'center', maxWidth: '90%', margin: '0 5%' }}
            >
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <h5 className='education__accordion__header'>
                            1998г.
                        </h5>
                        
                        <h5  className='education__accordion__header'>
                            Среднее образование
                        </h5>


                    </AccordionSummary>
                    <AccordionDetails>
                        <Technick />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <h5 className='education__accordion__header'>
                            2006г.
                        </h5>
                        <h5 className='education__accordion__header'>
                            Высшее образование
                        </h5>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Dubna />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <h5 className='education__accordion__header'>
                            2022г.
                        </h5>
                        <h5 className='education__accordion__header'>
                            Профессиональное образование
                        </h5>

                    </AccordionSummary>
                    <AccordionDetails>

                        <SberUniver />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >

                        <h5 className='education__accordion__header'>Самообразование</h5>
                        <h5 className='education__accordion__header'>
                            Книги и прочее
                        </h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Selfeducation />
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}