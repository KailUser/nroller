let username = getUsernameFromCookies(); // get username from cookies on load
let popup = null;


const username_field = document.getElementById("username");
const text2 = document.createTextNode(`${username}`); 

username_field.appendChild(text2);

document.querySelector('.target').addEventListener('click', () => {
  if (popup) {
    popup.remove();
  }
  const files = ["developer of NRoll.jpg", "OOFIE (CUSTOM) .jpg", "someone (CUSTOM).jpg","4dd-removebg-preview.png", "7e8c4w.png", "Accurateobserver.png", "Accurate_Boioioioioing.png", "AftonStreched.png", "AhenoHD.png", "AlternateStreched.png", "Ambush.png", "AngryMunci_In-Game_Image.png", "Angrynewlouie.png", "Angryskeletonuponit.png", "Anole_Lizard_Hilo_Hawaii_edit.png", "Aooni_icon.png", "Apparition.png", "Armstrong_icon.png", "A_horse.png", "Babel-removebg-preview_%281%29.png", "Baldteacher.png", "Baller.png", "Bang%21.png", "Beagle.png", "Bear_5.png", "Better_old_ai.png", "Bl%C3%A5haj.png", "Blabber.png", "BlonkStreched.png", "Bodyswap.png", "Boiled_one_high_quality.png", "boinininining.gif", "Bowling.png", "Bubby.png", "Burnerjohniguess.png", "C757D872-7A44-4A2D-John.jpg", "Camy_catfff.png", "Cardboard.png", "Carter_%282%29.png", "CatbutbetterNEW.png", "Caterpillarv2.png", "Cheezburgeritem.png", "Chillyimage.png", "Closeupmaxwell.png", "CootieImage.png", "Crabbo.png", "Creepysmile.png", "Customnextboticon.png", "Darkness.png", "Dave.png", "Decay_image.png", "Desculpa.png", "Dev_envmap.png", "Doge.png", "Doot.png", "Drake_bloxxer.png", "Dread_transparent.png", "Dream.png", "Duck_image_transpanwfds.png", "Dummie.png", "El.png", "Epicface.png", "Evadin.png", "Fazbear_mug_image.png", "Fiend-removebg-preview_%281%29.png", "Fishgame.png", "Fizzy.png", "Floppa.png", "Flying_gorilla.png", "Follower.png", "Foundingtitan.png", "Frog_killfeed.png", "Funnybeartrashcan.png", "Gangsta.png", "Garlic_LOL_garlic_LOL_garlic_LOL_garlic_LOL_garlic_LOL_garlic_LOL.png", "Geoffery.png", "Giggle.png", "Glim.png", "Glitchorvirus.png", "GOD_TYCOON.png", "Goku_drip.png", "Goofy.png", "GoofyAhhEngineerGaming.png", "GorillaTagGorillaFace.png", "Gromitkillfeedicon.png", "Grudge_new.png", "Grumbo.png", "Gsdf.png", "Guest.png", "Happy....png", "Happypenguin.png", "Heavy.png", "HeHe.png", "Herobrine_real.png", "Hopper.png", "Humans.png", "Hyper_Sanicbutbetter.png", "Icosahedronkillfeed_jumpscareicon.png", "Identity.png", "Idiotwhite.png", "Image-removebg-preview%28106%29%281%29.png", "Image_5_-removebg-preview.png", "ImpostorSus.png", "Itzamegiddy.png", "I_added_the_black_outline.png", "Jack.png", "Jeepimage.png", "Jeff.png", "Jermacloseupfixed.jpeg", "JermiasInGameNonStretched_20230128075129.png", "Jonathanhd.png", "Jungler.png", "Kittendoingballin.jpg", "Kleiner_real.png", "Kong_2005.jpeg", "Limin.png", "Lol%27d.png", "Lol.png", "Madchen.png", "Man_shocked_at_sight_of_banana_nextbot.png", "MARio.png", "Maxresdefault-removebg-preview_%281%29.png", "Meem.png", "Metalpipefalling-removebg-preview.png", "Mfw.png", "Micheal.png", "Mooooon.png", "Mulch_my_beloved.png", "Neptune.png", "Nerd2.png", "NewCarmen.png", "Newpersonoidimage.png", "New_Hollandbutbetter.png", "New_pinhead.png", "NextbotIcon.png", "NopeKillfeed.png", "Normal_difficulty.png", "Nothingg.png", "NUHUH.png", "Nuke_image.png", "Obscuredoodleman.png", "ObungaDecal.png", "Og-image_%281%29.png", "OG_Sanic.webp", "Oragne.png", "Path.png", "Pbjkillfeed.png", "phen 228 the boiled one phenomenon.png", "Pigment.png", "Placeholder.png", "Pleasant_gradient.png", "Preacher-1.png", "Proxy.png", "Q.png", "Quandaledingle_glowup.jpeg.png", "Qub.png", "Raconimage.png", "Rageman.jpg", "Ramiele.png", "Realghostt.png", "Realpolb.png", "Real_dog.png", "Redlawg.png", "Reflex.png", "Reiplush.png", "Reverse.png", "ReverseFollowerImage.png", "Richardkillicon.png", "Rikerbodypillownextbotcroppedtransparent3.png", "RNGincoming.png", "Robloximage.png", "Run_run.png", "Rushnewimage.png", "Sadimage.png", "Sans_Cry.png", "Scari.png", "Scary_burger.png", "Scopophobe1.png", "SeleneDelgado.png", "Sord.png", "Steam.png", "Terrified_bot.png", "Thehorror.png", "trauma.png", "T_creature.png", "Varied.png", "Wideintruder.png", "Zoomingjet.png"];
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
  img.style.width = '200px';
  img.style.height = '200px';
  img.onload = () => {
    img.style.width = 'auto';
    img.style.height = 'auto';
    const ratio = img.naturalWidth / img.naturalHeight;
    img.style.width = '200px';
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

