import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
// 로딩 중이라는 것을 보여주고 로딩이 끝났을 떄 영화를 보여줌
 const [loading, setLoading] = useState(true); //기본값이 true
 const [movies, setMovies] = useState([]); //기본값이 비어있는 array. 시작할 땐 비어있는 array인데 data가 온 후에는 배열을 채워넣음   
//다음은 이 줄을 대체함
//  fetch(
//    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//  ).then((response) => response.json())                           //response를 받아오고 받아온 response에서 json파일을 얻음
//  .then((json) => {
//    setMovies(json.data.movies);                                 
//    setLoading(false);                                        
const getMovies = async() => {
    const json = await (
        await fetch( //await는 .then과 같은 역할을 함
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
    ).json();
    setMovies(json.data.movies);//fetch를 진행한 후 movie는 json.data.movies
    setLoading(false);//로딩이 끝났기 때문에 false로 만들어줘야 함
};
useEffect(() => {getMovies();}, []);
 //컴포넌트가 시작할 때만 어떠한 코드를 딱 한 번 실행시킨다. 
 //no dependencies = react.js가 지켜보아야 하는 것들. 그것들이 변화할 때, react.js가 코드를 실행
return (
 //다음에서 만약에 로딩이면 Loading..이라고 표시 : 로딩이 아니라면 영화들을 보여줌(=state로 부터 받아온 데이터를 보여주는 것임. State는 그 data를 API로 부터 받아옴.)
<div>
{loading ? (<h1>Loading...</h1>) :
(
<div>    
{movies.map((movie) => (
    <Movie
    key={movie.id} 
    id={movie.id}
    coverImg={movie.medium_cover_image} 
    title={movie.title} 
    summary={movie.summary} 
    genres={movie.genres}
    />
))}
</div>
)}
</div>
); 
}
export default Home;
