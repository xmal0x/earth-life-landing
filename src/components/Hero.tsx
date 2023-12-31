import {styles} from '../styles';
import {Button} from './UI';

const Hero = () => {
    return (
        <section className='relative w-full lg:min-h-[780px] min-h-[650px] mx-auto'>
            <div
                className={`${styles.paddingX} absolute inset-0 md:top-[120px] top-[80px] max-w-7xl flex flex-col items-start gap-5 justify-center mx-auto w-full`}>
                <div className='max-w-3xl'>
                    <h2 className={`${styles.heroSubHeadText} text-white`}>Help <span className={`${styles.heroSubHeadText} text-secondary`}>Today</span> for</h2>
                    <h1 className={`${styles.heroHeadText} text-white`}>Future <span className={`${styles.heroHeadText} text-tertiary`}>Generations</span></h1>
                    <p className={`${styles.heroSubText}`}>People all over the world must understand that only we can help.
                        Earth Let's all come together to deal with the unprecedented threats to life on Earth.</p>
                </div>
                <div className='flex gap-4 md:flex-row flex-col md:w-auto w-full'>
                    <Button text='Donate Now' backgroundColor='bg-primary' borderColor='border-primary'/>
                    <Button text='Contact Us' />
                </div>
            </div>

        </section>
    )
}

export default Hero
