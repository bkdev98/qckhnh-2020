import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import MenuBar from './menu-bar'
import AppIcon from "./app-icon"

import useAppStore from '../store/app'
import useWindowSize from '../utils/useWindowSize'

const Layout = ({ children }) => {
  const apps = useAppStore(state => state.apps);
  const size = useWindowSize();

  return (
    <>
      <MenuBar />
      {apps.map((app, index) => (
        <AppIcon
          key={app.url}
          label={app.label}
          position={app.position || {x: size?.width - 100, y: 50 + 100 * index}}
          url={app.url}
          icon={app.icon}
          iconActive={app.iconActive}
        />
      ))}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
