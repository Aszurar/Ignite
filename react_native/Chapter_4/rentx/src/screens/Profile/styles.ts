import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: ${RFValue(277)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  align-items: center;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: ${RFValue(32) + getStatusBarHeight()}px;
  padding: 0 ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(25)}px;
  line-height: ${RFValue(27.2)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const ProfilePhotoContainer = styled.View`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: ${RFValue(90)}px;

  margin-top: ${RFValue(50)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ProfilePhoto = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: ${RFValue(90)}px;
`;

export const UpdateProfilePhotoButton = styled(BorderlessButton)`
  background-color: ${({ theme }) => theme.colors.main};
  position: absolute;
  bottom: ${RFValue(10)}px;
  right: ${RFValue(10)}px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
`;

export const Sessions = styled.View`
  margin-top: ${RFValue(62)}px;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  margin-bottom: ${RFValue(10)}px;
`;

export const SessionsButton = styled(RectButton)``;

export const SessionsButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title_light};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(21.76)}px;
`;

export const SessionsButtonBorder = styled.View`
  width: 100%;
  height: ${RFValue(2)}px;

  margin-top: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const DataForm = styled.View``;
