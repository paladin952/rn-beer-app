import React from "react";
import styled from "styled-components/native";
import {Dimensions, StyleSheet, View} from 'react-native';
import {TabView, SceneMap, TabBar, SceneRendererProps, Route, NavigationState} from 'react-native-tab-view';
import {Colors} from "../types/Colors";
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

const EmptyPage1 = styled.Text`
  flex: 1;
  background-color: aqua;
  text-align: center;
`;

const EmptyPage2 = styled.Text`
  flex: 1;
  background-color:blue;
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

    const renderScene = SceneMap({
        drink: () => (<BeerTypeTabsController/>),
        all: () => (<EmptyPage1>All foods</EmptyPage1>),
        all2: () => (<EmptyPage1>Snacks</EmptyPage1>),
        all3: () => (<EmptyPage1>Search</EmptyPage1>)
    });


    const renderLabel = (scene) => {
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
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            scrollEnabled
        />
    );
};

// import React from 'react';
// import { StyleSheet, Animated, View, Text } from 'react-native';
// import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//
const activeBg = '#384153';
const activeText = '#ffffff';

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
        backgroundColor: activeBg
    },
    contentText: {
        color: activeText,
    },
});
//
// const FirstRoute = () => (
//     <View style={styles.content}>
//         <Text style={styles.contentText}>First</Text>
//     </View>
// );
// const SecondRoute = () => (
//     <View style={styles.content}>
//         <Text style={styles.contentText}>Second</Text>
//     </View>
// );
// const ThirdRoute = () => (
//     <View style={styles.content}>
//         <Text style={styles.contentText}>Third</Text>
//     </View>
// );
// const FourthRoute = () => (
//     <View style={styles.content}>
//         <Text style={styles.contentText}>Fourth</Text>
//     </View>
// );
//
// export class FoodTypeBarController2 extends React.Component {
//     state = {
//         index: 0,
//         routes: [
//             { key: 'first', title: 'First', index: 0 },
//             { key: 'second', title: 'Second', index: 1},
//             { key: 'third', title: 'Third', index: 2 },
//             { key: 'fourth', title: 'Fourth', index: 3 },
//         ],
//     };
//
//     _renderLabel = (scene) => {
//         const { route } = scene;
//         const backgroundColor = route.index === this.state.index? "gray" : "red";
//
//         return (
//             <Animated.Text
//                 numberOfLines={1}
//                 style={[
//                     styles.text,
//                     {
//                         color: "white",
//                         backgroundColor,
//                     },
//                 ]}
//             >
//                 {"aaa"}
//             </Animated.Text>
//         );
//     };
//
//     render() {
//         return (
//             <TabView
//                 navigationState={this.state}
//                 renderScene={SceneMap({
//                     first: FirstRoute,
//                     second: SecondRoute,
//                     third: ThirdRoute,
//                     fourth: FourthRoute,
//                 })}
//                 renderTabBar={props => (
//                     <TabBar
//                         {...props}
//                         renderLabel={this._renderLabel}
//                         getLabelText={({ route: { title } }) => title}
//                         indicatorStyle={styles.indicator}
//                         tabStyle={styles.tabStyle}
//                         style={styles.tab}
//                     />
//                 )}
//                 onIndexChange={index => this.setState({ index })}
//             />
//         );
//     }
// }