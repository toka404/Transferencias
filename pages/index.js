import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rock Socks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gracias por comprar en Rock Socks" />
        <p className="description">
       </p>
          Cuenta de ahorros Banco Pichincha  
          Número de  cuenta 3220352100  
          Número de cédula 1716761372  
          Nombres Danilo Roberto Flores Miranda 
          Correo dannygrfmetal@hotmail.com 
          Teléfono 0962738860   
          Cuenta de ahorros produbanco 
          Número de cuenta 12798089828
          Número de cédula 1716761372
          
     
      </main>

      <Footer />
    </div>
  )
}
