
// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли 
// користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких 
// зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".



// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В 
// іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та 
// їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй 
// бібліотеку lodash.throttle.

// import throttle from 'lodash.throttle';

const registerForm = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";


// registerForm.addEventListener("input", throttle(onFormInput, 500));
registerForm.addEventListener("input", onFormInput);
registerForm.addEventListener("submit", handleSubmit);









function onFormInput(event) {
  event.preventDefault();
  const {elements: { email, message }} = event.currentTarget;

  let userMessage = {
    email: email.value,
    message: message.value,
  };
//   console.log(`email: ${email.value}, message: ${message.value}`);
  console.log(userMessage)
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userMessage));
}


function handleSubmit(event) {
  event.preventDefault();
//   cont form = event.currentTarget;
  const {elements: { email, message }} = event.currentTarget;
 
  if (email === "" || message === "") {
    return console.log("Please fill in all the fields!");
  }

//   console.log(`email: ${email.value}, message: ${message.value}`);
  console.log(localStorage.getItem(LOCALSTORAGE_KEY))
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}



const localStorageItems = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
console.log(localStorageItems);

if (localStorageItems) {
  registerForm.email.value = localStorageItems.email;
  registerForm.message.value = localStorageItems.message;
}



