formEl = document.querySelector('form');

/* formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const arrData = [...formData];
  const objectData = Object.fromEntries(arrData);

  console.log(objectData.fname);
  console.log(objectData.lname);
});
 */
const getFormvalue = (event) => {
  event.preventDefault();
  const formDara = new FormData(formEl);
  const arrData = [...formDara];
  const objectData = Object.fromEntries(arrData);

  console.log(objectData.fname);
  console.log(objectData.lname);
};
