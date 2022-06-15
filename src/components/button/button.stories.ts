import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Button from "./button";

export default {
    component: Button,
    title: "button",
    argTypes: {
        text: {
            description: "ボタンに入るテキスト"
        }
    }
} as ComponentMeta<typeof Button>;

export const Base: ComponentStoryObj<typeof Button> = {
    args: {
        text: "hello storybook"
    }
};
