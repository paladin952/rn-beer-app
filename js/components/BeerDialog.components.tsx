import React from "react";
import styled from "styled-components/native";
import {Modal, Alert} from 'react-native';
import {Beer} from "../types/Types";
import {BlurView} from "@react-native-community/blur";
import {Colors} from "../types/Colors";
import {CloseButton} from "./CloseButton.component";


interface Props {
    beer: Beer;
    onClose: () => void;
}

const BlurViewStyled = styled(BlurView).attrs({
    blurType: "light",
    blurAmount: 10
})`
  flex: 1;
  position: absolute;
`;

const Root = styled.View`
  flex: 1;
  background-color: #00000088;
  align-items: center;
  padding-top: 50%;
`;

const Container = styled.View`
  width: 90%;
  background-color: ${Colors.ACCENT};
  border-radius: 20;
  padding-top: 24;
  padding-left: 24;
  padding-right: 24;
  padding-bottom: 24;
  flex-direction: row;
  align-items: center;
`;

const NameText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18;
`;

const NormaText = styled(NameText)`
  font-size: 14;
  margin-top: 12;
`;

const CloseContainer = styled.View`
  margin-left: 10%;
  width: 100%;
  align-items: flex-start;
`;


const BeerImage = styled.Image.attrs({
    resizeMode: "contain"
})`
  flex: 1;
`;

const BeerImageContainer = styled.View`
  width: 100;
  height: 100;
  padding-top: 8;
  padding-left: 8;
  padding-right: 8;
  padding-bottom: 8;
  background-color:white;
  border-radius: 12;
  margin-left: 12;
`;



const TextContainer = styled.View`
  flex: 1;
`;

const MAX_LENGTH_TEXT = 100;

const collapse = (text: String) => {
    if (text && text.length > MAX_LENGTH_TEXT) {
        text = text.substring(0, MAX_LENGTH_TEXT);
        text += "...";
    }

    return text;
};

export const BeerDialogComponent: React.FC<Props> = ({beer, onClose}) => {
    return (<Modal
        animationType={"fade"}
        transparent={true}
        visible={true}
    >
        <Root>
            <BlurViewStyled/>
            <CloseContainer>
                <CloseButton onPress={() => onClose()}/>
            </CloseContainer>

            <Container>
                <TextContainer>
                    <NameText>{beer.name}</NameText>
                    <NormaText>{beer.tagline}</NormaText>
                    <NormaText>{beer.abv}%</NormaText>
                    <NormaText>{collapse(beer.description)}</NormaText>
                    <NormaText>{collapse(beer.description)}</NormaText>
                </TextContainer>

                <BeerImageContainer>
                    <BeerImage source={{uri: beer.image_url? beer.image_url : ""}}/>
                </BeerImageContainer>
            </Container>
        </Root>
    </Modal>);
};