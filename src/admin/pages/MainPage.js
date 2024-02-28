import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('사이트_관리')}</title>
      </Helmet>

      <h1>관리자페이지....</h1>
    </>
  );
};

export default React.memo(MainPage);
