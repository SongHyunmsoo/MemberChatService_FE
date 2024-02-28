import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const UnAuthorized = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('페이지_접근권한_없음')}</title>
      </Helmet>
      <h1>{t('페이지_접근권한_없음')}</h1>
    </>
  );
};

<<<<<<< HEAD
export default React.memo(UnAuthorized);
=======
export default React.memo(UnAuthorized);
>>>>>>> 2d6e5c342e9e381a2d5fc689fab5f0fe9ede9180
