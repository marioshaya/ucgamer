import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Homepage | UC Gamer",
    description: "UC Gamer is a web app for gamers to all information you need to build a powerful UC Gamer Desktop. You can also browse hundreds of avalaible motherboards, graphic cards, ram, etc. All about UC Gamer are here",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
