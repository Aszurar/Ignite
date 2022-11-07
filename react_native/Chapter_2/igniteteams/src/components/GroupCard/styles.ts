import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;

  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  border-radius: 6px;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const GroupIcon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 32,
  weight: 'fill',
}))`
  margin-right: 20px;
`;

export const GroupImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  margin-right: 20px;
`;
