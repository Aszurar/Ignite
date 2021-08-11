import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, ImageContainer, Title } from './styles';
import { SvgProps } from 'react-native-svg';

interface LoginButtonProps extends RectButtonProps {
    title: string;
    svg: React.FC<SvgProps>
}

export function LoginButton({title, svg: Svg, ...rest }: LoginButtonProps){
    return(
        <Button
        {...rest}
        >
            <ImageContainer>
                <Svg />
            </ImageContainer>

            <Title>{title}</Title>
        </Button>
    )
}