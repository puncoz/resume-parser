import { withKnobs }   from "@storybook/addon-knobs"
import {
    ComponentMeta,
    ComponentStory,
}                      from "@storybook/react"
import Button          from "./Button"
import PrimaryButton   from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

export default {
    title: "Atoms/Button",
    component: Button,
    decorators: [withKnobs],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    buttonSize: "small",
    rounded: false,
}

const PrimaryTemplate: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />

export const Primary = PrimaryTemplate.bind({})
Primary.args = {
    buttonSize: "small",
    rounded: false,
}

const SecondaryTemplate: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />

export const Secondary = SecondaryTemplate.bind({})
Secondary.args = {
    buttonSize: "small",
    rounded: false,
}

