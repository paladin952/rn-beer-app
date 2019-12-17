import React from "react";
import styled from "styled-components/native";
import {Modal, View, Alert} from 'react-native';
import {Beer} from "../types/Types";
import {BlurView, VibrancyView} from "@react-native-community/blur";


interface Props {
    beer: Beer;
    onClose: () => void;
}

const Root = styled(BlurView).attrs({
    blurType: "light",
    blurAmount: 10
})`
  flex: 1;
  background-color: #00000088;
  align-items: center;
  padding-top: 50%;
`;

const Container = styled.View`
  width: 90%;
  background-color: #363536;
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

const CloseButtonText = styled.Text`
  font-weight: bold;
`;
const CloseButtonTouchable = styled.TouchableOpacity`
  background-color: red;
  border-radius: 12;
  padding-top: 8;
  padding-left: 8;
  padding-right: 8;
  padding-bottom: 8;
  margin-bottom: 6;
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

interface CloseButtonProps {
    onPress: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({onPress}) => {
    return <CloseButtonTouchable onPress={onPress}>
        <CloseButtonText>CLOSE</CloseButtonText>
    </CloseButtonTouchable>
};

const TextContainer = styled.View`
  flex: 1;
`;

export const BeerDialogComponent: React.FC<Props> = ({beer, onClose}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <Root>
                <CloseContainer>
                    <CloseButton onPress={() => onClose()}/>
                </CloseContainer>

                <Container>
                    <TextContainer>
                        <NameText>{beer.name}</NameText>
                        <NormaText>{beer.tagline}</NormaText>
                        <NormaText>{beer.abv}%</NormaText>
                        <NormaText>{beer.description}</NormaText>
                        <NormaText>{beer.food_pairing}</NormaText>
                    </TextContainer>

                    <BeerImageContainer>
                        <BeerImage source={{uri: beer.image_url}}></BeerImage>
                    </BeerImageContainer>
                </Container>


            </Root>
        </Modal>
    )
};