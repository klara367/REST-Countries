import { CardStyle } from "../styles/CardStyle"

const Card = ({ region, name, population, capital, flags }) => {
    return (
        <CardStyle> 
        <img src={flags.png} alt={flags.alt} height={"163px"} />
        <div>
                <p>{name.common}</p>
                <p><span>Population: </span>{population.toLocaleString()}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Capital: </span>{capital}</p>
        </div>
    </CardStyle>
    )
}

export default Card