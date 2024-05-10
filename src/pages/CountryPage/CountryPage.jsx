
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { countriesAPI } from "../../api/countries-api"
import { useState } from "react"
import s from './CountryPage.module.css'


export const CountryPage = (props) => {

	const {name}=useParams()
	const [country,setCountry]=useState(null)

	useEffect(()=>{
		countriesAPI.getCountryByName(name).then((res)=>{
			setCountry(res.data[0])
			props.changeIsLoading(false)
		}).catch((err)=>console.log(err))
	},[name])


	
	return (

		<div>
			{props.isShowContent && 
			<div className={s.countryPage}>
				<img className={s.img} src={country?.flags.png} alt="flag" />
				<h1 className={s.title}>{country?.name.common}</h1>
				<div><span className={s.paragraph}>capital: </span>{country?.capital}</div>
				<div><span className={s.paragraph}>continents: </span>{country?.continents}</div>
				</div>}
		
		</div>

		
	)
}

