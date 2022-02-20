import * as React from 'react';
import { WithStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { NavigationAction, DateRange } from '../types';
declare const styles: (theme: Theme) => import("@mui/styles").StyleRules<{}, "root" | "weekDaysContainer" | "daysContainer">;
interface MonthProps extends WithStyles<typeof styles> {
    value: Date;
    marker: symbol;
    dateRange: DateRange;
    minDate: Date;
    maxDate: Date;
    navState: [boolean, boolean];
    setValue: (date: Date) => void;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.JSXElementConstructor<Omit<MonthProps & {
    children?: React.ReactNode;
}, "classes"> & import("@mui/styles").StyledComponentProps<"root" | "weekDaysContainer" | "daysContainer">>;
export default _default;
