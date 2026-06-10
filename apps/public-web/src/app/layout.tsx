import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'DocPublish',
    template: '%s | DocPublish',
  },
  description: 'Plateforme de publication et de consultation de documents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <header className="site-header">
          <div className="container">
            <nav className="navbar">
              <Link href="/" className="logo">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1.5L16.5 9L9 16.5L1.5 9L9 1.5Z"
                    stroke="#5d5d5e"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 5L13 9L9 13L5 9L9 5Z"
                    fill="#575757"
                    opacity="0.35"
                  />
                </svg>

                <span className="logo-title">
                  DocPublish
                </span>
              </Link>

              <div className="nav-links">
                <Link href="/?lang=fr">Documents FR</Link>
                <Link href="/?lang=other">Autres langues</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <div className="container">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="container footer-content">
            <div>
              <strong>DocPublish</strong>
              <p>
                Plateforme de publication et de diffusion de documents.
              </p>
            </div>

            <div className="footer-meta">
              <span>Sakly Firas — Technical Assessment</span>
              <span>© 2026</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}