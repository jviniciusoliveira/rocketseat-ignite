import Head from 'next/head'
import S from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={S.container}>
        <div className={S.posts}>
          <a href="#">
            <time>29 de março de 2021</time>
            <strong>Dark Mode com CSS — mudando a aparência do Blog de maneira simples e rápida</strong>
            <p>Umas das funcionalidades que está na moda em Blogs e Sites é o Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas escuros, tanto na IDE quanto em outros apps.</p>
          </a>
          <a href="#">
            <time>29 de março de 2021</time>
            <strong>Dark Mode com CSS — mudando a aparência do Blog de maneira simples e rápida</strong>
            <p>Umas das funcionalidades que está na moda em Blogs e Sites é o Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas escuros, tanto na IDE quanto em outros apps.</p>
          </a>
          <a href="#">
            <time>29 de março de 2021</time>
            <strong>Dark Mode com CSS — mudando a aparência do Blog de maneira simples e rápida</strong>
            <p>Umas das funcionalidades que está na moda em Blogs e Sites é o Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas escuros, tanto na IDE quanto em outros apps.</p>
          </a>
        </div>
      </main>
    </>
  )
}