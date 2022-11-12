import React, {useState} from 'react';
import {OnOff, OnOFPropsType} from "../OnOff/OnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'component/OnOff',
    component: OnOff
}

const callback =(text: string)=> action(text)

const Template: Story<OnOFPropsType> = (args) => <OnOff {...args}/>

export const OnMode = Template.bind({})
OnMode.args = {
    status: true,
    changeStatus: callback('on')
}

export const OffMode = Template.bind({})
OffMode.args = {
    status: false,
    changeStatus: callback('off')
}


const TemplateBig: Story<OnOFPropsType> = (args) => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff {...args} status={on} changeStatus={setOn}/>
}
export const OnOffChange = TemplateBig.bind({})
OnOffChange.args = {}
