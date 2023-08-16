import {styles} from "../styles";
import {programs} from "../utils/constants";
import {SectionWrapper} from "../hoc";

interface ProgramCardProps {
    index: number,
    title: string,
    text: string,
    icon: string
}

const ProgramCard = ({index, title, text, icon}: ProgramCardProps) => {
    return (
        <div
            className="transition-shadow duration-300 hover:shadow-xl p-6 lg:max-w-[400px] md:max-w-[340px] md:items-start items-center md:text-left text-center flex flex-col max-h-[310px] gap-2 cursor-pointer rounded-md">
            <img
                src={icon}
                alt={title}
                className="h-[80px] w-[80px]"
            />
            <h4 className="xs:text-[24px] text-[20px] font-black">{title}</h4>
            <p className="xs:text-[18px] text-[14px] text-body">{text}</p>
        </div>
    )
}

const Programs = () => {
    return (
        <div className="flex flex-col items-center">
            <h3 className={`${styles.sectionHeadText} max-w-lg text-center`}>Our Continued Project Assistance
                Programs</h3>
            <div className="flex flex-row flex-wrap lg:gap-10 gap-6 justify-center max-w-7xl mt-8">
                {programs.map((program, index) => (
                    <ProgramCard
                        key={`${program.title}-${index}`}
                        index={index}
                        {...program}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Programs, 'programs', ['bg-white-100'])
