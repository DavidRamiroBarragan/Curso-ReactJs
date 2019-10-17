import Link from 'next/link';

const Index = () => (
  <div>
    <ul>
      <li>
        <Link href='/'>
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href='/nosotros'>
          <a>Nosotros</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Index;
