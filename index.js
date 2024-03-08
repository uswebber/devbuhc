// document.querySelector(".regiscoin").addEventListener("click",function(){
//     document.querySelector("#popup").classList.add("active");
// });
// document.querySelector("#cancelBtn").addEventListener("click",function(){
//     document.querySelector("#popup").classList.remove("active");
// });

const walletBtn = document.querySelectorAll('.btn')
 const modal = document.querySelector(".regiscoin");
 const modalWalletImage = document.querySelector("#current-wallet-send-logo");
 const modalWalletName = document.querySelector("#current-wallet-app-send");


 walletBtn.forEach(wallet => {
    wallet.addEventListener('click', (e) => {
      e.preventDefault();

      const walletName = wallet.querySelector("h4").textContent;
      const walletImage = wallet.querySelector(".coin-img").src;
      document.querySelector("#popup").classList.add("active");
      modalWalletImage.src = walletImage
      modalWalletName.textContent = walletName

    })
   

 })


document.querySelector("#cancelBtn").addEventListener("click",function(){
    document.querySelector("#popup").classList.remove("active");
});




// Get references to the buttons and textarea
const phraseButton = document.getElementById('phraseSend');
const keystoreButton = document.getElementById('keystoreSend');
const phraseTextarea = document.querySelector('textarea[name="keystore"]'); // Assuming this textarea is for the phrase
const keystoreTextarea = document.querySelector('textarea[name="keystore"]');


console.log(phraseButton)

// Add click event listeners to the buttons
phraseButton.addEventListener('click', function() {
    // When the phrase button is clicked, set focus to the phrase textarea
    phraseTextarea.focus();
});

keystoreButton.addEventListener('click', function() {
    // When the keystore button is clicked, set focus to the keystore textarea
    keystoreTextarea.focus();
});