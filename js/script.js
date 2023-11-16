

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":950},"pages":[{"id":"page-welcome-","displayName":"Welcome!","link":{"linkType":"LinkTypePage","href":"#!page-welcome-"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-hardware","displayName":"Hardware","link":{"linkType":"LinkTypePage","href":"#!page-hardware"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-media","displayName":"Media","link":{"linkType":"LinkTypePage","href":"#!page-media"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-minecraft-contents","displayName":"Minecraft contents","link":{"linkType":"LinkTypePage","href":"#!page-minecraft-contents"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-support","displayName":"Support","link":{"linkType":"LinkTypePage","href":"#!page-support"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-oitswilliamv2","displayName":"OITSWILLIAMV2","link":{"linkType":"LinkTypePage","href":"#!page-oitswilliamv2"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-airtag-utc","displayName":"AirTag UTC","link":{"linkType":"LinkTypePage","href":"#!page-airtag-utc"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-rigs","displayName":"Rigs","link":{"linkType":"LinkTypePage","href":"#!page-rigs"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-behind-the-new-logo","displayName":"Behind the new logo","link":{"linkType":"LinkTypePage","href":"#!page-behind-the-new-logo"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-oitswilliam-s-minecraft-survival-livestream","displayName":"Oitswilliam's Minecraft Survival Livestream","link":{"linkType":"LinkTypePage","href":"#!page-oitswilliam-s-minecraft-survival-livestream"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-legacy-projects","displayName":"Legacy projects","link":{"linkType":"LinkTypePage","href":"#!page-legacy-projects"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-legacy-vanilla-version-checker","displayName":"Legacy - Vanilla Version Checker","link":{"linkType":"LinkTypePage","href":"#!page-legacy-vanilla-version-checker"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sheer-dedicated-server","displayName":"Sheer Dedicated Server","link":{"linkType":"LinkTypePage","href":"#!page-sheer-dedicated-server"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-terms-of-use","displayName":"Terms of Use","link":{"linkType":"LinkTypePage","href":"#!page-terms-of-use"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-licensing","displayName":"Licensing","link":{"linkType":"LinkTypePage","href":"#!page-licensing"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-oitswilliam-s-minecraft-maps-and-legacy-projects-policies","displayName":"Oitswilliam's Minecraft Maps and Legacy Projects Policies","link":{"linkType":"LinkTypePage","href":"#!page-oitswilliam-s-minecraft-maps-and-legacy-projects-policies"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sheer-dedicated-server-usage-policy","displayName":"Sheer Dedicated Server Usage Policy","link":{"linkType":"LinkTypePage","href":"#!page-sheer-dedicated-server-usage-policy"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-future-events","displayName":"Future events","link":{"linkType":"LinkTypePage","href":"#!page-future-events"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sponsored-products","displayName":"Sponsored products","link":{"linkType":"LinkTypePage","href":"#!page-sponsored-products"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
function openNav() {
    // one person created websites are sometimes lazy
  document.getElementById("sidemenu").style.width = "100%";
  const counter = document.getElementsByClassName("oiwp-shrinkable");
  for (let num=0; num < counter.length; num++) {
    counter[num].style.transform = "scale(0.85)";
  }
  window.scrollTo(0,0);
// if any scroll is attempted,
// set this to the previous value
window.onscroll = function() {
window.scrollTo(0,0);
};
}

function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
    const counter = document.getElementsByClassName("oiwp-shrinkable");
  for (let num=0; num < counter.length; num++) {
    counter[num].style.transform = "";
  }
  window.onscroll = function() {};
}