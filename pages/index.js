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
          Cuenta de ahorros Banco Pichincha  <br>
          Número de  cuenta 3220352100  <br>
          Número de cédula 1716761372  <br>
          Nombres Danilo Roberto Flores Miranda <br>
          Correo dannygrfmetal@hotmail.com <br>
          Teléfono 0962738860   <br>
<br>
<br>
          Cuenta de ahorros produbanco <br>
          Número de cuenta 12798089828<br>
          Número de cédula 1716761372<br>
          
     
      </main>

      <Footer />
    </div>
  )
}
