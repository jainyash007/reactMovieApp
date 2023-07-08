import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "False", msg: " " });
    const [query, setQuery] = useState("Avengers")

    const getMovies = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if(data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
            }
            else {
                setIsError({
                    show: "True",
                    msg: data.Error,
                })
            }
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 200)
        return () => clearTimeout(timerOut);
    }, [query]);

    return <AppContext.Provider value={{isLoading, movie, isError, query, setQuery}}>
        {children}
    </AppContext.Provider>
}

//global
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};