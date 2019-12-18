import React from 'react';
import {MainPage} from "./js/pages/MainPage";
import styled from "styled-components/native"
import {Colors} from "./js/types/Colors";
import {SafeAreaView, StatusBar} from "react-native";

console.disableYellowBox = true;

const StatusBarContainer = styled.View`
  background-color: ${Colors.PRIMARY};
`;

const TopBar = styled.View`
  width: 100%;
  height: 56;
  padding-top: 24;
  background-color: ${Colors.PRIMARY};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

const Root = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const App = () => {
    return (
        <Root>
            <StatusBarContainer>
                <SafeAreaView>
                    <StatusBar translucent backgroundColor={"red"} barStyle="light-content"/>
                </SafeAreaView>
            </StatusBarContainer>

            <ContentContainer>
                <TopBar><Title>BrewDawg</Title></TopBar>
                <MainPage/>
            </ContentContainer>
        </Root>
    );
};


export default App;
