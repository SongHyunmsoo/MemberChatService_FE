import { createContext, useState } from 'react';
import { apiMemberInfo } from '../apis/apiLogin';
import cookies from 'react-cookies';

const UserContext = createContext({
  state: {
    // 상태 값
    isLogin: false,
    isAdmin: false,
    userInfo: null,
  },
  actions: {
    // 상태 변경 함수
    setIsLogin: null,
    setIsAdmin: null,
    setUserInfo: null,
  },
});

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const token = cookies.load('token');

  if (token && (!isLogin || !userInfo)) {
    apiMemberInfo()
      .then((userInfo) => {
        let isLogin = false,
          isAdmin = false,
          _userInfo = null;
        if (userInfo) {
          isLogin = true;
          isAdmin = userInfo.authority === 'ADMIN';
          _userInfo = userInfo;
        }

        setIsLogin(isLogin);
        setIsAdmin(isAdmin);
        setUserInfo(_userInfo);
      })
      .catch(() => {
        setIsLogin(false);
        setIsAdmin(false);
        setUserInfo(null);
      });
  }

  const value = {
    state: { isLogin, isAdmin, userInfo },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;
