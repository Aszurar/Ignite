import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car as ModelCar} from '../../databases/model/Car';
import styled from 'styled-components/native';
import LogoImg from '../../assets/logo.svg';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
    height: ${RFValue(113)}px;
    width: 100%;

    justify-content: flex-end;
    padding: 0 ${RFValue(24)}px 0 ${RFValue(16)}px;
    background-color: ${({theme}) => theme.colors.header};
    `;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
     
    margin-bottom: ${RFValue(32)}px;
`;

export const Logo = styled(LogoImg).attrs({
    width: RFValue(108),
    height: RFValue(12),
})``;

export const Total = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(15)}px; 
    font-family: ${({theme}) => theme.fonts.primary_400};
`;

export const CarList = styled(
    FlatList as new () => FlatList<ModelCar>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: RFValue(16),
    }
})``;
