import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab'
import SearchIcon from '@material-ui/icons/Search'

type SearchFunction = (company: string) => void;
type FilterCompanyFunction = (company: string) => void;

export interface Props {
    filter: string;
    changeFilterCompany: FilterCompanyFunction;
    loadMembers: SearchFunction;
}


const handleSearch = (onSearchFunction: SearchFunction) => (company: string) => (event) => onSearchFunction(company);
const handleOnChange = (filterFunction: FilterCompanyFunction) => (event: React.ChangeEvent<HTMLInputElement>) => filterFunction(event.target.value);

export const SearchArea = (props: Props) => (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-evenly'}}>
        <TextField
            id="outlined-full-width"
            label="Seach company"
            style={{margin: 8}}
            placeholder='Input the company name'
            helperText="Click search to find company"
            margin="normal"
            variant="outlined"
            onChange={handleOnChange(props.changeFilterCompany)} value={props.filter}
        />
        <Fab variant="extended" color="primary" aria-label="Search" onClick={handleSearch(props.loadMembers)(props.filter)}>
            <SearchIcon/>
            Search
        </Fab>
    </div>
);
