import React from 'react'
import HomeStore from './home'
import AboutStore from './about'


const storeContext = React.createContext({
    // 组件首字母大写，对象首字母小写
    homeStore: new HomeStore(),
    aboutStore: new AboutStore()
})

const useStores = () => React.useContext(storeContext)

export default useStores