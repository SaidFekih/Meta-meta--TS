Dans ce projet j'ai utilisé Typescript.

1 : installer ypescript : npm install typescript --savel-dev
2 : Générer le fichier .js à partir du fichier .ts : npx tsc fileName.ts  
remarque - Généralement le fichier ts est créé dans un dossier SRC et les fichiers
            serons Générer dans le dossier dist : npx tsc src/app.ts --outDir dist
3 : Créer un fichier tsconfig.json pour automatiser la generation du fichier js lors 
    de la compilation.
4 : Activer le mode observeur :  npx tsc --watch              