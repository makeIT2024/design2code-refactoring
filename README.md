# Generiranje `uporabniških zgodb` na osnovi temeljnega projekta

## `S pregledom kode`
- Browse the code available in the src/main folder and all its subfolders on the following link: ... Based on your knowledge of this repository, generate some user stories that we can develop in future sprints.

## `Z razlago funkcionalnosti`
I have developed an application with the following functionalities:
 - Add, edit, view, and delete products.
 - Each product has associated measurement constraints, like maximum and minimum temperature values.
 - Users can log temperature measurements for specified products.
 - When recorded, measurements are marked as OK (inside allowed temperature range) or NOT OK.
- Measurements history for last 10 days is available on the Web user interface.

Can you generate some user stories that we can develop in future sprints?

## `Definicija sprejemnih kriterijev`
What would be the acceptance criteria for the generated user stories in the previous prompt?

## `Generiranje razvojnih nalog in ocenjevanje truda`
Break down the user stories generated above into specific tasks and provide time estimates in hours for them.


# Refaktoriranje kode generirane na podlagi Design2Code  

## `design2code` mapa
 - Vsebuje generirano kodo
 - Koda je brez popravkov in vsebuje napake, ki jih je potrebno odpraviti

## `frontend` mapa
 - Vsebuje prazno React aplikacijo ustvarjeno s pomočjo react-create-app
 - React aplikacija je napisana v jeziku TypeScript

## Potek refaktoriranja
 - Premaknite se v mapo `frontend`
 - Namestite pakete z ukazom `npm install`
 - Zaženite React aplikacijo z ukazom `npm start`
 - V mapi `frontend/src` ustvarite mapo `components` in vanjo prekopirajte vsebino mape `design2code`
 - Mapo `frontend` odprite z VS Code (ali drugim IDE) in s pomočjo GitHub Copilot refaktorirajte
   - Odpravite napake v kodi
   - Poskrbite za ustrezno prikazovanje stilov
   - Poskrbite za prikazovanje podatkov iz zaledja (odstranite statične podatke)
   - **Namig:** uporabite ukaz `@workspace` za podajanje konteksta

## Zagon zaledja (mapa `backend`)
 - Zaženete `build.bat` in nato `run.bat` (Windows) ali
 - `mvnw clean package` in nato `mvnw spring-boot:run` (Windows) ali
   - projekt vključuje maven wrapper, zato se uporablja ukaz `mvnw` namesto `mvn`
 - `./mvnw clean package` in nato `./mvnw spring-boot:run` (Linux) ali
 - `docker-compose build` in nato `docker-compose up`.



