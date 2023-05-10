import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import Card from "../components/Card"


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [selectedValue, setSelectedValue] = useState("")
    const [searchRegion, setSearchRegion] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])

    const regionList = ["Africa", "Americas", "Antarctic", "Asia", "Europe", "Oceania"]

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(err => console.log(err.message))
    }, [])

    useEffect(() => {
        const result = countries.filter(country => (!searchRegion || country.name.common.toLocaleLowerCase().includes(searchRegion.toLocaleLowerCase())) && (!selectedValue || country.region === selectedValue))
        setFilteredCountries(result)
    }, [countries, searchRegion, selectedValue])


    return (
        <>
            <div>
                <div>
                    <BsSearch />
                    <input 
                        type="text"
                        placeholder="Search for a country..."
                        value={searchRegion}
                        onChange={e => setSearchRegion(e.target.value)}
                    />
                </div>
                <select value={selectedValue} onChange={(e => setSelectedValue(e.target.value))}>
                    <option value="">Filter by Region</option>
                    {regionList.map((region) => <option value={region} key={region}>{region}</option>)}
                </select>
            </div>
            <div>
                {filteredCountries.map(country => {
                    const {capital, name, population, region, flags, cca3 } = country
                    return <Link to={`/details/${cca3}`} key={cca3}>
                        <Card
                            region={region}
                            capital={capital}
                            name={name}
                            population={population}
                            flags={flags}
                            key={cca3}
                        />
                    </Link>
                })}
            </div>
        </>
    )
}

export default Countries