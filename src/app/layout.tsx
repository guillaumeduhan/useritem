import "animate.css";
import { Suspense } from "react";
import "./globals.scss";
import { Toaster, toast } from 'sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>
          UserItem — Customizable User Component for JavaScript & React
        </title>

        <meta
          name="description"
          content="UserItem is a lightweight, fully customizable JavaScript and React component to display users with avatars, names, emails, roles, and metadata. Built for SaaS dashboards, admin panels, internal tools, and design systems."
        />

        <meta
          name="keywords"
          content="
          useritem,
          user item,
          user component,
          react user component,
          react user card,
          react user list,
          react avatar component,
          react profile component,
          react ui component,
          react component library,
          react design system,
          javascript user component,
          javascript ui component,
          frontend ui component,
          frontend component,
          user list component,
          user profile component,
          avatar component,
          profile card component,
          user card ui,
          saas dashboard component,
          admin panel component,
          internal tools ui,
          headless ui component,
          customizable ui component,
          reusable ui component,
          npm react component,
          npm ui library,
          npm package,
          open source react component,
          frontend development,
          web app ui,
          modern ui component
          "
        />

        <meta name="author" content="Guillaume Duhan (@codewithguillaume)" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="UserItem — Customizable User Component for JavaScript & React"
        />
        <meta
          property="og:description"
          content="A flexible React and JavaScript component to display users with avatars, names, emails, and custom layouts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UserItem — Customizable User Component"
        />
        <meta
          name="twitter:description"
          content="Display users beautifully in modern React and JavaScript applications."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </head>

      <body>
        <Suspense>{children}</Suspense>
        <Toaster theme="dark" richColors position="top-right" />
      </body>
    </html>
  );
}
