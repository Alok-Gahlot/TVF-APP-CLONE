const intialState = {
  data: [],
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SIGN_UP': {
      return {
        data: [action.payload],
      };
    }
    case 'SIGN_IN': {
      console.log('sign in', action.payload);
      const {email, password, navigation} = action.payload;

      if (state.data.length == 0) {
        alert('Please register yourself first');
      } else {
        const red = state.data[0];
        if (email == red.email) {
          if (password == red.password) {
            navigation.navigate('Drawer', {
              email: red.email,
            });
          } else {
            alert('Wrong Password');
          }
        } else {
          alert('Seems like your Email is not registered with us.');
        }
      }
      return state;
    }

    default:
      return state;
  }
};
