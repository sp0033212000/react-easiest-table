import React, { PropsWithChildren, ValidationMap, WeakValidationMap } from "react";
interface FCWithoutComponent<P = {}> {
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}
export interface TableOrder<Data extends Record<string, any>> {
    key: Exclude<keyof Data, symbol>;
    label: string;
    proportion?: number;
}
export declare type TableColumnOption<Data extends Record<string, any>> = {
    [K in keyof Data]: {
        render?: React.FC<Data>;
        builder?: (value: Data[K]) => string | null;
    };
};
interface Props<Data extends Record<string, any>> {
    data: Data[];
    order: TableOrder<Data>[];
    columnOptions?: Partial<TableColumnOption<Data>>;
}
interface TableComponent extends FCWithoutComponent {
    <Data extends Record<string, any>>(props: PropsWithChildren<Props<Data>>, context?: any): ReturnType<React.FC>;
}
export declare const Table: TableComponent;
export {};
