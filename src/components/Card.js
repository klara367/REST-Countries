const Card = ({ region, name, population, capital, flags }) => {
    return (
        <article> 
        <img src={flags.png} alt={flags.alt} height={"163px"} />
        <div>
                <p>{name.common}</p>
                <p><span>Population: </span>{population.toLocaleString()}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Capital: </span>{capital}</p>
        </div>
    </article>
    )
}

export default Card