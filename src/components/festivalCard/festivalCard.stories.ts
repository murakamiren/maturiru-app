import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import FestivalCard from "./festivalCard";

export default {
    component: FestivalCard,
    title: "お祭りカード"
} as ComponentMeta<typeof FestivalCard>;

export const card: ComponentStoryObj<typeof FestivalCard> = {
    args: {
        space: 2,
        festivalName: "テストまつり",
        festivalImgUri: ""
    }
};
