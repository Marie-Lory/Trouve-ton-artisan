Prérequis :
- Avoir fait des maquettes figma pour avoir la base du design du site
- Node.js 18 ou +
- MySQL 8 ou +
- Git installé

Instruction d'installation  :
- Installer WAMP pour faire fonctionner l'api
- Pour créer un projet React.js ouvre ton terminal (dans VS Code, Ctrl + ù ou Ctrl + sur Windows).
- Va dans le dossier où tu veux créer ton projet :
cd chemin/vers/ton/dossier
- Crée un nouveau projet avec Vite :
npm create vite@latest mon-projet
- Remplace mon-projet par le nom que tu veux.
- Choisis React ou React + SWC (plus rapide).
- Si on te demande TypeScript ou JavaScript, choisis JavaScript.
- Entre dans ton projet :
cd mon-projet
- Installe les dépendances :
npm install

- Instruction de lancement:
Pour l'url en ligne c'est:
https://trouve-ton-artisan-2pkp94m7s-marie-lorys-projects.vercel.app

- Clique dessus et ton projet React s’affichera

- Pour les fichier env (frontend et backend) voici les variables d'environnement a appliquer : 
Fronten : VITE_API_URL=https://trouve-ton-artisan-2.onrender.com/api
Backend : # 🌐 Configuration du serveur backend
PORT=5000

# 💾 Connexion MySQL
DB_HOST=metro.proxy.rlwy.net
DB_PORT=46073
DB_USER=root
DB_NAME=railway
DB_PASSWORD=znRZDsiadOadgzPbHWLFNmpiZDYuGAoq

- Mon projet est mis en ligne sur 3 site differents : Frontend sur Vercel (https://vercel.com/marie-lorys-projects/trouve-ton-artisan), 
Backend sur Render (https://dashboard.render.com/web/srv-d3rnm40dl3ps73fj1vog/events)
et mon API sur Railway (https://railway.com/project/05fe5faf-f3c4-4f2b-bbb4-665b2b6fb456/service/b4927a34-4630-4c83-92ab-f454043923d1/database?environmentId=2c67ed31-a10d-4880-a53a-855ebd35dd15)
