import React, {useCallback, useEffect, useState} from 'react';
import {Benefactors, Feedbacks, Footer, Hero, Navbar, Programs, Results, SignUp,} from './components';
import {scrollTop} from './utils/utils';
import {motion, useScroll} from 'framer-motion'

function App() {
    const [showTopBtn, setShowTopBtn] = useState(false)

    const handleScroll = useCallback(() => {
        if (window.scrollY > 400) {
            setShowTopBtn(true)
        } else {
            setShowTopBtn(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    const {scrollYProgress} = useScroll();

    const handleClick = () => {
        scrollTop()
    }

    return (
        <div className='relative z-0'>
            <motion.div
                className="progress-bar"
                style={{scaleX: scrollYProgress}}
            />

            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar/>
                <Hero/>
            </div>

            <Programs/>
            <Results/>
            <Benefactors/>
            <Feedbacks/>
            <SignUp/>
            <Footer/>


            <div
                className={`transition duration-500 ${showTopBtn ? 'opacity-100' : 'opacity-0'}  hover:bg-opacity-80 border border-secondary 
                fixed right-[30px] bottom-[60px] text-white px-[19px] pb-[4px] bg-secondary 
                rounded-full text-[40px] -rotate-90 cursor-pointer`}
                onClick={handleClick}>{'>'}</div>
        </div>
    );
}

export default App;
