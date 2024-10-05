import { NextUIProvider } from "@nextui-org/system";
import "../ui/styles/globals.css";

export const metadata = {
  title: "Todo app",
  description: "Todo app controlle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
