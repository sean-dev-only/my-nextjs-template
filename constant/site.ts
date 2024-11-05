import { type Metadata } from 'next'

export const DOMAIN = 'example.com' // TODO
export const ROOT_URL = `https://${DOMAIN}`
export const SITEMAP_URL = `${ROOT_URL}/sitemap.xml`

export const GA_ID = `G-XYZ`

// https://dminhvu.com/post/nextjs-seo
const TITLE = 'TITLE' //TODO
const DESCRIPTION = 'DESCRIPTION' //TODO
const LOGO_URL = 'LOGO_URL' //TODO
const ALT = 'alt' //TODO
const KEYWORDS = ['abc']
const TWITTER = '@abc' // todo

export const METADATA: Metadata = {
  title: {
    template: '%s | Notion-it',
    default: TITLE,
  },
  description: DESCRIPTION,
  // https://backlinko.com/hub/seo/long-tail-keywords
  keywords: KEYWORDS,
  openGraph: {
    url: ROOT_URL,
    type: 'website',
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: LOGO_URL,
        width: 700,
        height: 170,
        alt: ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: TWITTER,
    site: TWITTER,
    images: [
      {
        url: LOGO_URL,
        width: 700,
        height: 170,
        alt: ALT,
      },
    ],
  },
  alternates: {
    canonical: ROOT_URL,
  },
  metadataBase: new URL(ROOT_URL),
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: TITLE,
  appleWebApp: {
    title: TITLE,
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
}
