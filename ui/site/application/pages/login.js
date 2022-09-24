import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import learn from './img/undraw_learning_sketching_nd4f.svg'
import { FaEnvelope, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md';
import axios from 'axios'
import React, { SyntheticEvent , useState, useEffect } from "react";
import {useRouter} from "next/router";

const Login = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-custom-color-3">
      <Head>
        <title>CriaCursos</title>
        <meta name="description" content="logo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-l px-20 text-center m-4">
        {/*quadro preto  */ }
        <div className='bg-custom-black rounded-2xl shadow-2xl flex w-10/12 max-w-6xl'>
          <div className='w-3/5 p-5 text-white' >
          <form className='flex flex-col items-center m-4 h-auto'>{/* Sing in*/}
              <div className='text-white text-left font-bold'>
                <span className='text-custom-color-2'>Cria</span>Cursos
              </div>
              <div className='py-10'>
                <h2 className='text-3xl font-bold mb-2'>Admin</h2>
                <div className='border-2 w-10 border-color-white inline-block mb-2'></div>
              </div>
              <div className='flex-col flex items-center'>
                {/* input email*/}
                <div className='bg-custom-color-3 w-64 p-2 text-white flex items-center mb-3 shadow-2xl'>
                  <FaEnvelope className='text-white m-2'/>
                  <input type="email" required name="email" id="email" placeholder='Email' className='bg-custom-color-3 outline-none text-sm flex-1'></input>
                </div>
              </div>

              {/* input senha*/}
              <div className='flex-col flex items-center'>
                <div className='bg-custom-color-3 w-64 p-2 text-white flex items-center shadow-2xl'>
                  <MdLockOutline className='text-white m-2'/>
                  <input type="password" required  name="password" id='password' placeholder='Senha' className='bg-custom-color-3 outline-none text-sm flex-1'></input>
                </div>
              </div>
                <a className='border-4 border-custom-color-3 rounded-full px-12 py-2 inline-block font-semibold mt-6 hover:bg-custom-color-3 '>Login</a>
              </form>
            </div>          
            {/* direita*/}
          <div className='w-2/5 bg-custom-color-3 text-white rounded-tr-2xl rounded-br-2xl pt-6 px-12 max-h-full h-auto'>
              <p>Lorem Ipsum</p>
              <h2 className='text-2xl font-bold mb-2 py-2 text-justify'>
                Lorem ipsum is placeholder text commonly used in the graphic.
              </h2>
              <div className='border-2 w-10 border-color-white inline-block mb-2'>
              </div>
              <Image className='' src={learn}/>
            </div> 
        </div>
      </main>

    </div>
  )
}

export default Login;