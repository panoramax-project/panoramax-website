<template>
  <main class="entry-page">
    <section class="section">
      <h1>Déclaration d’accessibilité</h1>
      <p>Établie le <span>18 septembre 2023</span>.</p>
      <p>
        <span>IGN</span> s’engage à rendre son service accessible, conformément
        à l’article 47 de la loi n° 2005-102 du 11 février 2005.
      </p>
      <p>
        Cette déclaration d’accessibilité s’applique à <strong>Panoramax</strong
        ><span> (<span>https://panoramax.fr</span>)</span>.
      </p>
    </section>
    <section class="section">
      <h2>État de conformité</h2>
      <p>
        <strong>Panoramax</strong> est
        <strong><span data-printfilter="lowercase">non conforme</span></strong>
        avec le
        <abbr title="Référentiel général d’amélioration de l’accessibilité"
          >RGAA</abbr
        >. <span>Le site n’a encore pas été audité.</span>
      </p>
    </section>
    <section class="section">
      <h2>Contenus non accessibles</h2>
    </section>
    <section class="section">
      <h2>Amélioration et contact</h2>
      <p>
        Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
        pouvez contacter le responsable de <span>Panoramax</span> pour être
        orienté vers une alternative accessible ou obtenir le contenu sous une
        autre forme.
      </p>
      <ul class="basic-information feedback h-card">
        <li>Téléphone&nbsp;: <span>+33 14 398 84 61</span></li>
        <li>
          E-mail&nbsp;:
          <a href="mailto:camille.salou@ign.frpanoramax@panoramax.fr"
            >panoramax@panoramax.fr</a
          >
        </li>

        <li>Adresse&nbsp;: <span>IGN, Saint-Mandé</span></li>
        <li>Twitter : @panoramax_</li>
      </ul>
      <p>Nous essayons de répondre dans les <span>5 jours ouvrés</span>.</p>
    </section>
    <section class="section">
      <h2>Voie de recours</h2>
      <p>
        Cette procédure est à utiliser dans le cas suivant&nbsp;: vous avez
        signalé au responsable du site internet un défaut d’accessibilité qui
        vous empêche d’accéder à un contenu ou à un des services du portail et
        vous n’avez pas obtenu de réponse satisfaisante.
      </p>
      <p>Vous pouvez&nbsp;:</p>
      <ul>
        <li>
          Écrire un message au
          <a href="https://formulaire.defenseurdesdroits.fr/"
            >Défenseur des droits</a
          >
        </li>
        <li>
          Contacter
          <a href="https://www.defenseurdesdroits.fr/saisir/delegues"
            >le délégué du Défenseur des droits dans votre région</a
          >
        </li>
        <li>
          Envoyer un courrier par la poste (gratuit, ne pas mettre de
          timbre)&nbsp;:<br />
          Défenseur des droits<br />
          Libre réponse 71120 75342 Paris CEDEX 07
        </li>
      </ul>
      <hr />
      <p>
        Cette déclaration d’accessibilité a été créé le
        <span>18 septembre 2023</span> grâce au
        <a href="https://betagouv.github.io/a11y-generateur-declaration/#create"
          >Générateur de Déclaration d’Accessibilité de BetaGouv</a
        >.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.entry-page {
  padding: 5rem 15rem;
}
.section {
  margin-bottom: 2rem;
}
ul {
  padding-left: 2rem;
}
p {
  margin-bottom: 2rem;
  white-space: pre-line;
  font-size: 1.6rem;
}
hr {
  margin: 1rem;
}
h1 {
  font-size: 5rem;
  color: var(--violet-dark);
  line-height: 1;
  margin-bottom: 5rem;
}
h2 {
  font-size: 3rem;
  color: var(--violet-dark);
}
@media (max-width: 1324px) {
  .entry-page {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.4rem;
  }
}

@media (max-width: 500px) {
  .entry-page {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
