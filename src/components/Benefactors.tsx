import {styles} from '../styles';
import {benefactors} from '../utils/constants';
import {SectionWrapper} from '../hoc';
import {instagram, linkedin, twitter} from '../assets';

interface BenefactorCardProps {
    image: string,
    name: string,
    position: string,
    instagramLink: string,
    linkedinLink: string,
    twitterLink: string
}

const BenefactorCard = ({image, position, name, instagramLink, linkedinLink, twitterLink}: BenefactorCardProps) => {
    return (
        <div>
            <div className='relative'>
                <img
                    src={image}
                    alt='name'
                    className='lg:w-[380px] lg:h-[340px]'
                />
                <div className='transition duration-500 ease-in-out opacity-0 hover:opacity-100'>
                    <div className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-30'></div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5'>
                        <a href={instagramLink} target='_blank' rel='noreferrer'>
                            <img
                                src={instagram}
                                alt='instagram'
                                className='h-[35px] w-[35px] cursor-pointer'
                            />
                        </a>
                        <a href={linkedinLink} target='_blank' rel='noreferrer'>
                            <img
                                src={linkedin}
                                alt='linkedin'
                                className='h-[35px] w-[35px] cursor-pointer'
                            />
                        </a>
                        <a href={twitterLink} target='_blank' rel='noreferrer'>
                            <img
                                src={twitter}
                                alt='twitter'
                                className='h-[35px] w-[35px] cursor-pointer'
                            />
                        </a>
                    </div>
                </div>

            </div>
            <p className='text-[24px] font-black text-heading my-1'>{name}</p>
            <p className='text-[18px] font-bold text-body'>{position}</p>
        </div>
    )
}

const Benefactors = () => {
    return (
        <div className='flex flex-col items-center'>
            <h3 className={`${styles.sectionHeadText} max-w-lg text-center mb-16`}>Our Benefactors</h3>
            <div className='max-w-7xl flex justify-center gap-8 flex-wrap'>
                {benefactors.map((benefactor, index) => (
                    <BenefactorCard
                        key={index}
                        {...benefactor}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Benefactors, 'benefactors', ['bg-white-100'])
