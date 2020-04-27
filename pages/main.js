import Nav from "../components/Nav";

function WorkSlides({ name, sculp, text, video }) {
  return (
    <ul className='slides-ul'>
      <li className='slides-li'>
        <h1 className='workSlides__name'>{name}</h1>
        <div className='workSlides__video'>
          <div
            className='workSlides__img back-center'
            style={{ backgroundImage: `url(${video})` }}></div>
        </div>
        <div className='workSlides__sculp'>
          <div
            className='workSlides__img back-center'
            style={{ backgroundImage: `url(${sculp})` }}></div>
        </div>
        <div className='workSlides__text'>
          <div
            className='workSlides__img back-center'
            style={{ backgroundImage: `url(${text})` }}></div>
        </div>
      </li>
    </ul>
  );
}

const WorksImages = [
  {
    id: 1,
    workName: "Title",
    sculpture:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FNnWu7%2FbtqDKpn2My1%2F6iPu0El36vVDy2rbTHXBfk%2Fimg.png",
    text:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fc0avFQ%2FbtqDL44yLmh%2FzIMWzeKw79odpljkN7Fbyk%2Fimg.png",
    video:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FRFzRF%2FbtqDKVtxAV9%2FIkmSJGcF7irDK9WpA8wf6k%2Fimg.png",
  },
  {
    id: 2,
    workName: "number2",
    sculpture:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    text:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    video:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
  },
  {
    id: 3,
    workName: "number3",
    sculpture:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
    text:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
    video:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
  },
  {
    id: 4,
    workName: "number2",
    sculpture:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    text:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    video:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
  },
  {
    id: 5,
    workName: "number5",
    sculpture:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    text:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    video:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
  },
];

function App() {
  return (
    <div className='page-wapper main-body'>
      <Nav />
      <colume className='struct'>
        <div className='struct-wrapper'>
          <div className='struct__left back-center'>
            <canvas className='c-video'></canvas>
          </div>

          <div className='struct__middle'>
            <div className='back-center arrow-left'></div>
            <div className='back-center arrow-right'></div>
          </div>
          <div className='struct__middle-d'>
            <canvas className='back-center c-sculp'></canvas>
          </div>
          <div className='sturct__right back-center'>
            <canvas className='c-text'></canvas>
          </div>
        </div>
      </colume>
      <colume className='slide'>
        {WorksImages.map((item) => (
          <WorkSlides
            name={item.workName}
            sculp={item.sculpture}
            text={item.text}
            video={item.video}
            key={item.id}
          />
        ))}
      </colume>
    </div>
  );
}

export default App;
