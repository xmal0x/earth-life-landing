import {feedbacks} from "../utils/constants";
import {adobe, dropbox, google, microsoft, paypal, quot, uber} from "../assets";
import {SectionWrapper} from "../hoc";

interface FeedbackCardProps {
    index: number,
    name: string,
    position: string,
    text: string,
    image: string
}

const FeedbackCard = ({index, position, text, image, name}: FeedbackCardProps) => {
    return (
        <div className="flex flex-col gap-10 max-w-[380px]">
            <img
                src={quot}
                alt="quot"
                className="h-[50px] w-[50px] opacity-40"
            />
            <p className="text-[18px] text-body">{text}</p>
            <div className="flex items-center">
                <img
                    src={image}
                    alt={name}
                    className="mr-4 h-[50px] w-[50px]"
                />
                <div>
                    <p className="text-heading font-black text-[20px]">{name}</p>
                    <p className="text-[14px] font-black text-body">{position}</p>
                </div>
            </div>

        </div>
    )
}

const Feedbacks = () => {
    return (
        <>
            <div className="flex max-w-7xl flex-row gap-10 mx-auto md:flex-nowrap flex-wrap justify-center">
                {feedbacks.map((feedback, index) => (
                    <FeedbackCard
                        key={index}
                        index={index}
                        {...feedback}
                    />
                ))}
            </div>
            <div className="lg:flex-row pt-20 flex flex-col justify-between max-w-6xl mx-auto mt-8 gap-10">
                <div className="lg:mx-0 lg:text-left mx-auto flex flex-col gap-6 max-w-md text-center">
                    <h4 className="text-[32px] font-black text-heading ">The Environment is All We Have In Common</h4>
                    <p className="text-[18px] font-bold text-body">Turning the ship around takes a lot of willpower and
                        ingenuity.</p>
                </div>

                <div className="flex max-w-md flex-wrap justify-between mx-auto h-[140px]">
                    <img src={adobe} alt="adobe" className="object-contain"/>
                    <img src={dropbox} alt="dropbox" className="object-contain"/>
                    <img src={google} alt="google" className="object-contain"/>
                    <img src={microsoft} alt="microsoft" className="object-contain"/>
                    <img src={paypal} alt="paypal" className="object-contain"/>
                    <img src={uber} alt="uber" className="object-contain"/>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(Feedbacks, 'feedbacks', ['bg-white'])
