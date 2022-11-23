import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemsPropsType} from "../Accordion/Accordion";
import s from './SelectCustom.module.css'

export type SelectCustomPropsType = {
    items: ItemsPropsType[]
    valueSC: string
    callback: (value: string) => void
}

export const SelectCustom: React.FC<SelectCustomPropsType> = (
    {
        items,
        valueSC,
        callback
    }) => {

    const [toggle, setToggle] = useState(true)
    const [hoveredValue, setHoveredValue] = useState(valueSC)

    useEffect(()=>{
        setHoveredValue(valueSC)
    },[valueSC])

    let selectItem = items.find(it => it.value === valueSC)
    let hoveredItem = items.find(it => it.value === hoveredValue)
    const onClickChangeToggle = () => {
        setToggle(!toggle)
    }

    const onChangeSelectValue = (selectValue: string) => {
        callback(selectValue)
        onClickChangeToggle()
    }
    const onChangeActiveSelect = (hoveredValue: string) => {
        setHoveredValue(hoveredValue)
    }
    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        if(e.key==='ArrowDown' || e.key==='ArrowUp'){
            for (let i=0; i<items.length; i++){
                if(items[i].value===hoveredValue){
                    const pretendentElement=e.key==='ArrowDown'
                        ? items[i+1]
                        :items[i-1]
                    if(pretendentElement){
                        callback(pretendentElement.value)
                        break;
                    }
                }
            }
        }

        if(e.key==='Enter' || e.key==='Enter'){
            setToggle(false)
        }
    }

    return (
        <div>
            {/*<select>
                <option value="1">JS</option>
                <option value="2">TS</option>
                <option value="3">React</option>
            </select>*/}

            <div
                onKeyUp={onKeyUp}
                className={s.select}
                tabIndex={0}
            >
                <span
                    className={s.main}
                    onClick={onClickChangeToggle}>
                    {selectItem && selectItem.name}
                </span>
                {toggle && <div className={s.selectItems}>{items.map(i => {
                    return (
                        <div
                            key={i.id}
                            onMouseEnter={() => onChangeActiveSelect(i.value)}
                            onClick={() => onChangeSelectValue(i.value)}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                        >
                            {i.name}
                        </div>
                    )
                })}</div>}
            </div>
        </div>
    );
};
