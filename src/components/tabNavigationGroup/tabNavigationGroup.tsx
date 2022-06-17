import HomeView from "../../views/homeView";
import NavigationTabScreen from "../navigationTabScreen/navigationTabScreen";
import SearchIcon from "./assets/svg/searchIcon.svg";

const TabNavigationGroup = () => {
    return (
        <>
            <NavigationTabScreen
                title="検索"
                label="検索"
                component={HomeView}
                Icon={SearchIcon}
            />
        </>
    );
};

export default TabNavigationGroup;
