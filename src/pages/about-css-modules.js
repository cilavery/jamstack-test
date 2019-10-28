import React from 'react'
import {Header, Layout } from '../components'
import styles from './about-css-modules.module.css'

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt=""/>
    <div className={styles.description}>
      <h2 classname={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
  <Layout>
    <Header headerText="About CSS Modules"></Header>
    <p>CSS Modules are cool</p>
    <User
      username="Cil"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="Hi it's me, being weird"
    />
     <User
      username="Dawn"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="Hi it's me, also being weird"
    />
  </Layout>
)