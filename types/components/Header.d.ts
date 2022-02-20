import { WithStyles } from '@mui/styles';
import React from 'react';
interface HeaderProps extends WithStyles<typeof styles> {
    date: Date;
    setDate: (date: Date) => void;
    nextDisabled: boolean;
    prevDisabled: boolean;
    onClickNext: () => void;
    onClickPrevious: () => void;
}
declare const styles: import("@mui/styles").StyleRules<{}, "iconContainer" | "icon">;
declare const _default: React.JSXElementConstructor<Omit<HeaderProps & {
    children?: React.ReactNode;
}, "classes"> & import("@mui/styles").StyledComponentProps<"iconContainer" | "icon">>;
export default _default;
