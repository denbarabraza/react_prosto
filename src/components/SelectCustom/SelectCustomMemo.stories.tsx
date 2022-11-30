import React, {memo, useCallback, useMemo, useState} from 'react';
import {SelectCustom} from "./SelectCustom";
import s from './SelectCustom.module.css'
import {ItemsPropsType} from "../Accordion/Accordion";


export default {
    title: 'component/Select Custom stories with memo',
    component: SelectCustom,
}

type UserType = {
    value: ItemsPropsType[]
}

const User = memo( (props: UserType) => {
    console.log('User active')
    return (
        <div>
            {props.value.map(e => <div>{e.name} value: {e.value}</div>)}
        </div>
    )
})

export const SelectCustomMemoStories = () => {

    const [items, setItems] = useState([
        {id: 1, name: "Dima", value: "1"},
        {id: 2, name: "Denis", value: '2'},
        {id: 3, name: "Yana", value: '3'},
        {id: 4, name: "Viktor", value: '4'},
        {id: 5, name: "Ivan", value: '5'}
    ])
    const [counter, setCounter] = useState(0)

    let valueWithA = useMemo(()=>{
        return items.filter(e => e.name.toLowerCase().indexOf('a') > -1)
    },[items])
    let valueUp =useMemo(()=>{
        return items.filter(e => e.value>'3')
    },[items])
    let valueLength =useMemo(()=>{
        return  items.filter(e => e.name.length>4)
    },[items])

     const onClickAdd=useCallback(()=>{
        let newItem:ItemsPropsType={id: 11, name: "Kvadracopter", value: "11"}
        setItems([...items,newItem])
    },[items])

    return (
        <div>
            <div className={s.select}>
                <User value={valueWithA}/>
                <User value={valueUp}/>
                <User value={valueLength}/>
            </div>
            <hr/>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={onClickAdd}>Add Item</button>
        </div>
    );
};


