import React from 'react';
import { WithStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { DateRange, DefinedRange, Setter, NavigationAction } from '../types';
declare const styles: (theme: Theme) => import("@mui/styles").StyleRules<{}, "header" | "divider" | "headerItem">;
interface MenuProps extends WithStyles<typeof styles> {
    dateRange: DateRange;
    ranges: DefinedRange[];
    minDate: Date;
    maxDate: Date;
    firstMonth: Date;
    secondMonth: Date;
    setFirstMonth: Setter<Date>;
    setSecondMonth: Setter<Date>;
    setDateRange: Setter<DateRange>;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.JSXElementConstructor<Omit<MenuProps & {
    children?: React.ReactNode;
}, "classes"> & import("@mui/styles").StyledComponentProps<"header" | "divider" | "headerItem">>;
export default _default;
