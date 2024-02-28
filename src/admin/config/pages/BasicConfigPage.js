import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const BasicConfigPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('기본설정')}</title>
      </Helmet>
    </>
  );
};

<<<<<<< HEAD
export default React.memo(BasicConfigPage);
=======
export default React.memo(BasicConfigPage);
>>>>>>> 2d6e5c342e9e381a2d5fc689fab5f0fe9ede9180
