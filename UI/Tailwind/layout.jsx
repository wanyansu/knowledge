import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={localStorage.getItem("darkMode") === "true" ? "dark" : "light"}>
      <head />
      <body className="bg-white dark:bg-slate-900 dark:text-white">{children}</body>
    </html>
  )
}
