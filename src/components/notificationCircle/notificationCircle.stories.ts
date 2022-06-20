import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import NotificationCircle from "./notificationCircle";

export default {
    component: NotificationCircle,
    title: "notification circle",
    argTypes: {
        count: {
            description: "通知の数"
        }
    }
} as ComponentMeta<typeof NotificationCircle>;

export const base: ComponentStoryObj<typeof NotificationCircle> = {
    args: {
        count: 1
    }
};
