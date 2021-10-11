import React from 'react';

import { 
    Calendar as CustomCalendar,
    LocaleConfig 
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

LocaleConfig.locales["pt-br"] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['DOM','SEG','TER','QUA','QUI','SEX', 'SAB'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
const theme = useTheme();
    return (
        <CustomCalendar
            renderArrow={( direction ) => 
                <Feather
                    name={ direction === 'left' ? 'chevron-left' : 'chevron-right' }
                    size={24}
                    color={theme.colors.text}
                />        
            }
            
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.line,
                paddingBottom: 10,
                marginBottom: 10,
            }}
            
            theme={{
                textMonthFontFamily: theme.fonts.secondary_600,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                textDayHeaderFontSize: 10,
                textDayHeaderFontFamily: theme.fonts.secondary_600,
                textDayFontFamily: theme.fonts.primary_400,
                arrowStyle: {
                    marginHorizontal: -15,
                }
            }}
            firstDay={1}
            minDate={new Date()}
        >
            
        </CustomCalendar>
    );
}