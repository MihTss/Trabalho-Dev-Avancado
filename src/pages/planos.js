import React from 'react'
import Title from './../components/Title/index'
import CardPlanos from '../components/CardPlanos/indexplanos'

function Planos() {
  return (
    <div>
      <Title title={'Planos'} text={'Veja abaixo os planos disponíveis:'} />
      <CardPlanos />
    </div>
  )
}

export default Planos
