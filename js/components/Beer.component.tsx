import {Beer} from "../types/Types";
import styled from "styled-components/native"
import React from "react";

export interface Props {
    beer: Beer,
    width: number,
    height: number,
    onPress: (beer: Beer) => void
}

interface ContainerProps {
    width: number;
    height: number;
}

const Container = styled.TouchableOpacity < ContainerProps > `
  width: ${props => props.width};
  height: ${props => props.height};
`;
const Border = styled.View`
  flex: 1;
  borderWidth: 1;
  border-color: gray;
  border-radius: 15;
  padding-left: 12;
  padding-right: 12;
  padding-top: 12;
  padding-bottom: 12;
`;

const Image = styled.Image.attrs({
    resizeMode: "contain"
})`
  flex : 1;
`;

const AbvText = styled.Text`
  margin-top: 6;
  text-align: center;
`;

export const BeerComponent: React.FC<Props> = ({beer, width, height, onPress}) => {

    return <Container width={width} height={height} onPress={() => onPress(beer)}>
        <>
            <Border>
                <Image source={{uri: beer.image_url? beer.image_url : ""}}/>
            </Border>

            <AbvText>{beer.abv}%</AbvText>
        </>
    </Container>

};