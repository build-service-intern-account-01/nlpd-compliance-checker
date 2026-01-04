import type { Section } from '../types/assessment';

export const sections: Section[] = [
  {
    id: 'governance',
    title: 'Organisation & inventaire',
    icon: 'ClipboardList',
    description: 'Gouvernance des données et documentation',
    questions: [
      {
        id: 'data-inventory',
        text: 'Avez-vous un inventaire des données personnelles traitées ?',
        helpText: 'Liste des types de données : clients, prospects, employés, candidats, etc.',
        options: [
          { value: 'yes-complete', label: 'Oui, complet et à jour', score: 3, risk: 'low' },
          { value: 'partial', label: 'Partiellement documenté', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'data-locations',
        text: 'Savez-vous où sont stockées vos données personnelles ?',
        helpText: 'Site web, CRM, emails, cloud, fichiers locaux, etc.',
        options: [
          { value: 'yes-mapped', label: 'Oui, cartographie complète', score: 3, risk: 'low' },
          { value: 'partial', label: 'Pour certains systèmes seulement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non, pas clairement identifié', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'access-management',
        text: 'Gérez-vous les droits d\'accès aux données personnelles ?',
        helpText: 'Qui peut voir/modifier les données clients, RH, etc.',
        options: [
          { value: 'yes-restricted', label: 'Oui, accès limité selon les rôles', score: 3, risk: 'low' },
          { value: 'partial', label: 'Partiellement (certains systèmes)', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non, tout le monde a accès', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'data-register',
        text: 'Tenez-vous un registre des traitements ?',
        helpText: 'Document listant tous vos traitements de données personnelles',
        options: [
          { value: 'yes', label: 'Oui, registre tenu à jour', score: 3, risk: 'low' },
          { value: 'partial', label: 'Ébauche ou incomplet', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
    ],
  },
  {
    id: 'hosting',
    title: 'Hébergement & sécurité',
    icon: 'Server',
    description: 'Sécurité technique et organisationnelle',
    questions: [
      {
        id: 'hosting-location',
        text: 'Où sont hébergées les données personnelles de vos clients ?',
        helpText: 'La nLPD exige une protection adéquate lors de transferts hors Suisse/UE',
        options: [
          { value: 'ch', label: 'En Suisse uniquement', score: 3, risk: 'low' },
          { value: 'eu', label: 'En Suisse ou dans l\'UE', score: 2, risk: 'low' },
          { value: 'adequate', label: 'Dans un pays avec niveau de protection adéquat', score: 1, risk: 'medium' },
          { value: 'other', label: 'Ailleurs ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'hosting-provider',
        text: 'Avez-vous un contrat écrit avec votre hébergeur ?',
        helpText: 'Un contrat de sous-traitance est obligatoire avec tout prestataire traitant des données',
        options: [
          { value: 'yes-complete', label: 'Oui, avec clauses de protection des données', score: 3, risk: 'low' },
          { value: 'yes-basic', label: 'Oui, mais sans clauses spécifiques', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'hosting-backup',
        text: 'Vos sauvegardes sont-elles chiffrées et testées régulièrement ?',
        options: [
          { value: 'yes', label: 'Oui, chiffrées et testées', score: 3, risk: 'low' },
          { value: 'partial', label: 'Chiffrées mais pas testées régulièrement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'security-mfa',
        text: 'Utilisez-vous l\'authentification à deux facteurs (MFA) ?',
        helpText: 'Pour les accès aux systèmes contenant des données personnelles',
        options: [
          { value: 'yes-all', label: 'Oui, sur tous les systèmes critiques', score: 3, risk: 'low' },
          { value: 'partial', label: 'Sur certains systèmes seulement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'security-passwords',
        text: 'Avez-vous une politique de mots de passe ?',
        helpText: 'Règles de complexité, renouvellement, gestionnaire de mots de passe',
        options: [
          { value: 'yes', label: 'Oui, politique appliquée', score: 3, risk: 'low' },
          { value: 'informal', label: 'Règles informelles', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'security-incident',
        text: 'Avez-vous une procédure en cas de violation de données ?',
        helpText: 'Qui contacter, quoi faire, notification au PFPDT si nécessaire',
        options: [
          { value: 'yes', label: 'Oui, procédure documentée', score: 3, risk: 'low' },
          { value: 'partial', label: 'Idée générale mais pas formalisée', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
    ],
  },
  {
    id: 'website',
    title: 'Site web & transparence',
    icon: 'Globe',
    description: 'Information des personnes concernées',
    questions: [
      {
        id: 'cookies-banner',
        text: 'Votre site affiche-t-il une bannière de cookies ?',
        helpText: 'Les visiteurs doivent pouvoir accepter ou refuser les cookies non essentiels',
        options: [
          { value: 'yes-choice', label: 'Oui, avec choix accepter/refuser', score: 3, risk: 'low' },
          { value: 'yes-info', label: 'Oui, mais informatif seulement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'privacy-policy',
        text: 'Avez-vous une déclaration de confidentialité à jour sur votre site ?',
        helpText: 'Elle doit mentionner les données collectées, les finalités, les droits des personnes',
        options: [
          { value: 'yes-complete', label: 'Oui, complète et à jour (moins d\'1 an)', score: 3, risk: 'low' },
          { value: 'yes-old', label: 'Oui, mais pas mise à jour récemment', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'forms-consent',
        text: 'Vos formulaires demandent-ils un consentement explicite ?',
        helpText: 'Case à cocher non pré-cochée pour newsletter, marketing, etc.',
        options: [
          { value: 'yes', label: 'Oui, consentement explicite requis', score: 3, risk: 'low' },
          { value: 'partial', label: 'Partiellement (certains formulaires)', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou cases pré-cochées', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'data-minimization',
        text: 'Collectez-vous uniquement les données nécessaires ?',
        helpText: 'Éviter de demander des informations superflues dans les formulaires',
        options: [
          { value: 'yes', label: 'Oui, champs strictement nécessaires', score: 3, risk: 'low' },
          { value: 'partial', label: 'Quelques champs optionnels non essentiels', score: 2, risk: 'low' },
          { value: 'no', label: 'Non, beaucoup de champs "au cas où"', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'analytics',
        text: 'Quels outils d\'analyse utilisez-vous ?',
        options: [
          { value: 'privacy', label: 'Outils respectueux (Matomo, Plausible...)', score: 3, risk: 'low' },
          { value: 'google-consent', label: 'Google Analytics avec consentement', score: 2, risk: 'low' },
          { value: 'google-no-consent', label: 'Google Analytics sans consentement', score: 0, risk: 'high' },
          { value: 'none', label: 'Aucun outil d\'analyse', score: 3, risk: 'low' },
        ],
      },
      {
        id: 'employee-info',
        text: 'Vos employés sont-ils informés du traitement de leurs données ?',
        helpText: 'Information lors de l\'embauche, règlement interne, etc.',
        options: [
          { value: 'yes', label: 'Oui, information écrite fournie', score: 3, risk: 'low' },
          { value: 'partial', label: 'Information orale ou partielle', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
    ],
  },
  {
    id: 'rights',
    title: 'Droits & conservation',
    icon: 'UserCheck',
    description: 'Droits des personnes et durées de conservation',
    questions: [
      {
        id: 'rights-procedure',
        text: 'Avez-vous une procédure pour les demandes d\'accès aux données ?',
        helpText: 'Comment réagir si quelqu\'un demande à voir ses données',
        options: [
          { value: 'yes', label: 'Oui, procédure claire et testée', score: 3, risk: 'low' },
          { value: 'partial', label: 'Idée générale mais pas formalisée', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'rights-deletion',
        text: 'Pouvez-vous supprimer les données d\'une personne sur demande ?',
        helpText: 'Droit à l\'effacement sauf obligations légales',
        options: [
          { value: 'yes', label: 'Oui, processus en place', score: 3, risk: 'low' },
          { value: 'partial', label: 'Possible mais compliqué', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'rights-contact',
        text: 'Les personnes peuvent-elles vous contacter facilement pour leurs droits ?',
        helpText: 'Email de contact visible, formulaire dédié, etc.',
        options: [
          { value: 'yes', label: 'Oui, contact clairement indiqué', score: 3, risk: 'low' },
          { value: 'partial', label: 'Contact général sans mention spécifique', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non, pas de moyen évident', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'retention-policy',
        text: 'Avez-vous défini des durées de conservation ?',
        helpText: 'Combien de temps garder devis, emails, dossiers clients, candidatures...',
        options: [
          { value: 'yes', label: 'Oui, durées définies par type de données', score: 3, risk: 'low' },
          { value: 'partial', label: 'Pour certaines données seulement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non, on garde tout', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'retention-deletion',
        text: 'Supprimez-vous régulièrement les données obsolètes ?',
        helpText: 'Nettoyage périodique des anciennes données',
        options: [
          { value: 'yes', label: 'Oui, suppression régulière', score: 3, risk: 'low' },
          { value: 'partial', label: 'Occasionnellement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non, jamais', score: 0, risk: 'high' },
        ],
      },
    ],
  },
  {
    id: 'emails',
    title: 'Emails & communications',
    icon: 'Mail',
    description: 'Gestion de vos communications électroniques',
    questions: [
      {
        id: 'email-provider',
        text: 'Quel service email utilisez-vous pour votre entreprise ?',
        options: [
          { value: 'ch', label: 'Fournisseur suisse (Infomaniak, Proton...)', score: 3, risk: 'low' },
          { value: 'eu', label: 'Fournisseur européen', score: 2, risk: 'low' },
          { value: 'us-dpa', label: 'Fournisseur US avec DPA signé', score: 1, risk: 'medium' },
          { value: 'other', label: 'Autre ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'newsletter-consent',
        text: 'Comment gérez-vous les inscriptions newsletter ?',
        helpText: 'Le double opt-in est recommandé pour prouver le consentement',
        options: [
          { value: 'double-optin', label: 'Double opt-in (email de confirmation)', score: 3, risk: 'low' },
          { value: 'single-optin', label: 'Simple inscription avec consentement', score: 2, risk: 'low' },
          { value: 'no-consent', label: 'Inscription sans consentement clair', score: 0, risk: 'high' },
          { value: 'no-newsletter', label: 'Pas de newsletter', score: 3, risk: 'low' },
        ],
      },
      {
        id: 'unsubscribe',
        text: 'Vos emails contiennent-ils un lien de désabonnement fonctionnel ?',
        options: [
          { value: 'yes', label: 'Oui, en 1 clic', score: 3, risk: 'low' },
          { value: 'yes-complex', label: 'Oui, mais processus complexe', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Prestataires cloud',
    icon: 'Cloud',
    description: 'Services cloud et sous-traitants',
    questions: [
      {
        id: 'cloud-inventory',
        text: 'Avez-vous un inventaire de vos prestataires cloud ?',
        helpText: 'CRM, comptabilité, stockage, outils collaboratifs...',
        options: [
          { value: 'yes-complete', label: 'Oui, liste complète et à jour', score: 3, risk: 'low' },
          { value: 'partial', label: 'Partiellement documenté', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'cloud-contracts',
        text: 'Avez-vous des contrats de sous-traitance (DPA) avec vos prestataires ?',
        helpText: 'Data Processing Agreement obligatoire avec tout sous-traitant',
        options: [
          { value: 'yes-all', label: 'Oui, avec tous les prestataires', score: 3, risk: 'low' },
          { value: 'yes-some', label: 'Avec certains seulement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'cloud-location',
        text: 'Savez-vous où vos prestataires stockent les données ?',
        options: [
          { value: 'yes-adequate', label: 'Oui, en Suisse/UE ou pays adéquat', score: 3, risk: 'low' },
          { value: 'yes-other', label: 'Oui, dans d\'autres pays', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non, je ne sais pas', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'cloud-security',
        text: 'Vos prestataires ont-ils des certifications sécurité ?',
        helpText: 'ISO 27001, SOC 2, etc.',
        options: [
          { value: 'yes', label: 'Oui, certifications vérifiées', score: 3, risk: 'low' },
          { value: 'some', label: 'Certains seulement', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non ou je ne sais pas', score: 0, risk: 'high' },
        ],
      },
    ],
  },
  {
    id: 'ai',
    title: 'Usage de l\'IA',
    icon: 'Brain',
    description: 'Intelligence artificielle et traitement automatisé',
    questions: [
      {
        id: 'ai-usage',
        text: 'Utilisez-vous des outils d\'IA dans votre entreprise ?',
        helpText: 'ChatGPT, Copilot, outils de génération, analyse automatisée...',
        options: [
          { value: 'no', label: 'Non, aucune utilisation d\'IA', score: 3, risk: 'low' },
          { value: 'yes-internal', label: 'Oui, pour usage interne uniquement', score: 2, risk: 'low' },
          { value: 'yes-client', label: 'Oui, avec données clients', score: 1, risk: 'medium' },
          { value: 'yes-no-policy', label: 'Oui, sans politique définie', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'ai-data',
        text: 'Transmettez-vous des données personnelles à des outils IA ?',
        options: [
          { value: 'no', label: 'Non, jamais', score: 3, risk: 'low' },
          { value: 'anonymized', label: 'Oui, mais anonymisées', score: 2, risk: 'low' },
          { value: 'yes-contract', label: 'Oui, avec contrat de confidentialité', score: 1, risk: 'medium' },
          { value: 'yes-no-contract', label: 'Oui, sans garanties', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'ai-decisions',
        text: 'L\'IA prend-elle des décisions automatisées affectant des personnes ?',
        helpText: 'Scoring, tri de candidatures, décisions de crédit...',
        options: [
          { value: 'no', label: 'Non, jamais', score: 3, risk: 'low' },
          { value: 'yes-review', label: 'Oui, avec revue humaine systématique', score: 2, risk: 'low' },
          { value: 'yes-partial', label: 'Oui, avec revue humaine partielle', score: 1, risk: 'medium' },
          { value: 'yes-auto', label: 'Oui, entièrement automatisées', score: 0, risk: 'high' },
        ],
      },
      {
        id: 'ai-policy',
        text: 'Avez-vous une politique interne sur l\'usage de l\'IA ?',
        helpText: 'Règles sur ce qui est autorisé ou interdit avec l\'IA',
        options: [
          { value: 'yes', label: 'Oui, documentée et communiquée', score: 3, risk: 'low' },
          { value: 'partial', label: 'En cours de rédaction', score: 1, risk: 'medium' },
          { value: 'no', label: 'Non', score: 0, risk: 'high' },
        ],
      },
    ],
  },
];

export const getSectionIcon = (iconName: string) => iconName;
