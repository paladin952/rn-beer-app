import React, {useEffect} from "react";
import styled from "styled-components/native"
import RNShake from 'react-native-shake';
import {BeerTypeTabsController} from "../sections/BeerTypeTabsController";
import {FoodTypeBarController} from "../sections/FoodTypeBarController";


const RootContainer = styled.View`
  flex: 1;
  padding-top: 50;
`;

const SHAKE_EVENT_NAME = "ShakeEvent";

export const MainPage = () => {

    useEffect(() => {
        RNShake.addEventListener(SHAKE_EVENT_NAME, () => {
            // TODO
        });

        return () => {
            RNShake.removeEventListener(SHAKE_EVENT_NAME);
        }
    }, []);

    return <RootContainer>

        <FoodTypeBarController/>

    </RootContainer>
};