import { Link } from 'react-router-dom';

export const imgMap = [
  {
    path: '/',
    imgLink: 'images/img1.png',
    alt: "banner",
    id: '1',
  },
  {
    path: '/about',
    imgLink: 'images/img2.jpg',
    alt: "banner",
    id: '2',
  },
  {
    path: '/users',
    imgLink: 'images/img3.jpeg',
    alt: "banner",
    id: '3',
  },
];

const Main = () => {
  return (
    <div>
      <div className="server">
        {imgMap.map(({ id, path, imgLink, alt }) => {
          return (
              <div key={id} className="block">
                <Link to={path}>
                  <img src={imgLink} alt={alt} />
                </Link>
                <div className="box"></div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
