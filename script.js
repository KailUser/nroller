let username = getUsernameFromCookies(); // get username from cookies on load
let popup = null;


const username_field = document.getElementById("username");
const text2 = document.createTextNode(`${username}`); 

username_field.appendChild(text2);

document.querySelector('.target').addEventListener('click', () => {
  if (popup) {
    popup.remove();
  }
  const files = ["boinininining.gif", "Floppa.png", "HeHe.png", "Image-removebg-preview%28106%29%281%29.png", "Image_5_-removebg-preview.png", "OG_Sanic.webp", "phen 228 the boiled one phenomenon.png", "Qub.png", "Raconimage.png", "Ramiele.png", "Realghostt.png", "Real_dog.png", "Redlawg.png", "Reiplush.png", "Reverse.png", "ReverseFollowerImage.png", "Robloximage.png", "Rushnewimage.png", "Sadimage.png", "Scari.png", "Scary_burger.png", "Scopophobe1.png", "trauma.png"];
  const fileIndex = Math.floor(Math.random() * files.length);
  const fileName = files[fileIndex].replace(/\.(gif|jpg|png|webp)$/i, '');

  popup = document.createElement('div');
  popup.classList.add('popup');
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';

  const img = document.createElement('img');
  img.classList.add('hidden-image');
  img.style.width = '400px';
  img.style.height = '400px';
  img.onload = () => {
    img.style.width = 'auto';
    img.style.height = 'auto';
    const ratio = img.naturalWidth / img.naturalHeight;
    img.style.width = '400px';
    img.style.height = 'auto';
    img.style.height = img.style.width / ratio;
  };
  img.src = `nextbots/${files[fileIndex]}`;

  img.addEventListener('load', () => {
    document.documentElement.style.filter = 'blur(4px)';
    popup.appendChild(img);
    document.body.appendChild(popup);

    const text = document.createElement('span');
    text.classList.add('text');
    if (files[fileIndex].endsWith('.gif')) {
      text.textContent = 'ThIs ImAgE iS rArE';
      text.classList.add('rare-text');
    } else {
      text.textContent = `You got ${fileName}`;
    }
    const p = document.createElement('p');
    p.appendChild(text);
    popup.appendChild(p);

    setTimeout(() => {
      popup.style.opacity = 1;
      document.documentElement.style.filter = 'none';
    }, 100);
  });

  img.addEventListener('error', () => {
    document.documentElement.style.filter = 'none';
  });

  img.src = `nextbots/${files[fileIndex]}`;
});

function getUsernameFromCookies() {
    /**
    * Gets the username from the cookies.
    *
    * @return {string} The username extracted from the cookies.
    */
  const cookieArray = document.cookie.split(';');
  let username = '';
  cookieArray.forEach(cookie => {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === 'username') {
      username = decodeURIComponent(cookieValue);
    }
  });
  return username;
}

