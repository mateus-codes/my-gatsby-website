import React from "react"
import Layout from "../components/Layout"
import profileImg from '../../static/mateus2.jpg'
import HomeStyles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <div>
        <div className={HomeStyles.image}>
          <img src={profileImg} alt="Mateus S. Souza" width="180" height="180" />
        </div>
        <h1>
          Mateus S. Souza
      </h1>
      </div>

    </Layout>
  )
}