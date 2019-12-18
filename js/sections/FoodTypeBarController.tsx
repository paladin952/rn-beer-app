import React from "react";
import styled from "styled-components/native";
import {Dimensions} from 'react-native';
import {TabView, TabBar, SceneRendererProps} from 'react-native-tab-view';
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

const IconContainer = styled.View`
  background-color: ${props => props.backgroundColor};
  margin-top: 10;
  height: 100%;
  padding-left: 30;
  padding-right: 30;
  padding-bottom: 9;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 15;
  border-top-right-radius: 15;
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

    const renderScene = ({route}: any) => {
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
            <IconContainer backgroundColor={backgroundColor}>{route.icon}</IconContainer>
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
