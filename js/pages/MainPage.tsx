import React from "react";
import styled from "styled-components/native"

//@ts-ignore
import {FoodTypeBarController} from "../sections/FoodTypeBarController";


const RootContainer = styled.View`
  flex: 1;
`;

export const MainPage = () => {
    return <RootContainer>
        <FoodTypeBarController/>
    </RootContainer>
};