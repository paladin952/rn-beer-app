import React from "react";
import styled from "styled-components/native"


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


interface CloseButtonProps {
    onPress: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({onPress}) => {
    return <CloseButtonTouchable onPress={onPress}>
        <CloseButtonText>CLOSE</CloseButtonText>
    </CloseButtonTouchable>
};
