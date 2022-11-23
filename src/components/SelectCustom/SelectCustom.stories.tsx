import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {SelectCustom, SelectCustomPropsType} from "./SelectCustom";

export default {
    title: 'component/Select Custom stories',
    component: SelectCustom,
}

const callback = action('changed')

const TemplateBig: Story<SelectCustomPropsType> = (args) => {
    const [valueSC, setValueSC] = useState('2')

    return <SelectCustom {...args}
                         valueSC={valueSC}
                         callback={setValueSC}/>;
}
export const SelectModeChanding = TemplateBig.bind({});
SelectModeChanding.args = {
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

