import {ChangeEvent, FormEvent, useState} from 'react';
import {poster} from '../assets';
import {Button} from './UI';
import {SectionWrapper} from '../hoc';
import {motion} from 'framer-motion'
import {slideIn} from "../utils/animations";

const SignUp = () => {
    const [form, setForm] = useState({
        email: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setForm({email: value})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('form submit:', form)
        setForm({email: ''})
    }

    return (
        <div className='max-w-7xl mx-auto gap-10 flex lg:flex-row flex-col items-center justify-center'>
            <motion.div
                variants={slideIn('left', 'spring', 0, 1)}
                className='flex flex-col max-w-xl'>
                <h2 className='text-heading text-[42px] font-black mb-[16px]'>Sign Up For Environment News &
                    Alerts</h2>
                <p className='text-body text-[18px] mb-[16px]'>We are bringing worldwide concerns and solutions
                    fresh to your emails. As opposed to what others
                    do, we make our contributions timely.</p>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4 max-w-md'
                >
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Enter your email address*'
                        required
                        className='bg-white py-2 px-6 outline-none border-tertiary border placeholder:text-primary'
                    />
                    <Button text='Submit' type='submit' backgroundColor='bg-primary' borderColor='border-primary'
                            styleClass={['max-w-fit']}/>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('down', 'spring', 0, 1)}
                className='lg:w-1/2 w-full'>
                <img
                    src={poster}
                    alt='poster'
                    className='rounded-3xl mx-auto'
                />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(SignUp, 'signup', ['bg-white-100'])
