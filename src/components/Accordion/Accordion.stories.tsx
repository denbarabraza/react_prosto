import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'component/Accordion',
    component: Accordion
}

const callback = action('Accordion rendering')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const emptyAccordion = Template.bind({})
emptyAccordion.args = {
    titleValue: 'Menu 1',
    collapsed: true,
    onChange: callback
}

const TemplateBig: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion
        {...args}
        collapsed={collapsed}
        onChange={() => setCollapsed(!collapsed)}/>
}
export const AccordionModeChang = TemplateBig.bind({})
AccordionModeChang.args = {
    titleValue: "Menu 2"
}


