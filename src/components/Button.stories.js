// Button.stories.js|ts|jsx|tsx

import React from 'react'
import { Type } from './Button';

import Button from './Button.tsx'

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Button',
	component: Button,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: 'Button', type: Type.Primary };

export const Default = Template.bind({});
Default.args = { ...Primary.args, label: 'Default', type: Type.Default }

export const Warning = Template.bind({});
Warning.args = { ...Primary.args, label: 'Warning', type: Type.Warning }

export const Danger = Template.bind({})
Danger.args = { ...Primary.args, label: 'Danger', type: Type.Danger }

export const Sucess = Template.bind({})
Sucess.args = { ...Primary.args, label: 'Sucess', type: Type.Success }