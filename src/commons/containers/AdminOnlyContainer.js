import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../member/modules/UserContext';

const AdminOnlyContainer = ({ children }) => {
  const {
    state: { isAdmin },
  } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) navigate(-1);
  }, [isAdmin, navigate]);

  return children;
};

export default React.memo(AdminOnlyContainer);
