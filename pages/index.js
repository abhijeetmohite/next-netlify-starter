import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta name="google-site-verification" content="uqIgiwHvtkvyxBjIumRTPD7JLOV8D3-0xT7gOEZ2EO8" />
<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-C32TYHJCLL"
  />

  <script
    dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C32TYHJCLL');
        `,
    }}
  />
        <title>Next.js Abhijeet Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
