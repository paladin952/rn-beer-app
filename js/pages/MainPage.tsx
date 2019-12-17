import React, {useEffect} from "react";
import styled from "styled-components/native"
import {BeerSection} from "../components/BeerSection";
import RNShake from 'react-native-shake';


const RootContainer = styled.View`
  flex: 1;
  padding-top: 50;
`;

const SHAKE_EVENT_NAME = "ShakeEvent";

export const MainPage = () => {

    useEffect(() => {
        RNShake.addEventListener(SHAKE_EVENT_NAME, () => {
            console.log("on shake");
        });

        return () => {
            RNShake.removeEventListener(SHAKE_EVENT_NAME);
        }
    }, []);

    return <RootContainer>

        <BeerSection foodPairing={"pizza"}/>

    </RootContainer>
};