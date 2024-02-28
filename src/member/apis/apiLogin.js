import apiRequest from '../../commons/libs/apiRequest';
import cookies from 'react-cookies';

/**
 * 
 * then 로그인 성공시 then 에 데이터가 들어간다
 * @param {*} formData 
 * @returns 
 */
export const apiLogin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member/token', 'POST', formData)
      .then((res) => {
        if (res.data.success) {
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

// 로그인 회원 정보 조회
export const apiMemberInfo = () =>
  new Promise((resolve, reject) => {
    apiRequest('/member')
      .then((res) => {
        if (res.status >= 200 && res.status < 300 && res.data.success) {
          resolve(res.data.data);
        } else {
          cookies.remove('token', { path: '/' });
          resolve(null);
        }
      })
      .catch((err) => {
        cookies.remove('token', { path: '/' });
        reject(err);
      });
  });

export const updateMemberInfo = (context) => {
  const {
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = context;

  apiMemberInfo()
    .then((userInfo) => {
      let isLogin = false,
        isAdmin = false;

      if (userInfo) {
        isLogin = true;

        isAdmin = userInfo.authority === 'ADMIN';
      }

      setIsLogin(isLogin);
      setIsAdmin(isAdmin);
      setUserInfo(userInfo);
    })
    .catch(() => {
      setIsLogin(false);
      setIsAdmin(false);
      setUserInfo(null);
    });
};

export const logout = (context) => {
  cookies.remove('token', { path: '/' });

  const {
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = context;

  setIsLogin(false);
  setIsAdmin(false);
  setUserInfo(null);
};