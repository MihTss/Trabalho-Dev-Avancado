import './cardplanos.css'

const planos = [
  {
    nome: 'Básico',
    valor: 'R$20,00',
    prazo: 'MENSAL'
  },
  {
    nome: 'Básico',
    valor: 'R$35,00',
    prazo: 'TRIMESTRAL  '
  },
  {
    nome: 'Básico',
    valor: 'R$50,00',
    prazo: 'ANUAL'
  }
]

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{plano.nome} </h5>
                <p>{plano.valor}</p>
                <p>{plano.prazo}</p>
                <a href={`/detalhes/${plano.nome}`}>
                  <div className="btn btn-primary">Adquirir</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
