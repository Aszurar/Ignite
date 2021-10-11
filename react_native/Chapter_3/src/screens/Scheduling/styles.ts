import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(325)}px;
    background-color: ${({theme}) => theme.colors.header};

    justify-content: center;
    align-items: flex-start;

    padding: 0 ${RFValue(24)}px;
    padding-top: ${RFValue(30)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.background_secondary};

    line-height: ${RFValue(34)}px;

    margin-top: ${RFValue(36)}px;
`

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: ${RFValue(32)}px 0;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};

    letter-spacing: ${Dimensions.get('window').width * 0.004}px;
    text-transform: uppercase;
`;

interface DateValueProps {
    selected: boolean;
}

export const DateValue = styled.Text<DateValueProps>`
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.background_secondary};

    letter-spacing: ${Dimensions.get('window').width * 0.004}px;
    text-transform: uppercase;

    ${({theme, selected}) => !selected && css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${theme.colors.text};
    `}
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: RFValue(24),
    },
    showsVerticalScrollIndicator: false,
})`
`;

export const Footer = styled.View`
    padding: 24px;
`;