

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <header>
                <Link href='/' className="home-link">
                <h1>teleNext</h1>
                </Link>
            </header>
            <nav className="nav-bar">
            <Link href='/phones' className="phones-link">
            <h1>Phones</h1>
            </Link>
            <Link href='/about_us' className="about-us-link">
            <h1>About us</h1>
            </Link>
            <Link href='/faq' className="faq-link">
            <h1>FAQ</h1>
            </Link>
            </nav>
            {children}

            <footer></footer>
            </body>
      </html>
    );
  }