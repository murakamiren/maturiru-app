import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import ChatCard from "./chatCard";

export default {
    component: ChatCard,
    title: "chat card"
} as ComponentMeta<typeof ChatCard>;

export const base: ComponentStoryObj<typeof ChatCard> = {
    args: {
        name: "テスト",
        latestMsg: "こんにちわ",
        time: "12:00",
        notification: 1
    }
};
