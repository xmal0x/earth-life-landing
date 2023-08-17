import {styles} from '../styles';
import {envfacebook, envinstagram, environmental, envlinkedin, envtwitter} from '../assets';
import {addressLines, footerLinks} from '../utils/constants';
import {Button} from './UI';
import {ChangeEvent, FormEvent, useState} from 'react';

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setEmail(value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form submit:', email)
    }

    return (
        <footer className={`${styles.paddingX} w-full bg-primary`}>
            <div className='flex flex-col items-center pt-[60px] pb-[40px]'>
                <div
                    className='flex lg:flex-row flex-col max-w-7xl w-full justify-between lg:items-center items-start gap-10'>
                    <div className='flex flex-col'>
                        <img
                            src={environmental}
                            alt='environmental'
                            className='object-contain w-[220px] h-[18px]'
                        />
                        <div className='flex justify-between pt-[40px]'>
                            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                                <img
                                    src={envfacebook}
                                    alt='facebook'
                                    className='object-contain h-[30px] w-[30px]'
                                />
                            </a>
                            <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                                <img
                                    src={envlinkedin}
                                    alt='linkedin'
                                    className='object-contain h-[30px] w-[30px]'
                                />
                            </a>
                            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                                <img
                                    src={envtwitter}
                                    alt='twitter'
                                    className='object-contain h-[30px] w-[30px]'
                                />
                            </a>
                            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                                <img
                                    src={envinstagram}
                                    alt='instagram'
                                    className='object-contain h-[30px] w-[30px]'
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col md:w-[580px] w-full'>
                        <ul className='flex xl:flex-row flex-col list-none text-white justify-between gap-6'>
                            {footerLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`hover:text-tertiary cursor-pointer`}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                        <h4 className='text-white text-[24px] font-black mt-[60px] mb-[20px]'>Join our Cause, Become a
                            Member</h4>
                        <form
                            className='flex md:flex-row flex-col w-full gap-4'
                            onSubmit={handleSubmit}
                        >
                            <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                placeholder='Enter your email address*'
                                required
                                className='bg-black text-white bg-opacity-20 py-2 px-6 outline-none placeholder:text-white w-full'
                            />
                            <Button text='Subscribe' type='submit' styleClass={['md:max-w-fit']}/>
                        </form>
                    </div>
                    <div className='text-white flex flex-col gap-1 max-w-[250px]'>
                        {addressLines.map((line, index) => (
                            <p key={index} className='text-[14px]'>{line}</p>
                        ))}
                    </div>
                </div>
                <hr className={`w-full max-w-7xl flex h-px mt-16 mb-6 bg-[#5b9289] border-0`}/>
                <div className='flex justify-between w-full max-w-7xl text-white gap-10'>
                    <p className='text-[14px]'>Copyright © 2022 MakeEarthBetter All Rights Reserved.</p>
                    <div className='flex'>
                        <p className='text-[14px]'>Privacy Policy</p>
                        <span className='text-[14px]'>&nbsp; | &nbsp;</span>
                        <p className='text-[14px]'>Terms & Condition</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
