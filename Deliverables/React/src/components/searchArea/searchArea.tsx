import * as React from "react";

type SearchFunction = () => void;

export interface Props {
    defaultValue: string;
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: SearchFunction;
}

const handleKeyPress = (onSearchFunction: SearchFunction) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
        onSearchFunction();
    }
};

export const SearchArea = (props: Props) => (
    <>
        <input type="text" placeholder='Input the company name' onKeyPress={handleKeyPress(props.onSearch)}
               onChange={props.onChangeInput} value={props.defaultValue}/>
        <button onClick={props.onSearch}>Search</button>
    </>
);
