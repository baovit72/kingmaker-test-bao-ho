import { Slider } from "./Slider";

 
export default {
  title: 'Slider',
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  children: [<div key={1}>Slide 1</div>, <div key={2}>Slide 2</div>, <div key={3}>Slide 3</div>],
};
