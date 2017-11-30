NGAgesse project
==============

Projet contenant diverses librairies et utilitaires Angular 5.
Pour l'utiliser :

    npm i
    ng serve

* * *

color-select
------------

Permet de selectionner une couleur parmi une liste de couleurs donnees par le parent.

### Utilisation

    <agesse-color-select [colors]="INPUT" #OUTPUT><agesse-color-select>


### Options

#### Inputs
* colors: tableau des couleurs (objet {label: "", css: ""}) **obligatoire**

#### Outputs
* OUTPUT.selectedColor: objet couleur selectionne

* * * 

material-colors
---------------

Constantes representant les couleurs Material Design.

### Liste des constantes

* COLOR_BASICS: correspond aux valeurs 500 des couleurs Material Design
