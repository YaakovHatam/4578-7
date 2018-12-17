async function showAvatar(user) {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  let githubResponse = await fetch(`https://api.github.com/users/${user}`);
  let githubUser = await githubResponse.json();
 
  return githubUser;
}

showAvatar('kob-e').then(buildProfile);


async function buildProfile(githubUser) {
   // show the avatar
   let img = document.createElement('img');
   img.src = githubUser.avatar_url;
   document.body.append(img);

   let div = document.createElement('div');
  div.innerHTML = githubUser.location;
  document.body.append(div);
}
