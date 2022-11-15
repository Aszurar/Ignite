import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { GroupProps } from '.';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-bottom: 42px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const SubHeader = styled.View`
  margin: 32px 0;
`;

export const GroupList = styled(FlatList as new (props: FlatListProps<GroupProps>) => FlatList<GroupProps>).attrs({
  showsVerticalScrollIndicator: false,
  // contentContainerStyle: {
  //   flex: 1,
  // },
})`
  margin-bottom: 24px;
`;

export const Separator = styled.View`
  height: 0.5px;
  width: 10%;
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_700};

  margin: 12px 0;
`;
