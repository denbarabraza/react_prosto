import React from "react";
import {RatingValueType} from "../UnControlledRating/UnControlledRating";

export type RatingPropsType = {
    /**
     * star value rating
     */
    value: RatingValueType
    onClick: (value:RatingValueType)=>void;
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering...")

    return (
        <div>
            <Star selected={props.value > 0} onClick={()=>props.onClick(1)}/>
            <Star selected={props.value > 1} onClick={()=>props.onClick(2)}/>
            <Star selected={props.value > 2} onClick={()=>props.onClick(3)}/>
            <Star selected={props.value > 3} onClick={()=>props.onClick(4)}/>
            <Star selected={props.value > 4} onClick={()=>props.onClick(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: ()=>void
}

const Star=(props: StarPropsType)=>{
    return(
        <span onClick={props.onClick}>
            {props.selected ? <b>star </b>:" star"}
        </span>
    )
}
