const movies = [
  {
    id: 0,
    title: "기생충",
    director: "봉준호",
    mainActor: "송강호, 이선균, 조여정"
  },
  {
    id: 1,
    title: "박쥐",
    director: "박찬욱",
    mainActor: "김옥빈, 최민식, 송강호"
  },
  {
    id: 2,
    title: "타짜",
    director: "최동훈",
    mainActor: "조승우, 김혜수, 백윤식"
  }
];

const Contents_01 = () => {
  return (
    <>
    <div>
      {movies.map((movie) => 
      <div key={movie.id}>
        <h2>영화: {movie.title}</h2>
        <ul>
          <li>감독: {movie.director}</li>
          <li>주연배우: {movie.mainActor}</li>
        </ul>
      </div>
      )}

    </div>
      
    </>
  )
};

export default Contents_01;

// ********export 잊지말자**************