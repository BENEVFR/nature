document.addEventListener("DOMContentLoaded", function(event) {
  Swal.fire({
    title: "Bienvenue sur l'enquête Bien-Être et nature en ville",
    html: `
Ouverte jusqu’au samedi 28 février 2026<br>
<br>
Cette enquête, strictement anonyme, s’inscrit dans le cadre d’une expérimentation visant à mieux<br>
comprendre le lien entre bien-être et nature en ville.<br>
Avant de démarrer l’enquête, cliquez sur votre zone d’habitation.<br>
Bien cordialement,<br>
    `,
    showDenyButton: false,
    confirmButtonText: "J'ai compris",
    denyButtonText: "Je refuse le traitement de mes données"
  }).then((result) => {

    if (result.isConfirmed) {
      /*Swal.fire("Saved!", "", "success");*/
    } else if (result.isDenied) {
      Swal.fire({
        title: "Vous avez refusé le traitement de vos données",
        html: `
          La page est maintenant inactive. <br><br>
          Rafraîchissez la page si vous souhaitez changer d'avis
        `,
        icon: "error",
        showConfirmButton: false,
        allowOutsideClick: false,
        showCloseButton: false,
        allowEscapeKey: false
      });

      map = document.getElementById("map");
      map.parentNode.removeChild(map);
    }
});
});
