import * as React from 'react';
import { WithStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
interface DayProps extends WithStyles<typeof styles> {
    filled?: boolean;
    outlined?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    startOfRange?: boolean;
    endOfRange?: boolean;
    onClick?: () => void;
    onHover?: () => void;
    value: number | string;
}
declare const styles: (theme: Theme) => import("@mui/styles").StyleRules<{}, "button" | "filled" | "leftBorderRadius" | "rightBorderRadius" | "buttonContainer" | "buttonText" | "outlined" | "highlighted" | "contrast">;
declare const _default: React.JSXElementConstructor<Omit<DayProps & {
    children?: React.ReactNode;
}, "classes"> & import("@mui/styles").StyledComponentProps<"button" | "filled" | "leftBorderRadius" | "rightBorderRadius" | "buttonContainer" | "buttonText" | "outlined" | "highlighted" | "contrast">>;
export default _default;
