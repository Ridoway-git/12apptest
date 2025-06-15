import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '12App Testers - Professional App Testing Service for Google Play Store Approval',
  description: 'Get your app approved on Google Play Store with our professional testing service. 12 real testers, 14 days testing, 99% success rate. Start from $19.99. ✓ 500+ Apps Successfully Approved ✓ 24/7 Support ✓ Money-Back Guarantee',
  keywords: 'app testing, Google Play Store approval, app testers, app review, app quality testing, app store optimization, ASO, app store testing, app store review, app store testing service, app store approval service, app store optimization service, app store testing company, app store review service, app store approval company',
  authors: [{ name: 'CodeLagbe' }],
  creator: 'CodeLagbe',
  publisher: 'CodeLagbe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://12apptesters.codelagbe.store'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '12App Testers - Professional App Testing Service for Google Play Store Approval',
    description: 'Get your app approved on Google Play Store with our professional testing service. 12 real testers, 14 days testing, 99% success rate. ✓ 500+ Apps Successfully Approved ✓ 24/7 Support ✓ Money-Back Guarantee',
    url: 'https://12apptesters.codelagbe.store',
    siteName: '12App Testers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '12App Testers - Professional App Testing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '12App Testers - Professional App Testing Service for Google Play Store Approval',
    description: 'Get your app approved on Google Play Store with our professional testing service. 12 real testers, 14 days testing, 99% success rate. ✓ 500+ Apps Successfully Approved ✓ 24/7 Support ✓ Money-Back Guarantee',
    images: ['/og-image.jpg'],
    creator: '@codelagbe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  category: 'App Testing Service',
  classification: 'App Store Optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "12App Testers",
            "description": "Professional app testing service for Google Play Store approval",
            "provider": {
              "@type": "Organization",
              "name": "CodeLagbe",
              "url": "https://12apptesters.codelagbe.store/",
              "logo": "https://12apptesters.codelagbe.store/logo.png",
              "sameAs": [
                "https://facebook.com/codelagbe",
                "https://twitter.com/codelagbe",
                "https://linkedin.com/company/codelagbe"
              ]
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "19.99",
              "highPrice": "34.99",
              "priceCurrency": "USD",
              "offerCount": "4",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Basic Plan",
                  "price": "19.99",
                  "priceCurrency": "USD",
                  "description": "App Size: 1 TO 50 MB, 14 Day Testing, 12 Real Testers, Full App Testing"
                },
                {
                  "@type": "Offer",
                  "name": "Pro Plan",
                  "price": "23.99",
                  "priceCurrency": "USD",
                  "description": "App Size: 1 TO 150 MB, 14 Day Testing, 12 Real Testers, Full App Testing, Support via AnyDesk, Bug Report"
                },
                {
                  "@type": "Offer",
                  "name": "Max Plan",
                  "price": "26.99",
                  "priceCurrency": "USD",
                  "description": "App Size: 1 TO 250 MB, 14 Day Testing, 12 Real Testers, Full App Testing, Additional Support, Bug Report, AnyDesk Help"
                },
                {
                  "@type": "Offer",
                  "name": "Bulk Purchase",
                  "price": "34.99",
                  "priceCurrency": "USD",
                  "description": "3+ Apps Testing, App Size: Up to 500 MB, All Max Plan Features, Personalized Support"
                }
              ]
            },
            "areaServed": "Worldwide",
            "serviceType": "App Testing",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "App Testing Plans",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Basic Plan",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Basic App Testing"
                      }
                    }
                  ]
                }
              ]
            }
          })}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 