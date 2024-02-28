import apiRequest from '../../commons/libs/apiRequest';

export const apiJoin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member', 'POST', formData)
      .then((res) => {
        if (
          (res.status >= 200 && res.status < 300 && !res.data) || // 200 대 코드라면 전부 200으로 통일
          res.data.success
        ) {
          resolve(res.data ? res.data.data : 'success'); // 값이 있으면 값을 넘기고 없으면 success 를 넘긴다.
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });
