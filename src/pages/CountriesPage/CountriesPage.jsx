import { useEffect } from "react"
import { useState } from "react"
import { countriesAPI } from "../../api/countries-api"
import { Grid } from "@mui/material"
import { CountryCard } from "../../ui/Card/CountryCard"
import { Link } from "react-router-dom"

export const CountriesPage = (props) => {
	const [countries,setCountries]=useState([])

	const handleChangeIsLoading=()=>{
		props.changeIsLoading(false)
	}

	const handleChangeError=(error)=>{
		props.changeError(error)

	}

	useEffect(()=>{
		countriesAPI.getCountries('all').then((res)=>setCountries(res.data)).catch((err)=>handleChangeError(err)).finally(()=>handleChangeIsLoading())
	},[])

	
	return (
		<Grid container spacing={2}>
			{countries.map((country)=>
			  <Grid key={country.name.common} item xs={4}>
					<Link to={`/${country.name.common}`}>
					  <CountryCard flag={country.flags.png} altFlag ={country.flags.alt} name={country.name.official} capital={country.capital}/>
					</Link>
				</Grid>
			)}

		</Grid>
	)
}

