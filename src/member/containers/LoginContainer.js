import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value.trim();
        }),
      ),
    [],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 필수 입력 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
      };
      /* 필수 입력 항목 E */

      const _errors = {};

      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];
        form[key] = form[key] || '';
        if (!form[key].trim()) {
          _errors[key].push(value);
        }
      }

      setErrors(_errors);
    },
    [form, t],
  );

  return (
    <>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </>
  );
};

export default React.memo(LoginContainer);
