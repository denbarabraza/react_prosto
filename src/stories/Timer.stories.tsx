import React, {useEffect, useState} from 'react';


export default {
    title: 'component/Example Timer stories',
}

export const ExampleTimerStorise = () => {

    let [time, setTime] = useState<Date>(new Date())
    const stringTime = time.toLocaleTimeString("ru-RU")

    useEffect(()=>{
        console.log('time active')
        setInterval(()=>setTime(new Date()),1000)
    },[])

    return (
        <div>
            <div>Time is now {stringTime}</div>
        </div>
    )
}

