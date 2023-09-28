import React, {FC} from 'react';
import {styles} from '../styles';
import {motion} from 'framer-motion'
import {container} from '../utils/animations';

//fadeIn('left', 'spring', 0, 10)

export const SectionWrapper = (Component: FC<any>, idName: string, styleClasses: string[] = []) =>
    function HOC(props: any) {
        return (
            <motion.section
                variants={container}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
                className={`${styles.paddingX} md:py-20 py-10 w-full mx-auto ${styleClasses.join(' ')}`}>
                <span className='hash-span' id={idName}>&nbsp;</span>
                <Component {...props}/>
            </motion.section>
        )
    }


export default SectionWrapper
