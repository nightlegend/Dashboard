var store = {
  debug: true,
  state: {
    userName: 'Hello!',
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue);
    this.state.userName = newValue;
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered');
    this.state.userName = '';
  },
};

export {
  store,
};
