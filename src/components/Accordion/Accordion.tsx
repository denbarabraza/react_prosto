import React from "react";

export type ItemsPropsType={
    id:number
    name:string
    value:string
}
export type AccordionPropsType = {
    titleValue: string
    /**
     * if collapsed===false => Body
     */
    collapsed: boolean
    onChange: () => void
    items: ItemsPropsType[]
    changeTitle:(value:string)=>void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed &&
                <AccordionBody
                items={props.items}
                changeTitle={props.changeTitle}
                />}
            {/*//если true, то body не отрисуется, значит свернут*/}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTittle rendering...")
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType={
    items: ItemsPropsType[]
    changeTitle:(value:string)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering...")

    const onClickTitleChangeHandler=(value:string)=>{
        props.changeTitle(value)
    }

    return (
        <ul>
            {props.items.map((e)=>{
                return(
                    <li key={e.id} onClick={()=>onClickTitleChangeHandler(e.name)}>{e.name}</li>
                )
            })}
        </ul>
    )
}

