import React, {
  PropsWithChildren,
  ValidationMap,
  WeakValidationMap,
} from "react";
import classNames from "classnames";
import { isEmptyArray, isSet } from "../../utils/format.checker";

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

export type TableColumnOption<Data extends Record<string, any>> = {
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
  <Data extends Record<string, any>>(
    props: PropsWithChildren<Props<Data>>,
    context?: any
  ): ReturnType<React.FC>;
}

export const Table: TableComponent = ({ data, order, columnOptions }) => {
  return (
    <ul
      className={classNames(
        "w-full",
        "rounded-sm",
        "overflow-hidden",
        "border",
        "border-solid",
        "border-grey4",
        "divide-y",
        "divide-grey4"
      )}
    >
      <HeaderRow order={order} />
      <Body isEmpty={isEmptyArray(data)}>
        {data.map((item, index) => (
          <Row
            key={index}
            item={item}
            order={order}
            columnOptions={columnOptions}
          />
        ))}
      </Body>
    </ul>
  );
};

const HeaderRow: React.FC<{ order: TableOrder<any>[] }> = ({ order }) => {
  return (
    <li className={classNames("w-full", "px-6", "py-3", "bg-bg-blue")}>
      <ul className={classNames("w-full", "flex", "items-center")}>
        {order.map(({ key, proportion = 1, label }) => {
          return (
            <li
              key={key}
              style={{ flex: proportion }}
              className={classNames(["text-[1rem]", "font-medium"])}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const Body: React.FC<{ isEmpty: boolean }> = ({ isEmpty, children }) => {
  if (isEmpty)
    return (
      <li
        className={classNames(
          "w-full",
          "px-6",
          "py-3",
          "bg-white",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <p className={classNames(["text-[1rem]", "font-normal"])}>無資料</p>
      </li>
    );

  return <React.Fragment>{children}</React.Fragment>;
};

interface RowProps {
  order: TableOrder<any>[];
  item: Record<string, any>;
  columnOptions?: Partial<TableColumnOption<any>>;
}

const Row: React.FC<RowProps> = ({ order, item, columnOptions }) => {
  return (
    <li className={classNames("w-full", "px-6", "py-3", "bg-white")}>
      <ul className={classNames("w-full", "flex", "items-center")}>
        {order.map(({ key, proportion = 1 }) => {
          let Render = undefined;
          let displayValue = item[key];

          if (columnOptions) {
            Render = columnOptions?.[key]?.render;
            displayValue =
              columnOptions?.[key]?.builder?.(displayValue) || displayValue;
          }

          return (
            <li
              key={key}
              style={{ flex: proportion }}
              className={classNames(["text-[1rem]", "font-medium"])}
            >
              {isSet(Render) ? <Render {...item} /> : displayValue}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
