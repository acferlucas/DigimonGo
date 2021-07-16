import './style.scss'


type Digimon = {
  name: string
  img: string
  level : string
}

type DigimonProps = {
  digimon : Digimon
}
export function Digimon( { digimon } : DigimonProps){
  return (
    <div className={`digimon-container ${digimon.level === 'Champion' ? "champion" : ""} ${digimon.level === 'Ultimate' ? "ultimate":""}`}>
      <div>
        <img src={digimon.img} alt={digimon.img} />
      </div>
      <div className="text-area">
        <h1>{digimon.name}</h1>
        <h2>{digimon.level}</h2>
      </div>
    </div>
  )
}