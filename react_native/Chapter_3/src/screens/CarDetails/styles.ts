import { Dimensions } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background_secondary};
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;

    margin-left: ${RFValue(24)}px;
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;
`;

export const SliderContainer = styled.View`
    margin-top: ${RFValue(32) + getStatusBarHeight()}px;
`;


export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: RFValue(24),
        alignItems: 'center',
    },
    showsVerticalScrollIndicator: false
})`
    margin-top: ${RFValue(35.65)}px;
`;

export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const Description = styled.View``;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(11)}px;
    color: ${({theme}) => theme.colors.text_detail};
    letter-spacing: ${Dimensions.get('window').width*0.004}px;
    text-transform: uppercase;
`;

export const Name = styled.Text`
    margin-top: ${RFValue(4)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(11)}px;
    color: ${({theme}) => theme.colors.text_detail};
    letter-spacing: ${Dimensions.get('window').width*0.004}px;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    margin-top: ${RFValue(4)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.colors.main};
`;


export const About = styled.Text`
    margin-top: ${RFValue(24)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({theme}) => theme.colors.text};
    text-align: justify;
    line-height: ${RFValue(25)}px;
`

export const Accessories = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View`
    width: 100%;
              /* cima,          lados             embaixo */
    padding: ${RFValue(24)}px ${RFValue(24)}px ${RFValue(24) + getBottomSpace()}px;
`;