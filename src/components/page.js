import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'alpine home air'

const nav = [
  {
    url: '/',
    text: 'home',
  },
  {
    url: '/users',
    text: 'users',
  },
  {
    url: '/albums',
    text: 'albums',
  },
]

const Page = ({ title = DEFAULT_TITLE, children }) => {
  const { pathname } = useRouter()
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-cobalt dark:text-gray-100 text-cobalt">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta name="description" content="alpine home air" />
        <meta name="theme-color" content="#193549" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon.png" />
        <link
          href="splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <title>
          {title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
        </title>
      </Head>
      <header>
        <nav className="px-2 py-1 text-lg">
          <ul className="flex justify-center space-x-3 md:justify-start">
            {nav.map(({ url, text }) => (
              <li
                key={url}
                className={
                  pathname === url || pathname.includes(`${url}/`)
                    ? 'border-b-2 border-cobalt dark:border-gray-100'
                    : 'hover:border-b-2 hover:border-cobalt dark:hover:border-gray-100'
                }
              >
                {pathname === url ? (
                  <span>{text}</span>
                ) : (
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
      <footer className="pb-4 text-2xl text-center text-gray-100 lg:pt-4 bg-cobalt dark:bg-cb-dark-blue sm:text-3xl">
        <div className="lg:container lg:mx-auto lg:max-w-3xl">
          <div>
            built{' '}
            <a
              className="font-semibold hover:underline text-cb-yellow"
              href="https://with-bacon.niel.to"
              target="_blank"
              rel="noopener noreferrer"
            >
              with bacon{' '}
              <span role="img" aria-label="bacon">
                🥓
              </span>
            </a>
          </div>
          <ul className="flex justify-center space-x-4 text-xl">
            <li>
              <a
                className="hover:underline text-cb-pink"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                next.js
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-cb-pink"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                tailwind.css
              </a>
            </li>
            <li>
              <a
                className="hover:underline text-cb-pink"
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Page
