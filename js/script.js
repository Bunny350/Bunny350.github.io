

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-hardware","displayName":"Hardware","link":{"linkType":"LinkTypePage","href":"#!page-hardware"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-media","displayName":"Media","link":{"linkType":"LinkTypePage","href":"#!page-media"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-minecraft","displayName":"Minecraft","link":{"linkType":"LinkTypePage","href":"#!page-minecraft"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-support","displayName":"Support","link":{"linkType":"LinkTypePage","href":"#!page-support"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-oitswilliamv2","displayName":"OITSWILLIAMV2","link":{"linkType":"LinkTypePage","href":"#!page-oitswilliamv2"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-airtag-utc","displayName":"AirTag UTC","link":{"linkType":"LinkTypePage","href":"#!page-airtag-utc"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-rigs","displayName":"Rigs","link":{"linkType":"LinkTypePage","href":"#!page-rigs"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-minecraft-survival-live-stream","displayName":"Minecraft Survival Live stream","link":{"linkType":"LinkTypePage","href":"#!page-minecraft-survival-live-stream"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-legacy-projects","displayName":"Legacy projects","link":{"linkType":"LinkTypePage","href":"#!page-legacy-projects"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-legacy-vanilla-version-checker","displayName":"Legacy - Vanilla Version Checker","link":{"linkType":"LinkTypePage","href":"#!page-legacy-vanilla-version-checker"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sheer-dedicated-server","displayName":"Sheer Dedicated Server","link":{"linkType":"LinkTypePage","href":"#!page-sheer-dedicated-server"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-terms-of-use","displayName":"Terms of Use","link":{"linkType":"LinkTypePage","href":"#!page-terms-of-use"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-licensing","displayName":"Licensing","link":{"linkType":"LinkTypePage","href":"#!page-licensing"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
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