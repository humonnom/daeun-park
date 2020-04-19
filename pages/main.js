import Nav from "../components/Nav";

function WorkSlides({ name, sculp, text, paint }) {
  return (
    <li className='Slides-li'>
      <div className='Slides-each'>
        <h1 className='workSlides__name'>{name}</h1>
        <img
          className='workSlides__img workSlides__sculp'
          src={sculp}
          alt={name}
        />
        <img
          className='workSlides__img workSlides__text'
          src={text}
          alt={name}
        />
        <img
          className='workSlides__img workSlides__paint'
          src={paint}
          alt={name}
        />
      </div>
    </li>
  );
}

const WorksImages = [
  {
    id: 1,
    workName: "number1",
    sculpture:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
    text:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
    painting:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
  },
  {
    id: 2,
    workName: "number2",
    sculpture:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    text:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    painting:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
  },
  {
    id: 3,
    workName: "number3",
    sculpture:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
    text:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
    painting:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/83654878_511828932776519_3982025168380755968_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=4zFFIxMXw8MAX9RaSMk&_nc_ht=scontent-ssn1-1.xx&oh=505d1d97f3cabcae17fda2e223f44b43&oe=5EBDD2E7",
  },
  {
    id: 4,
    workName: "number2",
    sculpture:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    text:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
    painting:
      "https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppy-memes-268-59097e2b67e44__700.jpg",
  },
];

function App() {
  return (
    <div>
      <Nav />
      <div className='Slide'>
        <ul className='Slides-ul'>
          {WorksImages.map((item) => (
            <WorkSlides
              name={item.workName}
              sculp={item.sculpture}
              text={item.text}
              paint={item.painting}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
