import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCoService {
  version = 'v1'
  apiUrl = `https://api-colombia.com/api/${this.version}`

  constructor(private http: HttpClient) { }

  //GENERAL INFO
  getGeneralInfo(){
    return this.http.get(`${this.apiUrl}/Country/Colombia`)
  }

  //REGION METHODS

  getRegion(region:number){
    return this.http.get(`${this.apiUrl}/Region/${region}`)
  }

  getRegionDepartments(region:number){
    return this.http.get(`${this.apiUrl}/Region/${region}/departments`)
  }

  //DEPARTMENT METHODS

  getDepartmentById(dep:number){
    return this.http.get(`${this.apiUrl}/Department/${dep}`)
  }

  getDepartmentByName(dep:string){
    return this.http.get(`${this.apiUrl}/Department/name/${dep}`)
  }

  getDepartmentCities(dep:number){
    return this.http.get(`${this.apiUrl}/Department/${dep}/cities`)
  }

  getDepartmentNaturalAreas(dep:number){
    return this.http.get(`${this.apiUrl}/Department/${dep}/naturalareas`)
  }

  getDepartmentTouristicAttractions(dep:number){
    return this.http.get(`${this.apiUrl}/Department/${dep}/touristicattractions`)
  }

  searchDepartment(dep:string){
    return this.http.get(`${this.apiUrl}/Department/search/${dep}`)
  }

  //CITY METHODS

  getCityById(city:number){
    return this.http.get(`${this.apiUrl}/City/${city}`)
  }

  getCityByName(city:string){
    return this.http.get(`${this.apiUrl}/City/name/${city}`)
  }

  searchCity(city: string){
    return this.http.get(`${this.apiUrl}/City/search/${city}`)
  }

  //PRESIDENTS METHODS

  getPresidentByName(president:string){
    return this.http.get(`${this.apiUrl}/President/name/${president}`)
  }

  searchPresident(president:string){
    return this.http.get(`${this.apiUrl}/President/search/${president}`)
  }

  //TOURISTIC ATTRACTIONS

  getTouristicAttractionById(ta:number){
    return this.http.get(`${this.apiUrl}/TouristicAttraction/${ta}`)
  }

  getTouristicAttractionByName(ta:string){
    return this.http.get(`${this.apiUrl}/TouristicAttraction/name/${ta}`)
  }

  searchTouristicAttraction(ta:string){
    return this.http.get(`${this.apiUrl}/TouristicAttraction/search/${ta}`)
  }

  //CATEGORY NATURAL AREAS METHODS

  getCategoryNaturalAreas(cna:number){
    return this.http.get(`${this.apiUrl}/CategoryNaturalAreas/${cna}`)
  }

  getNaturalAreasByCategory(cna:string){
    return this.http.get(`${this.apiUrl}/CategoryNaturalAreas/${cna}/NaturalAreas`)
  }

  //GET NATURAL AREAS METHODS

  GetNaturalAreaById(na:number){
    return this.http.get(`${this.apiUrl}/NaturalAreas/${na}`)
  }

  getNaturalAreaByName(na:string){
    return this.http.get(`${this.apiUrl}/NaturalAreas/name/${na}`)
  }

  SearchNaturalArea(na:string){
    return this.http.get(`${this.apiUrl}/NaturalAreas/search/${na}`)
  }

  //IVASIVE SPECIES METHODS

  getInvasiveSpecieById(is:number){
    return this.http.get(`${this.apiUrl}/InvasiveSpecie/${is}`)
  }

  getInvasiveSpecieByName(is:string){
    return this.http.get(`${this.apiUrl}/InvasiveSpecie/name/${is}`)
  }

  SearchInvasiveSpecie(is:string){
    return this.http.get(`${this.apiUrl}/InvasiveSpecie/search/${is}`)
  }

  //NATIVE COMMUNITY METHODS

  getNativeCommunityById(nc:number){
    return this.http.get(`${this.apiUrl}/NativeCommunity/${nc}`)
  }

  getNativeCommunityByName(nc:string){
    return this.http.get(`${this.apiUrl}/NativeCommunity/name/${nc}`)
  }

  SearchNativeCommunity(nc:string){
    return this.http.get(`${this.apiUrl}/NativeCommunity/search/${nc}`)
  }

  //GET ALL METHODS

  getAllRegions(){
    return this.http.get(`${this.apiUrl}/Region`)
  }

  getAllDepartments(){
    return this.http.get(`${this.apiUrl}/Department`)
  }

  getAllCities(){
    return this.http.get(`${this.apiUrl}/City`)
  }

  getAllTouristicAttractions(){
    return this.http.get(`${this.apiUrl}/TouristicAttraction`)
  }

  getAllPresidents(){
    return this.http.get(`${this.apiUrl}/President`)
  }

  getAllNaturalAreas(){
    return this.http.get(`${this.apiUrl}/NaturalArea`)
  }

  getAllNaturalAreasCategory(){
    return this.http.get(`${this.apiUrl}/CategoryNaturalArea`)
  }

  getAllMaps(){
    return this.http.get(`${this.apiUrl}/Map`)
  }

  getAllInvasiveSpecies(){
    return this.http.get(`${this.apiUrl}/Invasivespecie`)
  }

  getAllNativeComminuty(){
    return this.http.get(`${this.apiUrl}/NativeCommunity`)
  }



}
