import React, {useState} from 'react';
import {RatingValueType} from "../UnControlledRating/UnControlledRating";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import Select, {SelectPropsType} from "./Select";

export default {
    title: 'component/Select stories',
    component: Select,
}

const callback = action('star clicked id:')

const TemplateBig: Story<SelectPropsType> = (args: SelectPropsType) => {
    const [valueUsers, setValueUsers]=useState('Users')

    return <Select {...args}  valueUsers={valueUsers} callback={setValueUsers}/>;
}
export const SelectModeChanding = TemplateBig.bind({});
SelectModeChanding.args = {
    title:'Stories Select',
    items:[
        {id:1, name:"Dima", value:"1"},
        {id:2, name:"Den", value:'2'},
        {id:3, name:"Yana", value:'3'},
        {id:4, name:"Viktor", value:'4'},
        {id:5, name:"Ivan", value:'5'},
        {id:6, name:"IvanViktor", value:'6'},
        {id:7, name:"IvanDen", value:'7'},
        {id:8, name:"YanaDen", value:'8'}
    ],
    callback:callback,
}

