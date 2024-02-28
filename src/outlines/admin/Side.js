import React from 'react';
import classNames from 'classnames';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { FiUsers, FiEdit } from 'react-icons/fi';

const AsideBox = styled.aside`
  a {
    display: block;
    padding: 30px 10px;
    text-align: center;
    font-size: 1.35rem;
    font-weight: 700;
    background: #ccc;
    line-height: 1;

    &:hover,
    &.on {
      background: #212121;
      color: #fff;
    }

    svg {
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  a + a {
    border-top: 1px solid #212121;
  }
`;

const Side = () => {
  const { t } = useTranslation();

  return (
    <AsideBox>
      <NavLink
        to="/admin/config"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        <HiOutlineCog6Tooth />
        {t('기본설정')}
      </NavLink>
      <NavLink
        to="/admin/member"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        <FiUsers />
        {t('회원관리')}
      </NavLink>
      <NavLink
        to="/admin/board"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        <FiEdit />
        {t('게시판_관리')}
      </NavLink>
    </AsideBox>
  );
};

export default React.memo(Side);
