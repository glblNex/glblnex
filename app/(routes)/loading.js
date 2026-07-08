import React from "react";
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <div className='grid grid-cols-1 place-items-center gap-12 p-48 text-center'>
            <Image
                src="SM-LightSVG.svg"
                alt="globalnex Icon Logo"
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '80px',
                }}
                width={30}
                height={30}
            />
            <Box sx={{ display: 'flex'}}>
                <CircularProgress color="inherit" />
            </Box>
        </div>
    )
}