import {results} from "../utils/constants";
import {SectionWrapper} from "../hoc";

interface ResultCardProps {
    description: string,
    icon: string,
    title: string,
    index: number
}

const ResultCard = ({description, icon, title, index}: ResultCardProps) => {
    return (
        <div className="flex flex-col justify-center items-center min-w-[220px]">
            <img
                src={icon}
                alt={description}
                className="h-[145px] w-[145px] object-contain"
            />
            <p className="text-[76px] text-primary font-black">{title}</p>
            <p className="text-[24px] text-heading font-bold">{description}</p>
        </div>
    )
}

const Results = () => {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center max-w-6xl gap-10 mx-auto">
            {results.map((result, index) => (
                <ResultCard
                    key={`${result.description}-${index}`}
                    index={index}
                    {...result}
                />
            ))}
        </div>
    )
}

export default SectionWrapper(Results, 'results', ['bg-white'])
