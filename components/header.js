import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/object?object=test" as="/object/test">
          <a>Test</a>
        </Link>
        <style jsx>{`
          header {
            margin-bottom: 0.5rem;
          }

          header a {
            text-decoration: none;
            margin-right: 0.5rem;
          }

          header a:visited {
            color: blue;
          }
        `}</style>
      </header>
    );
  }
}
