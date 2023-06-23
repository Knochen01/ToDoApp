import "./globals.css";
import Header from "./(user)/todos/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ToDo's Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
