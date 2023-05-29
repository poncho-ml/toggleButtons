"use client"

import Image from 'next/image'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';


export default function Home() {
    const [alignment, setAlignment] = useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="">
                <ToggleButtonGroup
                    color='primary'
                    value={alignment}
                    onChange={handleChange}
                    exclusive
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned" sx={{ display: 'flex', flexDirection: 'column', maxWidth: '250px', gap: '8px', justifyContent:'start' }}>
                        <div className='flex gap-2 items-center w-full'>
                            <LunchDiningIcon className={`${alignment === 'left' ? 'bg-sky-700':'bg-gray-500' } rounded-full text-gray-200 p-1`} />
                            <p className='font-bold'>Title A</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='normal-case text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                        </div>
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="left aligned" sx={{ display: 'flex', flexDirection: 'column', maxWidth: '250px', gap: '8px', justifyContent:'start'}}>
                        <div className='flex gap-2 items-center w-full'>
                            <LocationOnIcon className={`${alignment === 'right' ? 'bg-sky-700':'bg-gray-500' } rounded-full text-gray-200 p-1`} />
                            <p className='font-bold'>Title B</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='normal-case text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </ToggleButton>
                    <ToggleButton disabled value="dis" aria-label="left aligned" sx={{ display: 'flex', flexDirection: 'column', maxWidth:'250px', gap: '8px', justifyContent:'start' }}>
                        <div className='flex gap-2 items-center w-full'>
                            <LocationOnIcon className='bg-gray-400 rounded-full text-gray-200 p-1' />
                            <p className='font-bold'>Disabled Variant</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='normal-case text-left'>This button is disabled</p>
                        </div>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </main>
    )
}
