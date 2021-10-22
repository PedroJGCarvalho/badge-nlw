const linksSocialMedia = {
  github: 'PedroJGCarvalho',
  instagram: 'pedro_paidesete',
  youtube: 'channel/UCw6PKPmPRinas9uRaq4nYpw',
  facebook: 'pedro.guimaraes.9003',
  twitter: 'PedroDevSith'
}

function changeSocialMediaLinks() {
  // quando buscar um elemento pelo ID não precisa do document.getElementById
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

//API info
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //alert(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      //alert(data.bio)
    })
}
getGitHubProfileInfos()
