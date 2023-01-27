// import { Modal } from '@mui/material'
// import { Modal } from '@mui/material';
import React, { useState } from 'react'
// import BModal from '../../Modal/modal'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../education.css'



export const Dubna = () => {

    const [imgSrc, setImgSrc] = useState()
    const [sertText, setSertText] = useState('May')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function getImgSrc(e) {
        setImgSrc(e.target.parentElement.children[1].src)
        setSertText(e.target.parentElement.children[0].innerHTML)
        handleOpen();
    }

    return (
        <>
            <div className='education__list flex_column'>

                <h5 className='education__accordion__header_text'>
                    Университет "Природы общества и человека Дубна"
                </h5>

                <div className='flex_row education__block' onClick={() => handleOpen()}>
                    <h4 className='education_text' onClick={(e) => getImgSrc(e)}>Диплом о высшем образовании</h4>
                    <img src='./img/diplom/menedger.jpg' alt='Сертификат HTML и CSS' className='education__sertificate' onClick={(e) => getImgSrc(e)} />
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='flex_column modal__box'>

                    <img src={imgSrc} alt='img' style={{ width: '100%' }} onClick={() => handleClose()} />
                    <h2 className='modal__box_text'>{sertText}</h2>


                </Box>
            </Modal>
        </>
    )
}