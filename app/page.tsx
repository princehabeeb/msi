import Image from 'next/image';
import Nav from './components/Nav';

export default function Home() {
  return (
   <>
   <Nav />
    <h1 className='text-blue-600'>Hello world</h1>
   </>
  )
}
