import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Container, Title } from './styles';
import GoogleIcon from '../../assets/google-icon.svg';
import AppleIcon from '../../assets/apple-icon.svg';
import { RFValue } from 'react-native-responsive-fontsize';

interface LoginButtonProps extends RectButtonProps {
    type: 'google' | 'apple';
    title: string;
}

export function LoginButton({title, type, ...rest }: LoginButtonProps){
    return(
        <Container>

            <Button
                {...rest}
            >
                {
                    type === 'google' ? 
                        <GoogleIcon 
                            width={RFValue(24)}
                            height={RFValue(24)}
                        /> : 
                        <AppleIcon 
                            width={RFValue(24)}
                            height={RFValue(24)}
                        />
                
                }
                
                <Title>{title}</Title>
            </Button>

        </Container>
    )
}