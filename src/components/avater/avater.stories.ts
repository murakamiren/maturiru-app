import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Avatar from "./avatar";

export default {
    component: Avatar,
    title: "avatar"
} as ComponentMeta<typeof Avatar>;

export const Base: ComponentStoryObj<typeof Avatar> = {};
