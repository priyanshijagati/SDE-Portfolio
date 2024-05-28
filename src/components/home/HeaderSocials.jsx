import React from 'react';
import { FaGithub,  FaLinkedinIn, FaTwitter, FaDiscord } from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/priyanshijagati' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://discord.com/channels/@me' className='home__social-link' target='_blank' rel='noreferrer'>
            <FaDiscord />
            </a>

            <a href='https://www.linkedin.com/in/priyanshi-jagati-776888233/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>


            <a href='https://x.com/PriyanshiJagati' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
