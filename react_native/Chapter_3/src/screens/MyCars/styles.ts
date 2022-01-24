import styled from 'styled-components/native';
import ArrowCardIcon from '../../assets/short-arrow.svg';

import { Dimensions, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    height: ${RFValue(273)}px;
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    padding-top: ${getStatusBarHeight() + 30}px;

    background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(34)}px;

    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};

    line-height: ${RFValue(34)}px;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(18)}px;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme}) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.background_secondary};

    line-height: ${RFValue(34)}px;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding: 0 ${RFValue(24)}px ;
    margin-top: ${RFValue(26)}px;
    margin-bottom: ${RFValue(29)}px;
`

export const Subtitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    line-height: ${RFValue(18.15)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const RentalTotal = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    line-height: ${RFValue(16.32)}px;

    color: ${({ theme }) => theme.colors.title};
`;

export const MyCarsList = styled(
    FlatList as new () => FlatList<CarProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: RFValue(16),
    }
    })``;

export const RentalPeriodContainer = styled.View`
    height: ${RFValue(40)}px;
    width: 100%;

    margin-top: ${RFValue(2)}px;
    padding: 0 ${RFValue(24)}px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const RentalLabel = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    line-height: ${RFValue(10.88)}px;
    letter-spacing: ${Dimensions.get('window').width*0.004}px;

    color: ${({ theme }) => theme.colors.text_detail};
`;

export const RentalPeriod = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const RentalDate = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    line-height: ${RFValue(15.73)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ArrowCard = styled(ArrowCardIcon)`
    margin: 0 ${RFValue(10)}px 0 ${RFValue(10)}px;
`;

export const Separator = styled.View`
    height: ${RFValue(16)}px;
`;
