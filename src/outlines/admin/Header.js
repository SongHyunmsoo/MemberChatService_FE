import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.png';
import { SmallButton } from '../../commons/components/ButtonStyle';
import UserContext from '../../member/modules/UserContext';
import { logout } from '../../member/apis/apiLogin';

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;

  .links {
    button {
      margin-left: 5px;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const context = useContext(UserContext);
  const { state: isLogin } = context;
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    logout(context);
    navigate('/member/login?redirectURL=/admin');
  }, [navigate, context]);

  return (
    <HeaderBox>
      <Link to="/admin" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="links">
        {isLogin ? (
          <>
            <SmallButton
              width="120px"
              bcolor="primary"
              fcolor="#fff"
              onClick={onLogout}
            >
              {t('로그아웃')}
            </SmallButton>
          </>
        ) : (
          <>
            <Link to="/member/login">
              <SmallButton width="120px">{t('로그인')}</SmallButton>
            </Link>
            <Link to="/member/join">
              <SmallButton width="120px">{t('회원가입')}</SmallButton>
            </Link>
          </>
        )}
        <Link to="/">
          <SmallButton width="120px" bcolor="info" fcolor="#fff">
            {t('사이트_이동')}
          </SmallButton>
        </Link>
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
