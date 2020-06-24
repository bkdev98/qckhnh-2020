import React from 'react'
import create from 'zustand'
import {RiSpotifyLine, RiCustomerService2Line, RiCustomerServiceLine, RiDeleteBinLine, RiDeleteBin5Line, RiBearSmileLine} from 'react-icons/ri'

const [useStore] = create(set => ({
  apps: [
    {label: 'Projects', position: {x: 50, y: 50}, url: 'projects'},
    {label: 'Blog', position: {x: 50, y: 150}, url: 'blog'},
    {label: 'Tutorials', position: {x: 50, y: 250}, url: 'tutorials'},
    {label: 'Spotify', position: {x: 50, y: 350}, url: 'spotify', icon: <RiSpotifyLine />},
    {label: 'Consulting Service', position: {x: 140, y: 50}, url: 'consulting', icon: <RiCustomerServiceLine />, iconActive: <RiCustomerService2Line />},
    {label: 'Bear', position: {x: 140, y: 150}, url: 'bear', icon: <RiBearSmileLine />},
    {label: 'Trash', position: {x: 140, y: 250}, url: 'trash', icon: <RiDeleteBinLine />, iconActive: <RiDeleteBin5Line />},
  ],
  updatePosition: (key, position) => set(state => ({
    apps: state.apps.map(app => app.url === key ? {...app, position} : app),
  })),
}))

export default useStore
