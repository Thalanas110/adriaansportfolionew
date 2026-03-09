import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import { NuclearSnow } from '@/components/portfolio/nuclear-snow'
import { getBaseUrl } from '@/server/functions/request'
import {
  createOGMetaTags,
  generateOGImageUrl,
  OGImageConfig,
  OGMetaTags,
} from '@/lib/og-config'

interface MyRouterContext {
  queryClient: QueryClient
}

const scripts: React.DetailedHTMLProps<
  React.ScriptHTMLAttributes<HTMLScriptElement>,
  HTMLScriptElement
>[] = []

if (import.meta.env.VITE_INSTRUMENTATION_SCRIPT_SRC) {
  scripts.push({
    src: import.meta.env.VITE_INSTRUMENTATION_SCRIPT_SRC,
    type: 'module',
  })
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  loader: async () => {
    const baseUrl = await getBaseUrl()

    return {
      baseUrl,
    }
  },
  head: ({ loaderData }) => {
    const baseUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : (loaderData?.baseUrl ?? 'http://localhost:8500')

    const config: OGImageConfig = {
      isCustom: false,
    }

    const ogImageUrl = generateOGImageUrl(config, baseUrl)

    const metadata: OGMetaTags = {
      title: 'Nuclear Wasteland Portfolio',
      description:
        'A toxic biohazard-styled, post-thermonuclear war portfolio website showcasing software engineering, QA, and aviation projects with a radioactive wasteland aesthetic.',
      image: ogImageUrl,
      url: typeof window !== 'undefined' ? window.location.href : baseUrl,
    }

    const ogTags = createOGMetaTags(metadata)

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: 'Nuclear Wasteland Portfolio' },
        {
          name: 'description',
          content:
            'A toxic biohazard-styled, post-thermonuclear war portfolio website showcasing software engineering, QA, and aviation projects with a radioactive wasteland aesthetic.',
        },
        ...ogTags.meta,
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap',
        },
      ],
      scripts: [...scripts],
    }
  },

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <style>{`
         html, body {
           background-color: #060604 !important;
           color: #39FF14;
           margin: 0;
           padding: 0;
           scroll-behavior: smooth;
         }
         * {
           box-sizing: border-box;
         }
         ::-webkit-scrollbar {
           width: 6px;
         }
         ::-webkit-scrollbar-track {
           background: #0A0A06;
         }
         ::-webkit-scrollbar-thumb {
           background: #39FF14;
           box-shadow: 0 0 6px #39FF14;
         }
         ::selection {
           background: rgba(57,255,20,0.3);
           color: #CAFF00;
         }
       `}</style>
      </head>
      <body style={{ backgroundColor: '#060604' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NuclearSnow />
          {children}
          <Toaster />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
