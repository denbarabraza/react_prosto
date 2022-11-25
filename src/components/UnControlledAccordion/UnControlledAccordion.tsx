import React, {useReducer} from "react";
import {unControlledAccordionAC, unControlledAccordionReducer} from "../../stories/redux/unControlledAccordionReducer";

type AccordionPropsType = {
    titleValue: string;
}

export function UnControlledAccordion(props: AccordionPropsType) {

    //const [toggle, setToggle]=useState(false)
    const [toggle, dispatch]=useReducer(unControlledAccordionReducer,false)

    const onClickToggleHandler=()=>dispatch(unControlledAccordionAC())

      return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickToggleHandler}/>
            { !toggle && <AccordionBody/>}
            {/*//если true, то body не отрисуется, значит свернут*/}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string;
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTittle rendering...")
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering...")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

