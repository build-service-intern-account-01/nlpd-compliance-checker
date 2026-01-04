import type { Answer, ActionItem, AssessmentResult, Verdict, Section } from '../types/assessment';
import { sections } from '../data/assessmentData';

const actionTemplates: Record<string, Record<string, ActionItem>> = {
  'data-inventory': {
    high: {
      priority: 'urgent',
      section: 'Organisation',
      action: 'Créer un inventaire des données personnelles',
      details: 'Listez tous les types de données que vous traitez : clients, prospects, employés, candidats, fournisseurs. Pour chacun, notez quelles informations vous collectez.',
      evidence: [
        'Tableau d\'inventaire des données',
        'Liste des catégories de personnes concernées',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Organisation',
      action: 'Compléter votre inventaire des données',
      details: 'Ajoutez les catégories de données manquantes et vérifiez l\'exhaustivité.',
      evidence: [
        'Inventaire mis à jour',
        'Date de dernière vérification',
      ],
    },
  },
  'data-locations': {
    high: {
      priority: 'urgent',
      section: 'Organisation',
      action: 'Cartographier les emplacements de vos données',
      details: 'Identifiez tous les endroits où vous stockez des données : site web, CRM, boîte email, cloud, disques locaux, classeurs papier.',
      evidence: [
        'Schéma de flux de données',
        'Liste des systèmes et emplacements',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Organisation',
      action: 'Compléter la cartographie de vos données',
      details: 'Ajoutez les systèmes non documentés à votre cartographie.',
      evidence: [
        'Cartographie mise à jour',
      ],
    },
  },
  'access-management': {
    high: {
      priority: 'urgent',
      section: 'Organisation',
      action: 'Mettre en place une gestion des accès',
      details: 'Définissez qui peut accéder à quelles données selon son rôle. Limitez les accès au strict nécessaire.',
      evidence: [
        'Matrice des droits d\'accès',
        'Procédure d\'attribution des accès',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Organisation',
      action: 'Étendre la gestion des accès',
      details: 'Appliquez les contrôles d\'accès aux systèmes non encore couverts.',
      evidence: [
        'Liste des systèmes sécurisés',
        'Revue périodique des accès',
      ],
    },
  },
  'data-register': {
    high: {
      priority: 'urgent',
      section: 'Organisation',
      action: 'Créer un registre des traitements',
      details: 'Document obligatoire listant : finalités, catégories de données, destinataires, durées, mesures de sécurité.',
      evidence: [
        'Registre des traitements',
        'Date de création et mise à jour',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Organisation',
      action: 'Compléter votre registre des traitements',
      details: 'Ajoutez les informations manquantes et mettez à jour les traitements existants.',
      evidence: [
        'Registre complet',
        'Historique des modifications',
      ],
    },
  },
  'hosting-location': {
    high: {
      priority: 'urgent',
      section: 'Hébergement',
      action: 'Vérifier la localisation de vos données',
      details: 'Contactez votre hébergeur pour connaître précisément où sont stockées vos données. Si elles sont hors Suisse/UE, évaluez un transfert ou mettez en place des garanties adéquates.',
      evidence: [
        'Attestation de localisation de l\'hébergeur',
        'Contrat mentionnant le lieu de stockage',
        'Clauses contractuelles types si hors UE',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Hébergement',
      action: 'Documenter les garanties de transfert',
      details: 'Pour les transferts vers des pays avec niveau de protection adéquat, conservez une trace de la base légale utilisée.',
      evidence: [
        'Liste des pays de stockage',
        'Décision d\'adéquation applicable',
      ],
    },
  },
  'hosting-provider': {
    high: {
      priority: 'urgent',
      section: 'Hébergement',
      action: 'Signer un contrat de sous-traitance avec votre hébergeur',
      details: 'Un Data Processing Agreement (DPA) est obligatoire. Demandez-le à votre hébergeur ou utilisez un modèle standard.',
      evidence: [
        'Contrat de sous-traitance signé',
        'Annexe technique sur la sécurité',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Hébergement',
      action: 'Compléter votre contrat hébergeur',
      details: 'Ajoutez un avenant avec les clauses de protection des données obligatoires.',
      evidence: [
        'Avenant au contrat',
        'Clauses de confidentialité',
      ],
    },
  },
  'hosting-backup': {
    high: {
      priority: 'urgent',
      section: 'Hébergement',
      action: 'Mettre en place des sauvegardes sécurisées',
      details: 'Activez le chiffrement des sauvegardes et planifiez des tests de restauration trimestriels.',
      evidence: [
        'Procédure de sauvegarde documentée',
        'Rapports de tests de restauration',
        'Configuration du chiffrement',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Hébergement',
      action: 'Planifier des tests de restauration réguliers',
      details: 'Testez vos sauvegardes au moins une fois par trimestre et documentez les résultats.',
      evidence: [
        'Calendrier des tests',
        'Rapports de tests',
      ],
    },
  },
  'security-mfa': {
    high: {
      priority: 'urgent',
      section: 'Hébergement',
      action: 'Activer l\'authentification à deux facteurs',
      details: 'Activez le MFA sur tous les systèmes critiques : email, CRM, cloud, administration. Utilisez une app d\'authentification ou une clé physique.',
      evidence: [
        'Liste des systèmes avec MFA activé',
        'Procédure d\'activation',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Hébergement',
      action: 'Étendre le MFA à tous les systèmes critiques',
      details: 'Identifiez les systèmes sans MFA et planifiez l\'activation.',
      evidence: [
        'Plan de déploiement MFA',
        'Liste mise à jour',
      ],
    },
  },
  'security-passwords': {
    high: {
      priority: 'urgent',
      section: 'Hébergement',
      action: 'Définir une politique de mots de passe',
      details: 'Exigez des mots de passe forts (12+ caractères) et recommandez un gestionnaire de mots de passe à vos équipes.',
      evidence: [
        'Politique de mots de passe documentée',
        'Communication aux équipes',
      ],
    },
    medium: {
      priority: 'recommended',
      section: 'Hébergement',
      action: 'Formaliser votre politique de mots de passe',
      details: 'Documentez les règles existantes et communiquez-les officiellement.',
      evidence: [
        'Document de politique',
        'Accusé de réception',
      ],
    },
  },
  'security-incident': {
    high: {
      priority: 'urgent',
      section: 'Hébergement',
      action: 'Créer une procédure de gestion des incidents',
      details: 'Définissez qui fait quoi en cas de violation : détection, évaluation, notification au PFPDT si risque élevé, communication aux personnes.',
      evidence: [
        'Procédure de gestion des incidents',
        'Liste des contacts d\'urgence',
        'Modèle de notification',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Hébergement',
      action: 'Formaliser votre procédure d\'incident',
      details: 'Documentez les étapes et testez la procédure avec un exercice.',
      evidence: [
        'Procédure écrite',
        'Compte-rendu d\'exercice',
      ],
    },
  },
  'cookies-banner': {
    high: {
      priority: 'urgent',
      section: 'Transparence',
      action: 'Installer une bannière de cookies conforme',
      details: 'Utilisez un outil comme Cookiebot, Complianz ou une solution sur mesure permettant de refuser les cookies.',
      evidence: [
        'Capture d\'écran de la bannière',
        'Configuration de l\'outil',
        'Liste des cookies utilisés',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Transparence',
      action: 'Améliorer votre bannière de cookies',
      details: 'Ajoutez la possibilité de refuser les cookies non essentiels avant de continuer la navigation.',
      evidence: [
        'Nouvelle configuration',
        'Tests de fonctionnement',
      ],
    },
  },
  'privacy-policy': {
    high: {
      priority: 'urgent',
      section: 'Transparence',
      action: 'Rédiger une déclaration de confidentialité',
      details: 'Créez une page mentionnant : les données collectées, les finalités, la durée de conservation, les droits des personnes, vos coordonnées.',
      evidence: [
        'Déclaration publiée sur le site',
        'Date de dernière mise à jour visible',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Transparence',
      action: 'Mettre à jour votre déclaration de confidentialité',
      details: 'Revoyez votre déclaration pour qu\'elle reflète vos pratiques actuelles, notamment concernant l\'IA et les nouveaux outils.',
      evidence: [
        'Déclaration mise à jour',
        'Historique des modifications',
      ],
    },
  },
  'forms-consent': {
    high: {
      priority: 'urgent',
      section: 'Transparence',
      action: 'Corriger vos formulaires de contact',
      details: 'Ajoutez des cases à cocher non pré-cochées pour le consentement marketing et newsletter.',
      evidence: [
        'Captures d\'écran des formulaires corrigés',
        'Documentation du consentement collecté',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Transparence',
      action: 'Harmoniser le consentement sur tous les formulaires',
      details: 'Vérifiez chaque formulaire du site et standardisez la collecte du consentement.',
      evidence: [
        'Inventaire des formulaires',
        'Checklist de vérification',
      ],
    },
  },
  'data-minimization': {
    high: {
      priority: 'important',
      section: 'Transparence',
      action: 'Réduire les données collectées',
      details: 'Revoyez vos formulaires et supprimez les champs non essentiels. Ne collectez que ce qui est strictement nécessaire.',
      evidence: [
        'Audit des formulaires',
        'Liste des champs supprimés',
      ],
    },
  },
  'analytics': {
    high: {
      priority: 'urgent',
      section: 'Transparence',
      action: 'Obtenir le consentement pour Google Analytics',
      details: 'Configurez votre bannière cookies pour ne charger GA qu\'après consentement explicite, ou migrez vers une alternative respectueuse.',
      evidence: [
        'Configuration du consentement',
        'Tests de non-chargement sans consentement',
      ],
    },
  },
  'employee-info': {
    high: {
      priority: 'urgent',
      section: 'Transparence',
      action: 'Informer vos employés sur leurs données',
      details: 'Fournissez une notice d\'information aux employés expliquant quelles données vous traitez, pourquoi, et leurs droits.',
      evidence: [
        'Notice d\'information employés',
        'Preuve de remise (signature, email)',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Transparence',
      action: 'Formaliser l\'information aux employés',
      details: 'Rédigez une notice écrite et faites-la signer ou envoyez-la par email.',
      evidence: [
        'Document d\'information',
        'Preuves de diffusion',
      ],
    },
  },
  'rights-procedure': {
    high: {
      priority: 'urgent',
      section: 'Droits',
      action: 'Créer une procédure pour les demandes d\'accès',
      details: 'Définissez comment réagir si quelqu\'un demande à voir ses données : qui traite, délai (30 jours max), format de réponse.',
      evidence: [
        'Procédure documentée',
        'Modèle de réponse',
        'Registre des demandes',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Droits',
      action: 'Formaliser votre procédure d\'accès',
      details: 'Documentez les étapes et testez avec une demande fictive.',
      evidence: [
        'Procédure écrite',
        'Test effectué',
      ],
    },
  },
  'rights-deletion': {
    high: {
      priority: 'urgent',
      section: 'Droits',
      action: 'Mettre en place la suppression des données',
      details: 'Identifiez comment supprimer les données dans chaque système et documentez le processus.',
      evidence: [
        'Procédure de suppression par système',
        'Checklist de vérification',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Droits',
      action: 'Simplifier le processus de suppression',
      details: 'Documentez les étapes et désignez un responsable.',
      evidence: [
        'Procédure simplifiée',
        'Responsable désigné',
      ],
    },
  },
  'rights-contact': {
    high: {
      priority: 'urgent',
      section: 'Droits',
      action: 'Indiquer un contact pour les droits',
      details: 'Ajoutez une adresse email dédiée (ex: donnees@votreentreprise.ch) dans votre déclaration de confidentialité.',
      evidence: [
        'Email de contact visible',
        'Déclaration mise à jour',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Droits',
      action: 'Clarifier le contact pour les droits',
      details: 'Mentionnez explicitement que ce contact sert pour les demandes liées aux données personnelles.',
      evidence: [
        'Mention mise à jour',
      ],
    },
  },
  'retention-policy': {
    high: {
      priority: 'urgent',
      section: 'Droits',
      action: 'Définir vos durées de conservation',
      details: 'Pour chaque type de données, fixez une durée : devis (10 ans), candidatures (6 mois), emails marketing (3 ans), etc.',
      evidence: [
        'Tableau des durées de conservation',
        'Base légale pour chaque durée',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Droits',
      action: 'Compléter vos durées de conservation',
      details: 'Ajoutez les catégories de données manquantes.',
      evidence: [
        'Tableau complété',
      ],
    },
  },
  'retention-deletion': {
    high: {
      priority: 'important',
      section: 'Droits',
      action: 'Mettre en place une suppression régulière',
      details: 'Planifiez un nettoyage périodique (annuel ou semestriel) des données obsolètes.',
      evidence: [
        'Calendrier de nettoyage',
        'Rapports de suppression',
      ],
    },
    medium: {
      priority: 'recommended',
      section: 'Droits',
      action: 'Systématiser la suppression',
      details: 'Passez d\'une suppression occasionnelle à un processus régulier.',
      evidence: [
        'Procédure de nettoyage',
        'Preuves de suppression',
      ],
    },
  },
  'email-provider': {
    high: {
      priority: 'important',
      section: 'Emails',
      action: 'Évaluer votre fournisseur email',
      details: 'Vérifiez les conditions de votre fournisseur ou envisagez une migration vers un service suisse ou européen.',
      evidence: [
        'Contrat ou CGU du fournisseur',
        'Attestation de localisation des données',
      ],
    },
    medium: {
      priority: 'recommended',
      section: 'Emails',
      action: 'Signer un DPA avec votre fournisseur email US',
      details: 'Demandez et signez le Data Processing Agreement disponible chez la plupart des fournisseurs.',
      evidence: [
        'DPA signé',
        'Annexe de sécurité',
      ],
    },
  },
  'newsletter-consent': {
    high: {
      priority: 'urgent',
      section: 'Emails',
      action: 'Mettre en place un processus de consentement',
      details: 'Implémentez au minimum un opt-in clair, idéalement un double opt-in avec email de confirmation.',
      evidence: [
        'Procédure documentée',
        'Modèle d\'email de confirmation',
        'Registre des consentements',
      ],
    },
  },
  'unsubscribe': {
    high: {
      priority: 'urgent',
      section: 'Emails',
      action: 'Ajouter un lien de désabonnement',
      details: 'Chaque email commercial doit contenir un lien de désabonnement fonctionnel en un clic.',
      evidence: [
        'Modèle d\'email avec lien',
        'Test du processus',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Emails',
      action: 'Simplifier le désabonnement',
      details: 'Le désabonnement doit être immédiat, sans demander de connexion ou confirmation complexe.',
      evidence: [
        'Nouveau processus documenté',
        'Tests utilisateur',
      ],
    },
  },
  'cloud-inventory': {
    high: {
      priority: 'urgent',
      section: 'Cloud',
      action: 'Créer un inventaire de vos prestataires',
      details: 'Listez tous les services cloud utilisés : nom, type de données, localisation, contrat en place.',
      evidence: [
        'Tableau d\'inventaire complet',
        'Date de dernière mise à jour',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Cloud',
      action: 'Compléter votre inventaire cloud',
      details: 'Ajoutez les services manquants et vérifiez les informations existantes.',
      evidence: [
        'Inventaire mis à jour',
        'Vérification des informations',
      ],
    },
  },
  'cloud-contracts': {
    high: {
      priority: 'urgent',
      section: 'Cloud',
      action: 'Obtenir des DPA pour tous vos prestataires',
      details: 'Contactez chaque prestataire pour signer un Data Processing Agreement. La plupart proposent des DPA standards.',
      evidence: [
        'DPA signés pour chaque prestataire',
        'Tableau de suivi des contrats',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Cloud',
      action: 'Compléter vos contrats de sous-traitance',
      details: 'Identifiez les prestataires sans DPA et régularisez la situation.',
      evidence: [
        'Liste des DPA manquants',
        'DPA obtenus',
      ],
    },
  },
  'cloud-location': {
    high: {
      priority: 'urgent',
      section: 'Cloud',
      action: 'Identifier la localisation des données',
      details: 'Pour chaque prestataire, demandez où sont stockées les données et documentez-le.',
      evidence: [
        'Attestations des prestataires',
        'Tableau de localisation',
      ],
    },
    medium: {
      priority: 'important',
      section: 'Cloud',
      action: 'Évaluer les transferts hors UE',
      details: 'Pour les données hors Suisse/UE, vérifiez les garanties en place (clauses types, certifications).',
      evidence: [
        'Analyse des transferts',
        'Garanties documentées',
      ],
    },
  },
  'cloud-security': {
    high: {
      priority: 'important',
      section: 'Cloud',
      action: 'Vérifier les certifications de vos prestataires',
      details: 'Demandez les certifications sécurité (ISO 27001, SOC 2) ou évaluez la sécurité autrement.',
      evidence: [
        'Copies des certifications',
        'Questionnaires sécurité remplis',
      ],
    },
    medium: {
      priority: 'recommended',
      section: 'Cloud',
      action: 'Documenter la sécurité de vos prestataires',
      details: 'Pour les prestataires non certifiés, demandez des informations sur leurs mesures de sécurité.',
      evidence: [
        'Réponses aux questionnaires',
        'Documentation sécurité',
      ],
    },
  },
  'ai-usage': {
    high: {
      priority: 'urgent',
      section: 'IA',
      action: 'Définir une politique d\'usage de l\'IA',
      details: 'Établissez des règles claires : quels outils, quelles données peuvent être utilisées, qui valide.',
      evidence: [
        'Politique IA documentée',
        'Communication aux équipes',
      ],
    },
    medium: {
      priority: 'important',
      section: 'IA',
      action: 'Encadrer l\'usage de l\'IA avec données clients',
      details: 'Définissez quelles données peuvent être traitées par l\'IA et avec quelles garanties.',
      evidence: [
        'Règles d\'utilisation',
        'Formation des équipes',
      ],
    },
  },
  'ai-data': {
    high: {
      priority: 'urgent',
      section: 'IA',
      action: 'Sécuriser les données transmises à l\'IA',
      details: 'Signez des accords de confidentialité avec vos fournisseurs IA ou anonymisez les données avant transmission.',
      evidence: [
        'Contrats de confidentialité',
        'Procédure d\'anonymisation',
      ],
    },
    medium: {
      priority: 'important',
      section: 'IA',
      action: 'Formaliser les garanties avec vos fournisseurs IA',
      details: 'Vérifiez les conditions d\'utilisation et obtenez des garanties écrites sur le traitement des données.',
      evidence: [
        'Conditions d\'utilisation analysées',
        'Échanges avec le fournisseur',
      ],
    },
  },
  'ai-decisions': {
    high: {
      priority: 'urgent',
      section: 'IA',
      action: 'Mettre en place une revue humaine',
      details: 'Toute décision automatisée affectant une personne doit pouvoir être contestée et revue par un humain.',
      evidence: [
        'Procédure de revue',
        'Registre des décisions',
        'Voie de recours documentée',
      ],
    },
    medium: {
      priority: 'important',
      section: 'IA',
      action: 'Systématiser la revue humaine',
      details: 'Assurez-vous que chaque décision significative est validée par une personne avant application.',
      evidence: [
        'Procédure mise à jour',
        'Logs de validation',
      ],
    },
  },
  'ai-policy': {
    high: {
      priority: 'important',
      section: 'IA',
      action: 'Rédiger une politique IA',
      details: 'Documentez les outils autorisés, les règles d\'utilisation, les données interdites, les responsabilités.',
      evidence: [
        'Document de politique',
        'Accusé de réception des équipes',
      ],
    },
    medium: {
      priority: 'recommended',
      section: 'IA',
      action: 'Finaliser et communiquer votre politique IA',
      details: 'Terminez la rédaction et diffusez la politique à l\'ensemble des collaborateurs.',
      evidence: [
        'Politique finalisée',
        'Preuves de diffusion',
      ],
    },
  },
};

export function calculateResults(answers: Answer[]): AssessmentResult {
  const sectionScores: Record<string, { score: number; maxScore: number; verdict: Verdict }> = {};
  let totalScore = 0;
  let totalMaxScore = 0;
  const actions: ActionItem[] = [];

  sections.forEach((section: Section) => {
    let sectionScore = 0;
    let sectionMaxScore = 0;

    section.questions.forEach((question) => {
      const answer = answers.find((a) => a.questionId === question.id);
      const maxQuestionScore = Math.max(...question.options.map((o) => o.score));
      sectionMaxScore += maxQuestionScore;

      if (answer) {
        sectionScore += answer.score;

        if (answer.risk === 'high' && actionTemplates[question.id]?.high) {
          actions.push(actionTemplates[question.id].high);
        } else if (answer.risk === 'medium' && actionTemplates[question.id]?.medium) {
          actions.push(actionTemplates[question.id].medium);
        }
      }
    });

    const percentage = sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) * 100 : 0;
    let verdict: Verdict = 'ok';
    if (percentage < 50) verdict = 'danger';
    else if (percentage < 80) verdict = 'warning';

    sectionScores[section.id] = { score: sectionScore, maxScore: sectionMaxScore, verdict };
    totalScore += sectionScore;
    totalMaxScore += sectionMaxScore;
  });

  const hasHighRisk = answers.some((a) => a.risk === 'high');
  const percentage = totalMaxScore > 0 ? (totalScore / totalMaxScore) * 100 : 0;

  let verdict: Verdict = 'ok';
  if (hasHighRisk || percentage < 50) verdict = 'danger';
  else if (percentage < 80) verdict = 'warning';

  const sortedActions = [...actions].sort((a, b) => {
    const priorityOrder = { urgent: 0, important: 1, recommended: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return {
    verdict,
    score: totalScore,
    maxScore: totalMaxScore,
    sectionScores,
    actions: sortedActions,
  };
}
