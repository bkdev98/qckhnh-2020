import create from 'zustand'

const [useStore] = create(set => ({
  apps: [
    {label: 'Projects', position: {x: 50, y: 50}, url: 'projects'},
    {label: 'Blog', position: {x: 50, y: 150}, url: 'blog'},
    {label: 'Tutorials', position: {x: 50, y: 250}, url: 'tutorials'},
  ],
  updatePosition: (key, position) => set(state => ({
    apps: state.apps.map(app => app.url === key ? {...app, position} : app),
  })),
}))

export default useStore
