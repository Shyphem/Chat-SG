#**Chat-SG**
Chat-SG est un assistant virtuel conçu pour la mairie de Saint-Grégoire. Ce projet permet aux habitants de poser des questions liées aux services municipaux, aux décrets de Rennes Métropole, et aux ressources gouvernementales officielles. L'application utilise l'API OpenAI pour fournir des réponses précises et utiles.

---

##**🎯 Objectif**
Faciliter l'accès aux informations administratives et pratiques pour les habitants de Saint-Grégoire via une interface intuitive et un chatbot performant.

---

##**🛠️ Fonctionnalités**
Posez des questions : L'utilisateur peut saisir sa question dans une zone de texte dédiée.
Réponses intelligentes : L'application répond en se basant sur des informations pertinentes (site officiel, ressources locales, etc.).
Redirections utiles : Les réponses incluent des liens cliquables vers les ressources appropriées.
Interface responsive : L'interface est simple et adaptée à tous les types d'écrans.

---

##**🚀 Installation**
Prérequis
Node.js installé sur votre machine.
Un compte OpenAI avec une clé API valide.

Étapes d'installation : 

Clonez ce dépôt :
`git clone https://github.com/votre-utilisateur/chat-sg.git`
`cd chat-sg`

Installez les dépendances :
`npm install`

Créez un fichier .env pour stocker la clé API OpenAI :
`touch .env`

Ajoutez la ligne suivante dans .env :
OPENAI_API_KEY=votre_cle_api_openai

Lancez le serveur :
`node server.js`

Accédez à l'application dans votre navigateur à l'adresse suivante :
http://localhost:3000

---

##**📂 Structure du projet**
Chat-SG/
├── public/
│   ├── index.html       # Interface utilisateur
│   ├── style.css        # Styles pour l'interface
├── server.js            # Backend (API OpenAI)
├── .env                 # Clé API OpenAI (non incluse dans Git)
├── .gitignore           # Fichiers à ignorer
└── README.md            # Documentation

---

##**🌟 Utilisation**
Rendez-vous sur la page d'accueil de l'application.
Posez une question dans la zone de texte, par exemple :

Quels sont les documents nécessaires pour un passeport ?
Cliquez sur le bouton Envoyer pour recevoir une réponse.

---

##**🛡️ Sécurité**
Les clés sensibles comme la clé OpenAI sont stockées dans le fichier .env et exclues du suivi Git via .gitignore.
Vérifiez que votre clé API est protégée et ne la partagez pas publiquement.

---

##**📋 Licence**
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le partager.

---

##**🙌 Contributions**
Les contributions sont les bienvenues ! Si vous avez des idées ou des améliorations, n'hésitez pas à ouvrir une issue ou une pull request.
