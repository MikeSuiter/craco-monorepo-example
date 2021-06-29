import React from 'react';
import LocalButton from '@craco/app-one/src/components/LocalButton';

export default {
  title: 'Buttons/LocalButton',
  component: LocalButton,
};

const Template = (args) => <LocalButton {...args} />;

export const LocalLabel = Template.bind({});
LocalLabel.args = {
  label: 'Local Button',
};

export const MyLabel = Template.bind({});
MyLabel.args = {
  label: 'My Button',
};
