import React, {ChangeEvent, memo, useState} from 'react';
import {ItemsPropsType} from "../Accordion/Accordion";

export type SelectPropsType = {
    title:string
    items: ItemsPropsType[]
    valueUsers:string
    callback:(value:string)=>void
}

export const Select =memo((props: SelectPropsType) => {
    console.log('My select rendering')
    const [editMode, setEditMode] = useState(false)
    const onDoubleClickHandler=()=>{
        setEditMode(!editMode)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        editMode && props.callback(e.currentTarget.value)
    }

    return (
        editMode ?
            <select
                onBlur={onDoubleClickHandler}
                onChange={onChangeHandler}
            >
                {props.items.map(e => {
                    return (
                        <option
                            key={e.id}
                        >
                            {e.name}
                        </option>)
                })}
            </select>
            :
            <span onDoubleClick={onDoubleClickHandler}>
                {props.valueUsers}
            </span>
    )
        ;
});
