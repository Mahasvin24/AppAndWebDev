import Head from 'next/head';
import Login from '@/components/accounts/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className='overflow-hidden'>
        <Login />
      </div>
    </>
  );
}
