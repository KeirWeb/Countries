import axios from "axios";


const countries = axios.create({
	baseURL:'https://restcountries.com/v3.1'
})


export const countriesAPI={
	getCountries(){
		return countries.get('all')
	},
	getCountryByName(name){
		return countries.get(`name/${name}`)
	}
}