![goStack](.github/gostack.png)
<h1 align="center">
  🚀 Conceitos ReactJS 🚀
</h1>

<p>
  Esse é o cliente Web em ReactJS, para a api desenvolvida no <a href="https://github.com/lucascprazeres/conceitos-nodejs">desafio anterior</a>. Com suporte para criar, deletar e curtir os repositórios fake.
</p>

<h2 align="center">
  Sobre 🤓
</h2>

<p>
  Esse Repositório de desafio do bootcamp busca trazer, na prática os 3 pilares do React, que são Componentização, Propriedades e os conceitos de Estado e Imutabilidade, através de uma interface simples.
</p>

<h2 align="center">
  🔍 Revisão Relâmpago ⚡
</h2>
<ul>
<li>
  <Strong>Componentes</Strong>: Unidades isoláveis e funcionais de JSX e estilização
  
  ```javascript
  function App() {
      return (
        <header>
          Conteúdo do Cabeçalho
        </header>
      )
    }
  ```
</li>
<li>
  <Strong>Propriedades</Strong>: Valores passados como parâmetros, de um componente a outro
  
  ```javascript
  function App() {
    return <Header title="ReactJS" />
  }
  ```
  ```javascript
  function Header(props) {
      return <header>{props.title}</header>
    }
  ```
</li>
<li>
  <Strong>Estado e imutabilidade</Strong>: O estado de um componente é o valor de determinadas variáveis internas, de acordo com o contexto. Esses valores, por sua vez <em>só</em> devem ser alterados com as funções 'setNomeDoEstado' (imutabilidade)
  
  ```javascript
    import React, { useState } from 'react';

    function App() {
      const [title, setTitle] = useState('');

      return <Header title={title} />
    }
  ```
</li>
</ul>

<h2 align="center">
  <strike>Não</strike> Tente isso em Casa! ⚠️
</h2>

```bash
  #  clone o repositório
  git clone link

  #  navegue até o repositório clonado
  cd conceitos-reactjs

  #  baixe as dependências
  yarn

  #  divirta-se!
  yarn start
```
<h2 align="center">
  Esse conhecimento te ajudou? 😍
</h2>

<p>
  Avalie o repositório com uma ⭐ para que mais devs possam vê-lo! 🚀
</p>

<hr>

<p align="center">
  Feito com 💜 por <a href="https://www.linkedin.com/in/lucas-prazeres/">Lucas dos Prazeres</a>
</p>