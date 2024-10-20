const Feed = ({insta_info}) => {
  return (
    <>

    <div className="con" 
         style={{width: "450px", height: "400px", borderRadius: "15px", border: "1px solid black"
          }} >


    <div className="header" style={{width: "450px", height: "60px", display: "flex"}}>
      <div className="user_img" 
           style={{width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden"
      }}>
        <img src={insta_info[0].profileImg} alt="profileImg"/>
      </div>
        <h4>{insta_info[0].avatar}</h4>
    </div>

    <div className="feed"
         style={{height: "280px", overflow: "hidden"}}>
      <img src={insta_info[0].feedImg} alt="feedimg"
      style={{objectFit: "cover"}} />
    </div>

    <div className="footer">
      <form>
        <input type="text" placeholder="댓글을 입력하세요"/>
        <button>등록</button>
      </form>
    </div>
    </div>

    </>
  );
};

export default Feed;