import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Avatar from "./avatar";

export default {
    component: Avatar,
    title: "avatar",
    argTypes: {
        size: {
            description: "サイズ"
        }
    }
} as ComponentMeta<typeof Avatar>;

export const Base: ComponentStoryObj<typeof Avatar> = {
    args: {
        size: "base"
    }
};

export const Large: ComponentStoryObj<typeof Avatar> = {
    args: {
        size: "large"
    }
};

export const LargeWithBadge: ComponentStoryObj<typeof Avatar> = {
    args: {
        size: "large",
        isBadge: true
    }
};

export const small: ComponentStoryObj<typeof Avatar> = {
    args: {
        size: "sm"
    }
};
