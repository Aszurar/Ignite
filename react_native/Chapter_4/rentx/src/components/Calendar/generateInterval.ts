import { eachDayOfInterval, format } from 'date-fns';
import { DayProps, MarkedDateProps } from '.';
import theme from '../../styles/theme';
import { getPlatformDate } from '../../utils/getPlatform';

export function generateInterval(start: DayProps, end: DayProps){
    let intervalo: MarkedDateProps = {};

    eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) }).
    forEach(item => {
            const date = format(getPlatformDate(item), 'yyyy-MM-dd'); 
            
            intervalo = {
              ...intervalo,
                [date]: {
                    color: start.dateString === date || end.dateString === date ? theme.colors.main : theme.colors.main_light,
                    textColor:  start.dateString === date || end.dateString === date ? theme.colors.main_light : theme.colors.main,
                }
            }
        }
    )
    return intervalo;
}