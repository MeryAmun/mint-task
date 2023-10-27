import './styles.css'


const GuildCard = ({data}) =>  (
    <div className={data.name ? 'guild__cardBordered' :"guild__card"}>
    <h4>{data.name}</h4>
    </div>
  )


export default GuildCard