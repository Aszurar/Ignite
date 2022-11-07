import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';
import { HeaderProps } from '.';

export const Container = styled.View<HeaderProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ hasBackButton }) => (hasBackButton ? 'space-between' : 'center')};

  margin-top: 54px;
`;

export const BackButton = styled.TouchableOpacity``;

export const LeftArrowIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
}))``;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
