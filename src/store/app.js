import React from 'react'
import create from 'zustand'
import {
  // RiSpotifyLine,
  RiCustomerService2Line,
  RiCustomerServiceLine,
  // RiDeleteBinLine,
  // RiDeleteBin5Line,
  // RiBearSmileLine,
  RiQuillPenLine,
  RiAppsLine,
  RiApps2Line,
  RiCodeSLine,
  RiCodeSSlashLine,
} from 'react-icons/ri'

const [useStore] = create(set => ({
  apps: [
    {label: 'Projects', url: 'projects', icon: <RiApps2Line />, iconActive: <RiAppsLine />},
    {label: 'Blog', url: 'blog', icon: <RiQuillPenLine />},
    {label: 'Tutorials', url: 'tutorials', icon: <RiCodeSLine />, iconActive: <RiCodeSSlashLine />},
    // {label: 'Spotify', url: 'spotify', icon: <RiSpotifyLine />},
    {label: 'Consulting Service', url: 'consulting', icon: <RiCustomerServiceLine />, iconActive: <RiCustomerService2Line />},
    // {label: 'Bear', url: 'bear', icon: <RiBearSmileLine />},
    // {label: 'Trash', url: 'trash', icon: <RiDeleteBinLine />, iconActive: <RiDeleteBin5Line />},
  ],
  updatePosition: (key, position) => set(state => ({
    apps: state.apps.map(app => app.url === key ? {...app, position} : app),
  })),
}))

export default useStore
