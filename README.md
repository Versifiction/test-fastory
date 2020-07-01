## Fonctionnalités

- Serveur réalisé avec Hapi, qui contient plusieurs routes pour l'authentification et les requêtes (server.js)
- Routeur dans le serveur qui permet d'accéder au résultat de n'importe quelle fiche
- Authentification qui vérifie l'utilisateur et le mot de passe, renvoie un message d'erreur au client si les identifiants ne sont pas bons
- Possibilité de se déconnecter
- Utilisation du package npm easy-peasy pour gérer l'état global de l'application, semblable à Redux
- Affichage des résultats dans l'appli, avec pagination
- Possibilité d'afficher les résultats en Wookiee

## Scripts

- yarn pour installer les dépendances
- yarn start pour lancer le serveur et le client
