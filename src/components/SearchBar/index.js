import React, {useState,useEffect, useRef} from "react";
import {Wrapper, Content} from "./SearchBar.styles";

//image
import searchIcon from "../../images/search-icon.svg";



const SearchBar = ({ setSearchTerm }) =>{
    const [state, setState] = useState("");
    const initial = useRef(true);


    //Omo i am really tired at this point


    //Used to skip the initial render
    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }
    })

    useEffect(()=>{
        //Creating a Timer for the search component delay
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        }, 500)

        //Stop the timer
        return () => clearTimeout(timer)
    },[setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon"/>
                <input 
                    type="text" 
                    placeholder="Search Movie" 
                    onChange={event => setState(event.currentTarget.value)} 
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar