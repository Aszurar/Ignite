import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
    Container, 
    Title
} from './styles';

interface AceessoryProps {
    name: string;
    icon: React.FC<SvgProps>;
}
export function Acessory({ name, icon: Icon }: AceessoryProps){
    return (
        <Container>
            <Icon />
            <Title>{name}</Title>
        </Container>
    );
}