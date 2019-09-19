<template>
  <div>
    <p>
      Aquesta tarja serveix per a <strong>anunciar la presència d'un càrrec a un mitjà de comunicació</strong>.
    </p>
    <p>
      Recomanem usar una <strong>foto recent del càrrec</strong> en bona qualitat.
    </p>
    <p>
      Sel·leccioneu un canal o estació de ràdio del llistat, així com un programa, o introduiu-ne un manualment si no el trobeu al llistat. Ens podeu suggerir
      afegir mitjans o programes utilitzant el formulari que hi ha més avall.
    </p>
    <p>
      És pot afegir, si és adient, el nom del col·lectiu al costat del logo, utilizant el camp "afegir text al logo".
    </p>
    <p>
      El <strong>text de data i hora</strong> es pot <strong>modificar directament</strong> sobre la tarja fent clic damunt dels camps corresponents.
      Per exemple, si esteu fent una tarja en castellà, podeu traduir la data manualment; o, si voleu afegir un
      interval d'hores, també ho podeu fer directament.
    </p>
    <p>
      Aquest model de tarja accepta els següents formats:
    </p>
    <ul>
      <li><strong>1:1</strong>: model genèric per a compartir en la majoria de xarxes socials (Facebook, Instagram, Twitter, canals de Telegram i Whatsapp, etc.). </li>
      <li><strong>9:16</strong>: model per a stories (Instagram, Facebook, Whatsapp). Aquest model no inclou el logo de Comporomís perquè ja és mostra a la part superior esquerra quan es comparteix en l'aplicació.</li>
    </ul>

    <div class="help-examples">
      <img src="./examples/11.png" alt="Exemple 1:1" />
      <img src="./examples/916.png" alt="Exemple 9:16" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-help'
}
</script>
