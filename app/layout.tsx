import "./styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ApolloWrapper } from "../lib/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genes associated with lung carcinoma",
  description:
    "The Open Targets Platform integrates publicly available datasets to support systematic identification and prioritisation of drug targets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
