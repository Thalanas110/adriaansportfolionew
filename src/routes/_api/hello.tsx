import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_api/hello')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return new Response('Hello, World! from ' + request.url)
      },
    },
  },
})

/*
 * this is just a testing when setting up stuff.
 * I'll not delete this in fear of messing up anything as I am not that used to tanstack start
 * and router yet, but this is by far one of the best frameworks I have worked with, mainly because
 * this is literally pure SSR and SEO optimized, unlike when manually building it using the vanilla react/vite.
 */
