import { getStatusBarHeight } from 'react-native-iphone-x-helper';
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