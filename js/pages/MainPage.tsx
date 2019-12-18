import React, {useEffect} from "react";
import styled from "styled-components/native"
import RNShake from 'react-native-shake';
import {FoodTypeBarController} from "../sections/FoodTypeBarController";


const RootContainer = styled.View`
  flex: 1;
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