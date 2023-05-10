import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { HiOutlineArrowLeft } from "react-icons/hi"

const CountryDetails = () => {
    const [countries, setCountries] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            setCountries(data)
            setIsLoaded(true)
        })
        .catch(err => console.log(err.message))
    }, [])

    let { cca3 } = useParams()

    let country = countries.find(one => one.cca3 === cca3)


    return(
        <>
            <div>
                <Link to={"/"}><HiOutlineArrowLeft />Back</Link>
            </div>

            <div>
                {isLoaded ? 
                    <div>
                        <img src={country.flags.svg} alt={country.flags.alt} />
                        <div>
                            <h2>{country.name.common}</h2>
                            <div>
                                <div>
                                    <p><span>Native name: </span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}</p>
                                    <p><span>Population: </span>{country.population.toLocaleString()}</p>
                                    <p><span>Region: </span>{country.region}</p>
                                    <p><span>Sub region: </span>{country.subregion}</p>
                                    <p><span>Capital: </span>{country.capital}</p>
                                </div>
                                <div>
                                    <p><span>Top Level Domain: </span>{country.tld}</p>
                                    <p><span>Currencies: </span>{Object.values(country.currencies)[0].name}</p>
                                    <p><span>Languages: </span>{Object.values(country.languages).join(", ")}</p>
                                </div>
                            </div>
                            <div>
                                <p><span>Border countries: </span></p>
                                <ul>{country.borders ? country.borders.map(border => <li key={border}><Link to={`/details/${border}`}>{border}</Link></li>) : <p>No border countries</p>}</ul>
                            </div>
                        </div>
                    </div>
                : <p>Loading details...</p>}
            </div>
        </>
    )
}

export default CountryDetails