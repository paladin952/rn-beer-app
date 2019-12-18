import React, {useEffect} from "react";
import styled from "styled-components/native";
import {Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Colors} from "../types/Colors";
//@ts-ignore
import RNShake from 'react-native-shake';
import {BeerSordDialogComponent} from "../components/BeerSordDialog.component";
import BeerSection from "./beer/BeerSection";

const SHAKE_EVENT_NAME = "ShakeEvent";


const TabBarStyled = styled(TabBar).attrs({
    indicatorStyle: {backgroundColor: 'transparent'}
})`
  background-color: ${Colors.ACCENT}
`;

export const BeerTypeTabsController = () => {

    const [sortType, setSortType] = React.useState("abv_desc");
    const [showSortDialog, setShowSortDialog] = React.useState(false);

    useEffect(() => {
        RNShake.addEventListener(SHAKE_EVENT_NAME, () => {
            console.log("lucitest shake");
            setShowSortDialog(true);
        });

        return () => {
            RNShake.removeEventListener(SHAKE_EVENT_NAME);
        }
    }, []);


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'all', title: 'ALL'},
        {key: 'pizza', title: 'PIZZA'},
        {key: 'steak', title: 'STEAK'},
    ]);
    const initialLayout = {width: Dimensions.get('window').width};

    const renderScene = ({ route }: any) => {
        switch (route.key) {
            case 'all':
                return <BeerSection key={1} sortType={sortType}/>;
            case 'pizza':
                return <BeerSection key={2} foodPairing={"pizza"} sortType={sortType}/>;
            case 'steak':
                return <BeerSection key={3} foodPairing={"steak"} sortType={sortType}/>;
            default:
                return null;
        }
    };

    const renderTabBar = (props: any) => (
        <TabBarStyled
            {...props}
            renderLabel={({route, color}: any) => (
                <Text style={{color, fontWeight: "bold"}}>
                    {route.title}
                </Text>
            )}
        />
    );

    return (
        <>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />

            {showSortDialog && <BeerSordDialogComponent
                onSelect={type => {
                    setSortType(type);
                }}
                onClose={() => setShowSortDialog(false)}
            />}
        </>
    );
};