import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-bottom: 42px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const SubHeader = styled.View`
  margin-top: 128px;
  margin-bottom: 32px;

  align-items: center;
`;

export const GroupIcon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 56,
  weight: 'regular',
}))`
  margin-bottom: 24px;
`;

export const InputContainer = styled.View`
  margin-bottom: 24px;
`;
