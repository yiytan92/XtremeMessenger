export const selectFish = () => {
  console.log('You typed key: ');
  return {
    type: 'KEYBOARD_TYPED',
    payload: keyboard
  }
};