import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react'
import  useStores  from '../stores'


const About = observer(() => {
    const { homeStore, aboutStore } = useStores()
    return (
        <div>
        <h1>About</h1>
        <p>Home Counter: {homeStore.counter}</p>
        <p>About Counter: {aboutStore.counter}
            <button onClick={() => aboutStore.add()}>add</button>
        </p>
        <Link to='/'>回到首页</Link>
    </div>
    )
})

export default About