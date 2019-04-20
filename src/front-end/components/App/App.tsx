import React from 'react'
import Navbar from '../Navbar'
import PageLayout from '../PageLayout'
import Footer from '../Footer'
import { Map } from 'immutable'

import './styles.css'

import 'bootstrap'

import '../../assets/css/resets.css'
import '../../assets/css/fonts.css'
import '../../assets/css/typography.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export interface MyInfo { name: string; age: number; }


const App = (props: MyInfo) =>
  <h1>My name is {props.name} and I am {props.age - 2} years old.</h1>

export default App


/* 

  <div>
    <Navbar />
    <PageLayout />
    <Footer />
  </div>
*/