import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {RatingValueType, UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";



function App() {
    console.log("App rendering...")

    const [collapsed, setCollapsed]=useState<boolean>(false)
    const [rating, setRating]=useState<RatingValueType>(1)
    const [status, setStatus]=useState<boolean>(false)

    const changeCollapse=()=>setCollapsed(!collapsed)
    const changeRating=(num:RatingValueType)=>setRating(num)
    const changeStatus=(st:boolean)=>setStatus(st)

    return (
        <div>
            <PageTitle title={'This is APP component!'}/>
            <PageTitle title={'Let\'s go'}/>
            Article 1
            <UnControlledOnOff/>
            <UnControlledAccordion titleValue={'Menu 1'}/>
            <UnControlledRating/>

            <Accordion
                titleValue={'Menu 1'}
                collapsed={collapsed}
                onChange={changeCollapse}
            />
            <Rating
                value={rating}
                onClick={(num)=>changeRating(num)}
            />
            <OnOff
                status={status}
                changeStatus={(st)=>changeStatus(st)}
            />
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTittle rendering...")
    return (
        <h1>--- {props.title} ---</h1>
    )
}

export default App;