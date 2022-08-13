import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { UserContextProvider } from '../../components/UserCcontext';
const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
};

export default TestTaskApp;
