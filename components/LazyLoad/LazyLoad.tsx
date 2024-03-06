import React, { lazy, Suspense, useMemo } from 'react';
import LoadingPage from '../../pages/misc/loading page/LoadingPage';
interface Props {
    component: string;
  }

const LazyLoad = ({component}:Props) => {

const LazyComponent = useMemo(
    () => lazy(() => import(`../../${component}`)),
    [component]);

  return (
    <Suspense fallback={<LoadingPage />}>
        <LazyComponent />
    </Suspense>
  )
}

export default LazyLoad