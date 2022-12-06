import React, {useCallback, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {RatingValueType} from "./components/UnControlledRating/UnControlledRating";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {SelectCustom} from "./components/SelectCustom/SelectCustom";


const items = [
    {id: 1, name: "Dima", value: "1"},
    {id: 2, name: "Den", value: '2'},
    {id: 3, name: "Yana", value: '3'},
    {id: 4, name: "Viktor", value: '4'},
    {id: 5, name: "Ivan", value: '5'}
]

function App() {
    console.log("App rendering...")

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [rating, setRating] = useState<RatingValueType>(1)
    const [status, setStatus] = useState<boolean>(false)
    const [valueTitle, setvalueTitle] = useState('')
    const [valueUsers, setValueUsers] = useState('Users')
    const [valueSC, setValueSC] = useState('2')

    /*useEffect(() => {
        let getValueTitle = localStorage.getItem('Title value')
        if (getValueTitle) {
            setvalueTitle(JSON.parse(getValueTitle))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('Title value', JSON.stringify(valueTitle))
    }, [valueTitle])*/

    const changeCollapse = useCallback(() => setCollapsed(!collapsed),[collapsed])
    const changeTitle = useCallback((value: string) => setvalueTitle(value),[])
    const changeValueUsers =useCallback( (value: string) => setValueUsers(value),[])

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component!'}/>
            <PageTitle title={'Let\'s go'}/>
            <hr/>
            {/*Article 1
            <UnControlledOnOff/>
            <UnControlledAccordion titleValue={'Menu 1'}/>
            <UnControlledRating/>*/}
            <hr/>
            <Accordion//+
                titleValue={`Menu 1 ${valueTitle}`}
                collapsed={collapsed}
                onChange={changeCollapse}
                items={items}
                changeTitle={changeTitle}
            />
            <Rating
                value={rating}
                onClick={ setRating}
            />
            <OnOff
                status={status}
                changeStatus={ setStatus}
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
