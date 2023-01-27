import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const Selfeducation = () => {

    const [imgSrc, setImgSrc] = useState()
    // const [sertText, setSertText] = useState('May')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function getImgSrc(e) {
        setImgSrc(e.target.src)
        handleOpen();
    }

    return (
        <>
            <div className='flex_row' 
            // style={{justifyContent: 'space-around'}}
            >
                <img src='./img/sertificate/mimohtml.jpg' alt='img' className='selfeducation_img'
                 onClick={(e) => getImgSrc(e)}
                />
                <img src='./img/sertificate/mimosql.jpg' alt='img' className='selfeducation_img'
                 onClick={(e) => getImgSrc(e)} 
                />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='flex_column modal__box_book'>

                    <img src={imgSrc} alt='Сертификат' style={{ height: '100%' }} onClick={() => handleClose()} />
                    {/* <h2>{sertText}</h2> */}


                </Box>
            </Modal>
        </>
    )
}
