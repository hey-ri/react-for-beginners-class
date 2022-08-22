import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
    /* 
    1. application reder
    2. lading이 true니까 로딩 보여줌
    3. application이 mount된 후 우리는 getMovies function 호출 
    4.getMovies는 axios.get을 사용하고 axios.get은 완료 되기까지 시간이 조금 필요해서 await를 넣어준다. 
    5. async await를 하는 것은 우리가 js에게 getMovies function이 시간이 좀 필요하고 우리는 그걸 기다려야 한다는 것을 말하는 것
    */
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } =
            await axios.get(
                "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
            ); /* data를 잡기 위해 const movies라고 지정 axious는 느리기 때문에 js에게 componentDidMount가 끝날 때 까지 약간 시간이 걸릴 수 있다고 말해야 된다. 그래서 새로운 함수를 생성하고 async = await으로 만들어주고 그걸 호출 해줘도 된다. => 이 함수가 비동기라고 말한 것. 너는 이걸 기다려야해 라는 뜻이다.  */
        this.setState({ movies, isLoading: false });
    };
    async componentDidMount() {
        /*   setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000); */
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading
                    ? "Loading"
                    : movies.map((movie) => (
                          <Movie
                              key={movie.id}
                              id={movie.id}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                          />
                      ))}
            </div>
        );
    }
}

export default App;
