import React from "react";
import styled from "styled-components/native";
import {Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {BeerSection} from "./beer/BeerSection";
import {Colors} from "../types/Colors";


const TabBarStyled = styled(TabBar).attrs({
    indicatorStyle: {backgroundColor: 'transparent'}
})`
  background-color: ${Colors.ACCENT}
`;

export const BeerTypeTabsController = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'all', title: 'ALL'},
        {key: 'pizza', title: 'PIZZA'},
        {key: 'steak', title: 'STEAK'},
    ]);
    const initialLayout = {width: Dimensions.get('window').width};

    const renderScene = SceneMap({
        all: () => (<BeerSection/>),
        pizza: () => (<BeerSection foodPairing={"pizza"}/>),
        steak: () => (<BeerSection foodPairing={"steak"}/>)
    });

    const renderTabBar = (props: any) => (
        <TabBarStyled
            {...props}
            renderLabel={({ route, color }: any) => (
                <Text style={{ color, fontWeight: "bold" }}>
                    {route.title}
                </Text>
            )}
        />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />
    );
};