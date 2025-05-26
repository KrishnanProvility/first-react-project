import './styles/main.scss';
import Search from './components/search';
import {useState, useEffect} from "react";
import Spinner from "./components/Spinner";

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const API_BASE_URL = "https://api.themoviedb.org/3";
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    const API_OPTION = {
        method: "GET",
        headers: {
            accept: "application/json",
            authorization: `bearer ${API_KEY}`
        }
    }
    const fetchMovie = async () => {
        setErrorMessage('');
        setLoading(true)
        try {
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTION);
            if (!response.ok) {
                throw new Error('failed to fetch movies');
            }
            const data = await response.json();

            if (data.Response === false) {
                setErrorMessage(data.Error || "failed to fetch movies");
                setMoviesList([]);
                return;
            }

            setMoviesList(data.results);

            console.log(data)
        } catch (e) {
            console.error(`Error fetch  movies :${e}`);
            setErrorMessage('Error Fetch Movies .... Pls try again ')
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchMovie();
    }, []);
    return (
        <main>
            <div>
                <div className="wrapper">
                    <header>
                        <img className='hero-img' src="/assets/hero-img.png" alt="hero-img"/>
                        <h1>Find the <span className="gradient-text">Movie</span> You'll Enjoy
                            Without Hassel</h1>
                        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    </header>
                    <section className="all-movies">
                        <h2 className='gradient-text mt-5'>
                            ALL Movies
                        </h2>
                        {loading ? (
                            <Spinner/>
                        ) : errorMessage ? (
                            <p className="text-red-500">{errorMessage}</p>
                        ) : (
                            <ul className="row gx-3 gy-4">
                                {moviesList.map((movie) => (
                                    <p key={movie.id} className="text-white col-6 col-md-4 col-lg-3">{movie.title}</p>
                                ))}
                            </ul>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}

export default App;
