import React from "react";
import styled from "styled-components/native";
import {Dimensions, StyleSheet, View} from 'react-native';
import {TabView, SceneMap, TabBar, SceneRendererProps, Route, NavigationState} from 'react-native-tab-view';
import {Colors} from "../types/Colors";
//@ts-ignore
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCoffee, faPiggyBank, faFootballBall, faSearch} from '@fortawesome/free-solid-svg-icons'
import {BeerTypeTabsController} from "./BeerTypeTabsController";


const TabBarStyled = styled(TabBar).attrs({
    indicatorStyle: {backgroundColor: 'transparent'},

})`
  background-color: ${Colors.PRIMARY};
  padding: 0;
  margin: 0
`;

const EmptyPage = styled.Text`
  flex: 1;
  background-color: aqua;
  text-align: center;
`;

export const FoodTypeBarController = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'drink', title: 'ALL', index: 0, icon: <FontAwesomeIcon icon={faCoffee}/>},
        {key: 'all', title: 'PIZZA', index: 1, icon: <FontAwesomeIcon icon={faPiggyBank}/>},
        {key: 'all2', title: 'PIZZA', index: 2, icon: <FontAwesomeIcon icon={faFootballBall}/>},
        {key: 'all3', title: 'PIZZA', index: 3, icon: <FontAwesomeIcon icon={faSearch}/>},
    ]);
    const initialLayout = {width: Dimensions.get('window').width};

    const renderScene = ({ route }: any) => {
        switch (route.key) {
            case 'drink':
                return <BeerTypeTabsController/>;
            case 'all':
                return <EmptyPage>All foods</EmptyPage>;
            case 'all2':
                return <EmptyPage>Snacks</EmptyPage>;
            case 'all3':
                return <EmptyPage>Search</EmptyPage>;
            default:
                return null;
        }
    };

    const renderLabel = (scene: any) => {
        const {route} = scene;
        const backgroundColor = route.index === index ? Colors.ACCENT : Colors.PRIMARY;

        return (
            <View
                style={[styles.text, {backgroundColor},]}
            >
                {route.icon}
            </View>
        );
    };

    const renderTabBar = (props: SceneRendererProps) => {
        return <TabBarStyled
            {...props}
            renderLabel={renderLabel}
            tabStyle={{backgroundColor: Colors.PRIMARY, padding: 0, marginLeft: 0}}
        />
    };

    return (
        <TabView
            style={{padding: 0, margin: 0}}
            //@ts-ignore
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            scrollEnabled
        />
    );
};


const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        height: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 9,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    tabStyle: {
        opacity: 1,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        backgroundColor: "red",
    },
    tab: {
        backgroundColor: "red",
        paddingRight: 5,
        paddingLeft: 20,
        paddingTop: 20,
        marginTop: 2,
    },
    indicator: {
        backgroundColor: 'transparent',
    },
    content: {
        padding: 20,
    },
});