import { VFC } from "react";
import { Text } from "react-native";

import { Box } from "../components/atom/box/box";

const TestView: VFC = () => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box
                width={200}
                height={200}
                backgroundColor="secondary"
                borderRadius={16}
                justifyContent="center"
                alignItems="center"
            >
                <Text style={{ color: "white" }}>hello test</Text>
            </Box>
        </Box>
    );
};

export default TestView;
