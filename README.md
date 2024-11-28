# Generiranje `uporabniških zgodb` na osnovi temeljnega projekta

## `Generiran opis aplikacije iz GitHub Copilota`
### 1. Overview of the Application:
- **Primary Purpose**: The application is a backend service for managing measurements and products.
- **Primary Users**: Likely administrators or users who need to manage and track product measurements.

### 2. Technology Stack:
- **Frontend**: TypeScript, JavaScript, React
- **Backend**: Java, Spring Boot
- **Database**: Not explicitly mentioned, but likely a relational database given the use of repositories.
- **Third-Party Services/APIs**: Not explicitly mentioned.

### 3. Architecture:
- **High-Level Description**: 
  - The backend is a Spring Boot application that handles business logic and data management.
  - The frontend is built with React and communicates with the backend via REST APIs.
  - The database stores product and measurement data.
- **Component Connections**:
  - Frontend (React) <-> Backend (Spring Boot) <-> Database

### 4. Features:
- **Main Features**:
  - Manage products and their measurements.
  - Populate initial test data if not present.
- **User Roles and Permissions**: Not explicitly mentioned.

### 5. Data Management:
- **Data Stored**:
  - Products (e.g., name, minMeasure, maxMeasure)
  - Measurements (e.g., product ID, measurement value)
- **Data Structure**:
  - `Product` and `Measurement` entities with relationships managed via repositories.

### 6. User Interface:
- **Descriptions**:
  - Likely includes forms for adding and managing products and measurements.
  - Dashboards or lists to view existing data.
- **User Interaction**:
  - Forms for data entry.
  - Dashboards for data visualization.

### 7. Security Measures:
- **Current Measures**: Not explicitly mentioned.
- **Sensitive Data Protection**: Not explicitly mentioned.

### 8. Performance:
- **Known Issues**: Not explicitly mentioned.
- **Handling Large Data**: Not explicitly mentioned.

### 9. Scalability:
- **Scalability Design**: Not explicitly mentioned, but Spring Boot applications can be designed to scale horizontally.

### 10. Testing:
- **Testing Strategies**: Not explicitly mentioned.
- **Automated Tests**: Not explicitly mentioned.

### 11. Deployment:
- **Deployment and Hosting**: Not explicitly mentioned.
- **Deployment Scripts/Tools**: Not explicitly mentioned..

## `Seznam funkcionalnosti`
 - Add, edit, view, and delete products.
 - Each product has associated measurement constraints, like maximum and minimum temperature values.
 - Users can log temperature measurements for specified products.
 - When recorded, measurements are marked as OK (inside allowed temperature range) or NOT OK.
 - Measurements history for last 10 days is available on the Web user interface.

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



