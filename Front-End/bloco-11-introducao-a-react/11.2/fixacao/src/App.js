import Image from './components/Image';
import Album from './components/Album';
import UserProfile from './components/UserProfile';
import Order from './components/Order';
import './App.css';

function App() {
  const albums = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital',
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital',
      },
    },
  ];
  const people = [
    {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar:
        'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
    },
    {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar:
        'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
    },
  ];
  const orders = [
    {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars',
      },
    },
    {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars',
      },
    },
  ];
  return (
    <>
      <section className="ximira">
        <Image
          source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
          alternativeText="Cute cat staring"
        />
      </section>
      {albums.map((album) => (
        <div className="ximira">
          <Album album={album} />
        </div>
      ))}
      {people.map((person) => (
        <div className='ximira'>
          <UserProfile user={person} />
        </div>
      ))}
      {orders.map((order) => (
        <div>
          <h1> Orders recently created </h1>
          <Order order={order} />
        </div>
      ))}
    </>
  );
}

export default App;
