class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
  
  // TODO: 1
  const state = {
    user: {
        name: "John",
        age: 18
    },
    isOffline: true,
  }
  const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isOffline) {
                resolve (state.user);
            } else {
                reject (new NetworkError('Gagal mendapatkan data dari internet'));
            }
        }, 500);
    });
  } 
  
  // TODO: 2
  async function gettingUserName() {
    try {
        const user = await fetchingUserFromInternet(false);
        console.log(user.name);    
        return user.name;
    } catch (NetworkError) {
        console.log(NetworkError.message);
    }
  }

gettingUserName();