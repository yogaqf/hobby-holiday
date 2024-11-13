import { ReactNode } from 'react';
export type SidebarItemType = {
    icon: ReactNode;
    label: string;
    route: string;
    children?: SidebarDropdownType;
};

export type SidebarDropdownType = {
    item: {
        label: string;
        route: string;
    }[];
};

export type ColorModeType = {
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
};

export type isActivedType = {
    item: {
        label: string;
        route: string;
        icon: React.ReactNode;
    };
};