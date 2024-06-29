export function fakeCreate(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, item: { ...item, id: new Date().getTime() } });
    }, 1000);
  });
}
