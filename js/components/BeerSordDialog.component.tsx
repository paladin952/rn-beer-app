import React from "react";
import styled from "styled-components/native";
import {Modal, TouchableOpacity} from 'react-native';
import {Colors} from "../types/Colors";
import {CloseButton} from "./CloseButton.component";
import {SortType} from "../types/Types";


interface Props {
    onClose: () => void;
    onSelect: (type: SortType) => void;
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

const Element: React.FC<ClickableProps & {text: SortType}> = ({onPress, text}) => {
    return <TouchableOpacity onPress={onPress}>
        <ElementText>{text}</ElementText>
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
                <Element text={"abv_ascending"} onPress={() => onSelect("abv_ascending")}/>
                <Element text={"abv_descending"} onPress={() => onSelect("abv_descending")}/>
                <Element text={"name_ascending"} onPress={() => onSelect("name_ascending")}/>
                <Element text={"name_descending"} onPress={() => onSelect("name_descending")}/>
            </Container>
        </Root>
    </Modal>);
};