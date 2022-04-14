import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
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

  margin-top: ${RFValue(40)}px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ProfilePhoto = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: ${RFValue(90)}px;
`;

export const UpdateProfilePhotoButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.main};
  position: absolute;
  bottom: ${RFValue(10)}px;
  right: ${RFValue(10)}px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  margin-top: ${RFValue(60)}px;
  padding: 0 ${RFValue(24)}px;
`;

export const Sessions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: ${RFValue(24)}px;
`;

interface SessionButtonProps {
  active: boolean;
}

export const SessionsButton = styled.TouchableOpacity<SessionButtonProps>`
  padding-bottom: ${RFValue(14)}px;

  ${({ active }) =>
    active
      ? css`
          border-bottom-width: ${RFValue(2)}px;
          border-bottom-color: ${({ theme }) => theme.colors.main};
        `
      : css`
          border-bottom-width: ${RFValue(2)}px;
          border-bottom-color: ${({ theme }) => theme.colors.background_primary};
        `};
`;

export const SessionsButtonText = styled.Text<SessionButtonProps>`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(21.76)}px;

  ${({ active }) =>
    active
      ? css`
          color: ${({ theme }) => theme.colors.title_light};
          font-family: ${({ theme }) => theme.fonts.secondary_600};
        `
      : css`
          color: ${({ theme }) => theme.colors.text_detail};
          font-family: ${({ theme }) => theme.fonts.secondary_400};
        `};
`;

export const DataForm = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const DataFormSpace = styled.View`
  height: ${RFValue(8)}px;
`;
