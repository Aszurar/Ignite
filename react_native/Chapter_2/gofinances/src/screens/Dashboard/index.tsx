import React from 'react';
import { Image } from 'react-native';
import { 
    Container, 
    Head, 
    Header, 
    Photo, 
    User, 
    UserGreeting, 
    UserInfo, 
    UserName
} from './styled';



export function Dashboard() {
    return (
        <Container>
           <Header>
              <Head>
                <UserInfo>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/64987824?s=400&u=51e8a76f68447d04bb10d3f57e77df673874bad6&v=4'}}/>
                    
                    <User>
                       <UserGreeting>Olá,</UserGreeting>
                       <UserName>Lucas a</UserName>
                    </User> 
                
                </UserInfo>              
              </Head>
           </Header>
        </Container>
    )
}