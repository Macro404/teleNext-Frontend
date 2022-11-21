export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <header></header>
            <nav>
                <ul>Phones</ul>
                <ul>Subscriptions</ul>
                <ul>About us</ul>
                <ul>FAQ</ul>
            </nav>
            {children}
            </body>
      </html>
    );
  }