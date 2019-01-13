import * as React from "react";

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
    <>
        <input type="text" placeholder='Input the company name'
               onChange={handleOnChange(props.changeFilterCompany)} value={props.filter}/>
        <button onClick={handleSearch(props.loadMembers)(props.filter)}>Search</button>
    </>
);
