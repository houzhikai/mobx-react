import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react'
import  useStores  from '../stores'

const Home = observer(() =>{
    const { homeStore } = useStores()
    return (
        <div>
        <h1>Home</h1>
        <p>Home Counter: {homeStore.counter}
            <button onClick={() =>homeStore.add()}>add</button>
        </p>
        <Link to='/about'>跳转到about页面</Link>
    </div>
   )
} )


export default Home