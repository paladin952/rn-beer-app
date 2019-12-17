import React from "react";
import styled from "styled-components/native"
import {BeerSection} from "../components/BeerSection";

const RootContainer = styled.View`
  flex: 1;
  padding-top: 50;
`;



export const MainPage = () => {

    return <RootContainer>

        <BeerSection />

    </RootContainer>
};