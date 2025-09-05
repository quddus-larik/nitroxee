"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ToastProvider } from "@heroui/react";
import { AppProgressProvider as ProgressProvider } from '@bprogress/next';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider placement="bottom-right" />
      <div className="bg-slate-950">
        <ProgressProvider 
          height="4px"
          color="#61e363"
          options={{ showSpinner: false }}
          shallowRouting
        >
      {children}
        </ProgressProvider>
      </div>
    </HeroUIProvider>
  );
}
