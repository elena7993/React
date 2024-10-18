const weeklyMenus = [
  {
    id: 0,
    week: "목요일",
    break: "샌드위치",
    lunck: "커피",
    dinner: "된장찌개"
  },
  {
    id: 1,
    week: "금요일",
    break: "요커트",
    lunck: "커피",
    dinner: "라자냐"
  },
  {
    id: 2,
    week: "토요일",
    break: "오트밀",
    lunck: "커피",
    dinner: "순두부찌개"
  },
  {
    id: 3,
    week: "일요일",
    break: "랩",
    lunck: "커피",
    dinner: "청국장"
  }
];

const MapEx03 = () => {
  return(
    <div>
       {weeklyMenus.map((menu) => (
         <div key={menu.id}>
          <h2>{menu.week}</h2>
          <ul>
            <li>아침매뉴: {menu.break}</li>
            <li>점심매뉴: {menu.lunck}</li>
            <li>저녁매뉴: {menu.dinner}</li>
         </ul>
         </div>
       ))}
    </div>
  )
}

export default MapEx03;