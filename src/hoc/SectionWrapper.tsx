import React, {FC} from "react";
import {styles} from "../styles";

export const SectionWrapper = (Component: FC<any>, idName: string, styleClasses: string[] = []) =>
    function HOC(props: any) {
        return (
            <section className={`${styles.paddingX} py-20 w-full mx-auto ${styleClasses.join(' ')}`}>
                <span className="hash-span" id={idName}>&nbsp;</span>
                <Component {...props}/>
            </section>
        )
    }


export default SectionWrapper
