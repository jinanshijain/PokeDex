import useDebounce from '../../hooks/useDebounce';
import './Search.css';


function Search({updateSearchTerm}){
 const debounceUpdeateSearch=useDebounce((e)=>updateSearchTerm(e.target.value))
    return(

    <input 
    id='search-pokemon' 
    type="text" 
    placeholder='Which pokemaon you are looking for' 
    onChange={debounceUpdeateSearch}/>
    
)
}
export default Search;