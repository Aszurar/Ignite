import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(BorderlessButton)`
`;

export const BackIcon = styled(MaterialIcons).attrs({
    name: "chevron-left",
    size: RFValue(24)
})``;