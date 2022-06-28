
console.log("js ok")

/*Descrizione:
Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
Consigli:
Potete provare a fare l'esercizio una prima volta col for e poi convertire piano piano in while.
Lista della spesa (da convertire in array)
Uova
Pane
Latte
Biscotti
Pasta
Affettati
Formaggio
Verdura
Frutta */

/* Definisco una lista della spesa con n elementi */

const listaSpesa = ["Uova","Pane","Latte","Biscotti","Pasta","Affettati","Formaggio","Verdura","Frutta"]

console.log(listaSpesa)

/*Voglio vedere tutti gli elementi in console ma con ciclo while. Quindi devo ripetere la stampa per n volte.
Ovvero ListaSpesa.lenght  */


/*Facciamolo prima con for 


for (let i = 0; i < listaSpesa.length; i++) {
    console.log(listaSpesa[i])
}

*/


/*Con While... : Dichiaro la variabile indice fuori, stabilisco fino a quando ripetere il ciclo,
e la condizione di uscita è i++*/

let i = 0
while (i < listaSpesa.length) {
    console.log(listaSpesa[i])

    i++
}
