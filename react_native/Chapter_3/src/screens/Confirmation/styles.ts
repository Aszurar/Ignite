import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const SucessBackgroundContainer = styled.View`
  margin-top: ${RFValue(96)}px;
`;

export const SucessTextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  margin-top: ${RFValue(46)}px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  margin-top: ${RFValue(16)}px;
  text-align: center;
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: ${RFValue(80)}px 0;
`;
