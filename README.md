# Registration ESS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project description (English)

This application aims to facilitate the process of registering Red Cross volunteers for the training they need to carry out their activities.
Currently, in order to register, a volunteer has to go to the intranet, consult a pdf and send an email with the relevant information to the training administrator. The training administrator will then compile the information received by email and register the participants for the selected trainings and generate training related documents.

With this application, the user experience of the volunteers and administrators will be improved.

FRONT-END

On the user side (volunteer), the application is divided into 3 parts :

- A catalogue part which presents each training course (title, description, modalities, available places, pictograms).
- A diary section that provides information about the planned courses (training X at such a place, at such a time).
- A registration (and “cancel resgistration”) form that allows the volunteer to register for a scheduled training.

On the user side (administrator / back-office), a dashboard is set up :
The administrator can : 
- Manage the catalogue and the calendar via a CMS/Dashboard :
o Create, delete, modify a type of training from the catalogue (title, description, number of learners...).
o Add, delete, modify sessions (training actions) in the calendar (training type, given date, given place, trainer).
- Access the list of registered participants (personal data).
- Modify the list of participants: add, delete participants, edit their status (present, absent, excused).
- Download the list of participants in excel format.

BACK-END

- The list of elements (trainings, trainers, locations, registered volunteers) is in a mysql database on an OVH server. (Tables to be checked for accuracy and completed).
- The application communicates with the database via node.js (express).


## Description détaillée du projet (français)

Cette application vise à faciliter le processus d'inscription des volontaires engagés à la Croix-Rouge aux formations dont ils ont besoin pour mener à bien leurs activités.
Actuellement, pour s'inscrire, un volontaire doit se rendre sur l'intranet, consulter un pdf et envoyer un email avec les informations utiles à l'administrateur des formations. Celui-ci doit pour sa part compiler les informations qui lui parviennent par email et inscrire les participants aux formations choisies et générer des documents relatifs aux formations.

Avec cette application, l'expérience utilisateur des volontaires et des administrateurs entend être améliorée.

FRONT-END

côté utilisateur (volontaire), l'application se divise en 3 parties :

- Une partie catalogue qui présente chaque formation (titre, description, modalités, places disponibles, pictos).
- Une partie agenda qui renseigne les cours prévus (formation X à tel endroit, à tel heure).
- Une formulaire d'inscription (et de désincription) qui permet au volontaire de s'inscrire à une formation prévue.

côté utilisateur (administrateur / back-office), un dashboard est mis en place :
L'administrateur peut : 
- Gérer le catalogue et le calendrier via un CMS/Dashboard :
o Création, suppression, modification d’un type de formation du catalogue (titre, description, nombre d’apprenants…).
o Ajout, suppression, modification de séances (actions de formation) dans le calendrier (type de formation, date donnée, lieu donné, formateur).
- Accéder à la liste des inscrits (données personnelles).
- Modification de la liste des inscrits : ajouter, supprimer des participants, éditer leur statut (présent, absent, excusé).
- Télécharger la liste des participants au format excel.

BACK-END

- La liste des éléments (formations, formateurs, lieux, volontaires inscrits) se trouve dans une base de données mysql sur un serveur OVH. (Tables à vérifier sur le plan de la justesse).
- L'application communique avec la base de données via node.js (express ?).



## Roadmap

Pour la semaine du 02/01/2020, une version a minima devrait être créée :
- Partie front-end fonctionnelle (affichage de l'agenda, des formations dans le catalogue, formulaire d'inscription fonctionnel).
- Possibilité pour l'admin de voir les données de la BD et de les exporter au format excel.

Plus tard :
Version complète dynamique du back-office : modifications de l'admin qui se répercutent côté utilisateur.
