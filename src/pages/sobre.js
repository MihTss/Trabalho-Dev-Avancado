import React from 'react'
import { useParams } from 'react-router-dom'
import Title from './../components/Title/index'

function Sobre() {
  const { name } = useParams()

  return (
    <div>
      <Title title={'Sobre'} />
      <div className="container">
        <div className="row display-flex align-itens-center">
          <div className="col" key="1">
            <div className="pt-5">
              <p className="card-text pt-5">
                Universidade Positivo <br></br> Uma universidade reconhecida
                nacionalmente pela promoção de uma sociedade justa e
                sustentável, pelo desenvolvimento de competências profissionais
                e pelo impacto social, econômico e ambiental de sua pesquisa e
                extensão.
              </p>
            </div>
          </div>
          <div className="col" key="2">
            <img
              src={'/assets/images/positivo.png'}
              className
              class="img-fluid img-thumbnail rounded-circle w-75 p-3"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre
