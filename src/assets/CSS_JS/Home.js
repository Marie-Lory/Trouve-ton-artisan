// Récupérer les éléments
          const openBtn = document.getElementById('openModalBtn');
          const modal = document.getElementById('githubModal');
          const closeBtn = document.getElementById('closeModal');
          const profileDiv = document.getElementById('profileInfo');

          // Fonction pour ouvrir la modale
          openBtn.onclick = () => {
          modal.style.display = 'block';
          fetchGitHubProfile();
        }

        // Fonction pour fermer la modale
        closeBtn.onclick = () => {
          modal.style.display = 'none';
        }

        // Fermer la modale quand on clique en dehors du contenu
        window.onclick = (event) => {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        }

        // Fonction pour récupérer et afficher les infos de GitHub
        function fetchGitHubProfile() {
          const username = 'Marie-Lory'; // Remplacez par votre nom d'utilisateur GitHub
          fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
              profileDiv.innerHTML = `
                <p><strong>Nom :</strong> ${data.name || 'N/A'}</p>
                <p><strong>Bio :</strong> ${data.bio || 'N/A'}</p>
                <p><strong>Localisation :</strong> ${data.location || 'N/A'}</p>
                <p><strong>Nombre de dépôts :</strong> ${data.public_repos}</p>
                <p><a href="${data.html_url}" target="_blank">Voir mon profil GitHub</a></p>
              `;
            })
            .catch(error => {
              profileDiv.innerHTML = '<p>Impossible de charger le profil GitHub.</p>';
              console.error('Erreur:', error);
            });
        }