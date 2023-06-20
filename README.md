### Bartosz Brodowski, Security project using Keycloak

# Start

To start using the app register a user.

The project almost ran in docker-compose however I couldn't figure out how to insert a proper public key for JWT. I've checked and that's the problem, request routes return "Invalid Token" and the public keys in ENV and on keycloak differ. I found out very late that the backend was supposed to contain it's own client. It would've been achievable with keycloak-connect library however npm website shows that it's deprecated so I thought I shouldn't use it and went with typical JWT authentication that I've done in the past.

So to properly use the app the PUBLICKEY in .env should be copied from keycloak. It can be found in realm settings -> keys -> RS256 -> Public key. It should be copied to .env file in backend directory.

## Commands to run

Run frontend with `npm run dev` in the frontend directory.

Run backend with `yarn nodemon` or `node index.js` in the backend directory.

Run keycloak with `docker run -d -p 4000:8080 xatroxiu/keycloak-container:1.0.0` (you have to wait a little for everything to load)

## TechStack

- Keycloak: 20.0.3
- React: 18.2
- TailwindCSS
- Vite
- Express
- Axios
- JWT

### Snyk test results

Tested with snyk on both Frontend and Backend. Snyk has shown no vulnerabilities.

## Photos

![Welcome Screen](/assets/1.png)
![Reviews](/assets/2.png)
![Movie List](/assets/3.png)
