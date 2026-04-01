<template>
  <div class="legal-limits">
    <h1>Limites légales</h1>
    <div class="sections">
      <section>
        <h2>Présentation générale</h2>
        <p>
          Le projet BipBip est un outil pédagogique développé dans le cadre d’études, ayant pour objectif d’aider les utilisateurs à se souvenir de prendre leurs médicaments à l’heure. Il ne s’agit en aucun cas d’un service de diagnostic médical, de prescription ou de conseil thérapeutique. Toute information proposée par BipBip est à usage informatif et organisationnel uniquement.
        </p>
      </section>

      <section>
        <h2>Limites légales en France</h2>
        <p>
          Conformément au Code de la santé publique, notamment les articles L.4111-1 et suivants, la prescription de médicaments ainsi que le conseil sur leur utilisation sont strictement réservés aux professionnels de santé habilités, tels que les médecins, pharmaciens et infirmiers.
        </p>
        <p>
          Il est interdit à toute personne non habilitée de fournir des recommandations personnalisées concernant un traitement, d’ajuster la posologie, la fréquence ou l’association de médicaments. Une telle pratique peut constituer une infraction pénale et engager la responsabilité civile et pénale de l’auteur.
        </p>
        <p>
          Dans ce cadre légal, BipBip ne fournit aucun conseil médical, ne recommande aucun médicament, et ne suggère aucune modification d’un traitement. L’application se limite uniquement à un rappel temporel défini par l’utilisateur ou son aidant, sans évaluer les effets secondaires, les interactions médicamenteuses ou les contre-indications. Cette distinction est essentielle pour se conformer à la législation française et pour protéger la sécurité des utilisateurs.
        </p>
      </section>

      <section>
        <h2>Responsabilité de l’utilisateur</h2>
        <p>
          L’utilisation de BipBip se fait entièrement sous la responsabilité de l’utilisateur. L’application ne peut pas se substituer à un professionnel de santé et ne peut garantir l’efficacité ou la sécurité d’un traitement.
        </p>
        <p>
          Il est donc fortement recommandé de toujours suivre les indications de son médecin, pharmacien ou autre professionnel de santé habilité pour la prise de médicaments. Les utilisateurs doivent s’assurer que les horaires programmés dans l’application correspondent aux prescriptions officielles et que toute modification d’un traitement soit validée par un professionnel qualifié.
        </p>
        <p>
          BipBip décline toute responsabilité en cas d’oubli, d’erreur dans le suivi des prises, de surdosage ou d’effets secondaires liés à la prise de médicaments. L’application doit être utilisée comme outil d’organisation personnelle et non comme source d’information médicale.
        </p>
      </section>

      <section>
        <h2>Conseils généraux uniquement</h2>
        <p>
          BipBip est conçu pour envoyer des rappels aux utilisateurs pour qu’ils prennent leurs médicaments à l’heure définie par eux-mêmes ou par un aidant de confiance. Les rappels sont purement horaires, et ne fournissent aucune instruction sur le dosage, la durée, les interactions ou les contre-indications.
        </p>
        <p>
          L’application ne doit jamais être utilisée pour décider d’arrêter, de modifier ou d’associer des traitements. Toute modification d’un traitement doit impérativement être discutée et validée par un professionnel de santé.
        </p>
        <p>
          L’objectif est de faciliter l’organisation et le suivi de la prise de médicaments, tout en respectant la législation et en protégeant la santé de l’utilisateur. BipBip ne peut en aucun cas remplacer l’avis d’un médecin ou d’un pharmacien, et tout usage hors cadre personnel reste sous la responsabilité de l’utilisateur.
        </p>
      </section>

      <section>
        <h2>Confidentialité et données personnelles</h2>
        <p>
          BipBip peut stocker des informations liées aux horaires des prises de médicaments. Ces données sont uniquement utilisées pour le fonctionnement de l’application et ne constituent pas un suivi médical. Les informations sensibles sur la santé ne doivent pas être partagées via l’application pour éviter toute utilisation inappropriée.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal-limits {
  flex: 1;
  width: 100%;
  padding: 4rem 8rem;
  min-height: calc(100vh - 82px);
}

h1 {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  color: var(--color-text-dark);
}

.sections {
  max-width: 900px;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

@media (max-width: 900px) {
  .legal-limits {
    padding: 2rem 1.25rem;
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.3rem;
  }
}
</style>
