'use client'
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ClientProviderProps = {
  children: ReactNode;
};
export function ClientProvider({ children }: ClientProviderProps) {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
