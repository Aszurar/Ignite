import React from 'react';

import { 
    Calendar as CustomCalendar,
    DateCallbackHandler,
    LocaleConfig 
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';


interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    };
}

interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: DateCallbackHandler;
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

function Calendar({ markedDates, onDayPress }: CalendarProps){
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
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
        >
            
        </CustomCalendar>
    );
}

export {
    DayProps,
    generateInterval,
    MarkedDateProps,
    Calendar
}