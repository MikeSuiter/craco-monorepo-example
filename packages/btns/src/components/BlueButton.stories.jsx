import React from 'react';
import BlueButton from '@craco/btns/src/components/BlueButton';

export default {
  title: 'Buttons/BlueButton',
  component: BlueButton,
};

const Template = (args) => <BlueButton {...args} />;

export const BlueLabel = Template.bind({});
BlueLabel.args = {
  label: 'Blue Button',
};

export const MyBlueLabel = Template.bind({});
MyBlueLabel.args = {
  label: 'My Blue Button',
};
