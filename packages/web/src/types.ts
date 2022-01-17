import type { ReactElement, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReactComponent = ReactElement<any, any> | null;

export type PropsWithChildren = { children: ReactNode };
