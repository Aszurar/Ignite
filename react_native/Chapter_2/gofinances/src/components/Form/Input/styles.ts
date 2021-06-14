import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../global/styles/theme';

// .attrs({ placeholderTextColor: `${ ({ theme })  => theme.colors.text}` })

export const Container = styled(TextInput)`
    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.title};

    height: ${RFValue(56)}px;
    width: 100%;
    padding: ${RFValue(18)}px ${RFValue(16)}px;
    border-radius: 5px;

    margin-bottom: ${RFValue(5)}px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

`;