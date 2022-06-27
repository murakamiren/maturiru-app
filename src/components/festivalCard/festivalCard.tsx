import { VFC } from "react";
import { Image, Text, View } from "react-native";

import StarIcon from "../../assets/svg/starIcon.svg";
import { FestivalCardProps } from "../../types/componentsProps/festivalCardPropsType";
import Avatar from "../avatar/avatar";

const stars: number[] = [1, 2, 3, 4];

const FestivalCard: VFC<FestivalCardProps> = ({
    space,
    festivalName,
    festivalImgUri
}) => {
    return (
        <View>
            <View>
                <Text>参加枠{space}</Text>
            </View>
            <View>
                <Image source={{ uri: festivalImgUri }}></Image>
            </View>
            <View>
                <View>
                    <Text>{festivalName}</Text>
                    <Text>{festivalName}</Text>
                    <View>
                        {stars.map((d) => (
                            <StarIcon key={d} width={13} height={13} />
                        ))}
                        <Text>口コミを見る</Text>
                    </View>
                </View>
                <View>
                    <Avatar size="sx" />
                </View>
            </View>
            <View>
                <Text>詳細を見る</Text>
            </View>
        </View>
    );
};

export default FestivalCard;
