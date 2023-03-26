import Head from "next/head"
import Image from "next/image"
import styles from '../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

      <div>
        <form>
          <Input 
            placeholder="Digite seu email :"
            type="text"
          />

          
          <Input 
            placeholder="Digite sua senha :"
            type="password"
          />

          <Button
            type="submit"
            loading={false} 
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
    </>
  )
}
