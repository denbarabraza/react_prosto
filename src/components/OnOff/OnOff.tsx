import React from "react";

type OnOFPropsType = {
    status: boolean
    changeStatus: (st:boolean) => void
}

export const OnOff: React.FC<OnOFPropsType> = (props) => {

    const OnStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        //если "оn"
        backgroundColor: props.status ? 'green' : 'white',
        display: 'inline-block',
        margin: '1px'
    }
    const OffStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.status ? 'white' : 'red',
        display: 'inline-block',
        margin: '1px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '30px',
        backgroundColor: props.status ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '10px'
    }

    return (
        <div>
            <div style={OnStyle} onClick={() => {
                props.changeStatus(true)
            }}>On
            </div>
            <div style={OffStyle} onClick={() => {
                props.changeStatus(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}