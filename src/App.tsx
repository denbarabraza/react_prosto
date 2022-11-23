import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {RatingValueType, UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";
import Select from "./components/Select/Select";
import {SelectCustom} from "./components/SelectCustom/SelectCustom";


function App() {
    console.log("App rendering...")

    const items = [
        {id: 1, name: "Dima", value: "1"},
        {id: 2, name: "Den", value: '2'},
        {id: 3, name: "Yana", value: '3'},
        {id: 4, name: "Viktor", value: '4'},
        {id: 5, name: "Ivan", value: '5'}
    ]

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [rating, setRating] = useState<RatingValueType>(1)
    const [status, setStatus] = useState<boolean>(false)
    const [valueTitle, setvalueTitle] = useState('')
    const [valueUsers, setValueUsers] = useState('Users')
    const [valueSC, setValueSC] = useState('2')


    useEffect(() => {
        let getValueTitle = localStorage.getItem('Title value')
        if (getValueTitle) {
            setvalueTitle(JSON.parse(getValueTitle))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('Title value', JSON.stringify(valueTitle))
    }, [valueTitle])


    const changeCollapse = () => setCollapsed(!collapsed)
    const changeRating = (num: RatingValueType) => setRating(num)
    const changeStatus = (st: boolean) => setStatus(st)
    const changeTitle = (value: string) => setvalueTitle(value)
    const changeValueUsers = (value: string) => setValueUsers(value)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component!'}/>
            <PageTitle title={'Let\'s go'}/>
            <hr/>
            Article 1
            <UnControlledOnOff/>
            <UnControlledAccordion titleValue={'Menu 1'}/>
            <UnControlledRating/>
            <hr/>
            <Accordion
                titleValue={`Menu 1 ${valueTitle}`}
                collapsed={collapsed}
                onChange={changeCollapse}
                items={items}
                changeTitle={changeTitle}
            />
            <Rating
                value={rating}
                onClick={(num) => changeRating(num)}
            />
            <OnOff
                status={status}
                changeStatus={(st) => changeStatus(st)}
            />
            <hr/>
            <div>
                <h3>My Select:</h3>
                <Select
                    title={'Users'}
                    items={items}
                    valueUsers={valueUsers}
                    callback={changeValueUsers}
                />
            </div>

            <div>
                <h3>Custom Select:</h3>
                <SelectCustom
                    items={items}
                    valueSC={valueSC}
                    callback={setValueSC}
                />
            </div>
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
