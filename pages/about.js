import Navigation from '../components/naviagtion'
import Head from 'next/head'

const About = () => (
  <>
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
    <Navigation />
    <div>
      <h3>About Page</h3>
      <p> This is the about view of SPA</p>
      <h4>1914 translation by H. Rackham</h4>
        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
    </div>
    </div>
  </>
)

export default About