import React from "react";
import styled from "styled-components/native";
import {Modal, TouchableOpacity, Text} from 'react-native';
import {BlurView} from "@react-native-community/blur";
import {Colors} from "../types/Colors";
import {CloseButton} from "./CloseButton.component";


interface Props {
    onClose: () => void;
    onSelect: (type: string) => void;
}

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
  align-items: center;
`;

const CloseContainer = styled.View`
  margin-left: 10%;
  width: 100%;
  align-items: flex-start;
`;

interface ClickableProps {
    onPress: () => void;
}

const ElementText = styled.Text`
  margin-top: 6;
  color: white;
  font-weight: bold;
  font-size: 16;
`;

const Element: React.FC<ClickableProps> = ({onPress}) => {
    return <TouchableOpacity onPress={onPress}>
        <ElementText>TEST</ElementText>
    </TouchableOpacity>
};


export const BeerSordDialogComponent: React.FC<Props> = ({onClose, onSelect}) => {
    return (<Modal
        animationType={"fade"}
        transparent={true}
        visible={true}
    >
        <Root>
            <CloseContainer>
                <CloseButton onPress={() => onClose()}/>
            </CloseContainer>

            <Container>
                <Element onPress={() => onSelect("a")}></Element>
                <Element onPress={() => onSelect("b")}></Element>
                <Element onPress={() => onSelect("c")}></Element>
            </Container>
        </Root>
    </Modal>);
};