export const login = ( {identifier, password }) => {
  return new Promise((resolve, reject) => {
    console.log("running");
    setTimeout(() => {
      if (identifier === 'bilal@gmail.com' && password === 'asd123') {
        resolve({
          status: true,
          data: {
            username: 'Bilal Rasool',
            email: 'bilal@gmail.com',
            phone: '032010101010',
          },
          message: 'User Logged in Successfully',
        });
      } else {
        reject({
          status: false,
          message: 'User Login failed',
        });
      }
    }, 2000);
  });
};
