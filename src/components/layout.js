import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import MenuBar from './menu-bar'
import AppIcon from "./app-icon"

import useAppStore from '../store/app'

const Layout = ({ children }) => {
  const apps = useAppStore(state => state.apps);

  return (
    <>
      <MenuBar />
      {apps.map(app => (
        <AppIcon
          key={app.url}
          label={app.label}
          defaultPosition={app.position}
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
