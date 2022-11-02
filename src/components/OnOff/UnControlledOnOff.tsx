import {useState} from "react";

export const UnControlledOnOff = () => {

    const [on, setOn]=useState(true)

    const OnStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        //если "оn"
        backgroundColor: on ? 'green': 'white',
        display: 'inline-block',
        margin:'1px'
    }
    const OffStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'white': 'red',
        display: 'inline-block',
        margin:'1px'
    }
    const indicatorStyle={
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '30px',
        backgroundColor: on ? 'green': 'red',
        display: 'inline-block',
        marginLeft: '10px'
    }

    const onClickHandler=(value:boolean)=>{
        setOn(value)
    }

    return (
        <div>
            <div style={OnStyle} onClick={ ()=>{onClickHandler(true)} }>On</div>
            <div style={OffStyle} onClick={ ()=>{onClickHandler(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}