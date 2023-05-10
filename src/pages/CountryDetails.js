import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { BackBtnStyle, BtnWrapperStyle } from "../styles/BackBtnStyle"
import { BorderBtnsStyle, BorderCountriesWrapperStyle, CountryDetailsStyle, FlexInfoStyle, ShowDetailsStyle } from "../styles/CountryDetailsStyle"

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
        <main>
            <BtnWrapperStyle>
                <BackBtnStyle to={"/"}><HiOutlineArrowLeft />Back</BackBtnStyle>
            </BtnWrapperStyle>

            <CountryDetailsStyle>
                {isLoaded ? 
                    <ShowDetailsStyle>
                        <img src={country.flags.svg} alt={country.flags.alt} />
                        <div>
                            <h2>{country.name.common}</h2>
                            <FlexInfoStyle>
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
                            </FlexInfoStyle>
                            <BorderCountriesWrapperStyle>
                                <p><span>Border&nbsp;countries: </span></p>
                                <ul>{country.borders ? country.borders.map(border => <li key={border}><BorderBtnsStyle to={`/details/${border}`}>{border}</BorderBtnsStyle></li>) : <p>No border countries</p>}</ul>
                            </BorderCountriesWrapperStyle>
                        </div>
                    </ShowDetailsStyle>
                : <p>Loading details...</p>}
            </CountryDetailsStyle>
        </main>
    )
}

export default CountryDetails