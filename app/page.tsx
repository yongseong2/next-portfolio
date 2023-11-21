import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className='text-9xl'>넥스트 </h1>
      <Link href={'/hello'}>md preview 확인하기</Link>
    </main>
  );
}
