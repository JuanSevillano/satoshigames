import React, { FC } from 'react';

import logo from '../assets/logo.png';

const Spinner: FC<{}> = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center' >
            <figure className='mx-auto w-80 animate-ping'>
                <img src={logo} alt="Satoghis game logo" />
            </figure>
        </div>
    )
}

export default Spinner 