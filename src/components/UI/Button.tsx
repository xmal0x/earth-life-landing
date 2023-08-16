interface ButtonProps {
    text: string,
    backgroundColor?: string,
    borderColor?: string,
    type?: "button" | "submit" | "reset",
    styleClass?: string[],
    onClick?: () => void

}

const Button = ({
                    text,
                    backgroundColor = 'bg-secondary',
                    borderColor = 'border-secondary',
                    type = 'button',
                    styleClass = [],
                    onClick = () => {
                        console.log('clicked')
                    }
                }: ButtonProps) =>
    (
        <button
            type={type}
            className={`${backgroundColor} ${borderColor} text-white min-w-[140px] border rounded-md px-4 py-3 hover:bg-opacity-60 ${styleClass?.join(' ')}`}
            onClick={onClick}
        >{text}</button>
    )

export default Button
