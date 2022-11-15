import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  width: 100%;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;

export const InputText = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border-radius: 6px;
`;
