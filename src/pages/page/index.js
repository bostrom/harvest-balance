import React, { Suspense, Fragment } from 'react';
import { useAuth } from '../../util/auth';
import Navbar from './../../components/Navbar';
import SignInSection from './../../components/SignInSection';
import './styles.scss';

function Page({ children }) {
  const { user } = useAuth();

  return (
    <Fragment>
      <Navbar color="white" spaced={true} />
      {!user ? (
        <SignInSection color="white" title="Welcome" />
      ) : (
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      )}
    </Fragment>
  );
}

export default Page;