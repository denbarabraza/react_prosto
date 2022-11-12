import React, {useState} from 'react';
import {Rating, RatingPropsType} from "./Rating";
import {RatingValueType} from "../UnControlledRating/UnControlledRating";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'component/Rating stories',
    component: Rating,
}

const callback = action('star clicked id:')

const Template: Story<RatingPropsType> = (args: RatingPropsType) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    onClick: callback
}

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: callback
}

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    onClick: callback
}

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    onClick: callback
}
/*------//-------*/

const TemplateBig: Story<RatingPropsType> = (args: RatingPropsType) => {
    const [rating, setRating] = useState<RatingValueType>(0)

    return <Rating  {...args} value={rating} onClick={setRating}/>;
}
export const RatingModeChanding = TemplateBig.bind({});
RatingModeChanding.args = {}

