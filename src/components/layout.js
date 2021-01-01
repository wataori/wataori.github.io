import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ol class="header-link-nav">
          <li class="header-link-nav-item">
            <Link className="header-link-nav-item-link" to="/">
              Top
            </Link>
          </li>
          <li class="header-link-nav-item">
            <Link className="header-link-nav-item-link" to="/about">
              About
            </Link>
          </li>
        </ol>
      </div>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ol class="header-link-nav">
          <li class="header-link-nav-item">
            <Link className="header-link-nav-item-link" to="/">
              Top
            </Link>
          </li>
          <li class="header-link-nav-item">
            <Link className="header-link-nav-item-link" to="/about">
              About
            </Link>
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} <a href="/">{title}</a>
      </footer>
    </div>
  )
}

export default Layout
