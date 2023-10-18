import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return <div>
    <img src={coverImg} alt={title} />
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => <li key={g}>{g}</li>)}
    </ul>
  </div>;
}

Movie.propTypes = {
    id:propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;

//map함수가 하는 것은 array를 가져가서 그 array를 각각의 item을 변형시킴.
//즉, 불러온 데이터의 ararry를 새로운 array만듬. 새로운 array의 item들은 이전의 array에서 내가 원하는 대로 변형된 item임 
//key값을 반드시 입력해줘야함.(key값은 고유한 값. 아직까지는 거의 고유한 id를 사용하는 것 같음)


