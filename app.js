// EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
// f(4,2) retourne true
// f(4,7) retourne false


// function a_sup_b(a, b) {
//     return a > b
// }
// console.log(a_sup_b(4, 2));
// console.log(a_sup_b(4, 7));
// console.log(a_sup_b(50, 3));


// EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
// f("test") retourne "tset"


// function reverse(string) {
//     let new_sentence = ""
//     for (let i = string.length - 1; i >= 0; i--) {
//         new_sentence += string[i]
//     }
//     return new_sentence
// }
// console.log(reverse("test"));
// console.log(reverse("123456789"));


// EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
// f("kayak") retourne true
// f("test") retourne false


// function palindrome(word) {
//     word = word.split("")

//     //remove letter mid if impair
//     if (word.length % 2 !== 0) {
//         word.splice([Math.ceil(word.length / 2) - 1], 1)
//     }
//     console.log(word);

//     let is_palindrome = true
//     for (let i = 0; i < word.length / 2; i++) {
//         if (word[i] !== word[word.length - i - 1]) {
//             is_palindrome = false
//         }
//     }

//     return is_palindrome
// }
// console.log(palindrome("kayak"));
// console.log(palindrome("test"));

// console.log(palindrome("qaanaaq"));
// console.log(palindrome("ab_ba"));
// console.log(palindrome("skfjksdbjkfdjl"));
// console.log(palindrome("jevaismanger_jevaismanger"));
// console.log(palindrome("jevaismanger_regnamsiavej"));

// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120


// function factoriel(num) {
//     let total = 1
//     for (let i = 1; i <= num; i++) {
//         total = total * i
//     }
//     return total
// }
// console.log(factoriel(5));
// console.log(factoriel(12));


// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false


// function is_prime(num) {
//     if (num <= 1) {
//         return false
//     }
//     let divisible = true
//     let i = 2
//     while (i !== num) {
//         if (Number.isInteger(num / i) && num / i !== 1) {
//             divisible = false
//         }
//         i++
//     }
//     return divisible
// }
// console.log(is_prime(11));
// console.log(is_prime(20));
// console.log(is_prime(29));


// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle


// function max(arr) {
//     return Math.max(...arr)
// }
// console.log(max([50, 5086877970, 6232, 1, 2, 3, 24356, 4564564465]));
// console.log(max([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));


// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme

// function anagramme(sentence1, sentence2) {
//     sentence1 = sentence1.toLowerCase()
//     sentence2 = sentence2.toLowerCase()


//     let letters = {
//         sentence1_letters: {},
//         sentence2_letters: {}
//     }

//     for (let i = 0; i < sentence1.length; i++) {
//         if (sentence1[i] !== " ") {

//             if (!letters.sentence1_letters[sentence1[i]]) {
//                 letters.sentence1_letters[sentence1[i]] = 1
//             } else {
//                 letters.sentence1_letters[sentence1[i]]++
//             }
//         }
//     }
//     for (let i = 0; i < sentence2.length; i++) {
//         if (sentence2[i] !== " ") {
//             if (!letters.sentence2_letters[sentence2[i]]) {
//                 letters.sentence2_letters[sentence2[i]] = 1
//             } else {
//                 letters.sentence2_letters[sentence2[i]]++
//             }
//         }
//     }
//     console.log(letters);

//     let is_anagramme = true

//     for (const key in letters.sentence1_letters) {

//         if (letters.sentence1_letters[key] !== letters.sentence2_letters[key]) {
//             is_anagramme = false
//         }
//     }

//     return is_anagramme
// }

// console.log(anagramme("La crise économique", "Le scénario comique"));
// console.log(anagramme("dsq", "qsd"));
// console.log(anagramme("abc", "abb"));
// console.log(anagramme("JE SUIS TROP FORT", "frottoirs jupes"));


// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)


// function caractere_unique(sentence) {
//     let letters = {

//     }
//     let caractere_are_unique = true
//     for (let i = 0; i < sentence.length; i++) {
//         if (!letters[sentence[i]]) {
//             letters[sentence[i]] = 1
//         } else {
//             caractere_are_unique = false
//         }
//     }
//     return caractere_are_unique
// }

// console.log(caractere_unique("test"));
// console.log(caractere_unique("hospital"));
// console.log(caractere_unique("Test"));

// console.log(caractere_unique("abcdeFfgGkjPpMmQlq"));
// console.log(caractere_unique("aAbBcCdDEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz564312"));


// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand



// function second_plus_grand(arr) {
//     let premier = arr[0]
//     let second = arr[1]
//     let tmp
//     if (premier < second) {
//         tmp = premier
//         premier = second
//         second = tmp
//     }

//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > premier) {
//             tmp = premier
//             premier = arr[i]
//             second = tmp
//         } else if (arr[i] > second) {
//             second = arr[i]
//         }
//     }
//     return second
// }

// console.log(second_plus_grand([5, 6, 2, 9, 23]));
// console.log(second_plus_grand([12, 54, 32, 565, 56, 98889, -45, 55, -5, 21]));


// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)


// function somme_nbr_paire(arr) {

//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             total += arr[i]
//         }
//     }
//     return total
// }
// console.log(somme_nbr_paire([3, 2, 6]));
// console.log(somme_nbr_paire([2, 3, 4, 6, 8, 10, 12, 14, 16, 57, 59779, 999999, 757563, 1, 2, 3, 1]));


// EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// f("bonjour je vais bien") affiche "bien vais je bonjour"
// la fonction ne retourne rien

// function reverse_sentence(sentence) {
//     sentence = sentence.split(" ")
//     let new_sentence = ""
//     for (let i = sentence.length - 1; i >= 0; i--) {
//         new_sentence += sentence[i] + " "
//     }
//     return new_sentence
// }

// console.log(reverse_sentence("bonjour je vais bien"));
// console.log(reverse_sentence("gentille tres est exercice cet corrige qui personne la"));


// EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)
// Vous devez utiliser la méthode filter()

// function remove_n_in_arr(arr, n) {
//     return arr.filter(num => num !== n)
// }

// console.log(remove_n_in_arr([3, 5, 7, 3, 1, 3, 5], 3));

// console.log(remove_n_in_arr([3, 5, 7, 3, 1, 3, 5], 5));
// console.log(remove_n_in_arr([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 55, 5,], 5));


// EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"



// note au correcteur il n'y a pas de A dans bonjour
// et le Y est une voyelle dans voyage || voyage = 4 voyelle
// function sum_of_vowel(sentence) {
//     let sum_of_vowel = 0
//     sentence = sentence.toLowerCase()

//     for (let i = 0; i < sentence.length; i++) {
//         switch (sentence[i]) {
//             case "a":
//                 sum_of_vowel++
//                 break;
//             case "e":
//                 sum_of_vowel++
//                 break;
//             case "i":
//                 sum_of_vowel++
//                 break;
//             case "o":
//                 sum_of_vowel++
//                 break;
//             case "u":
//                 sum_of_vowel++
//                 break;
//             case "y":
//                 sum_of_vowel++
//                 break;
//         }
//     }
//     return sum_of_vowel
// }

// console.log(sum_of_vowel("bOnjOur"));
// console.log(sum_of_vowel("voyage"));
// console.log(sum_of_vowel("aeyouyuuuyyuyuayyyuyuayyuyueiiiiiieiie"));


// EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23


// function plus_petit(arr) {
//     let plus_petit = arr[0][0]

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {

//             if (arr[i][j] < plus_petit) {
//                 plus_petit = arr[i][j]
//             }
//         }
//     }

//     return plus_petit
// }
// console.log(plus_petit([[1, 2, 3], [5, 6, 7], [39, -23, 0]]));
// console.log(plus_petit([[1, 2, 3, 23132, -566], [5, 6, 12323, 65, -994685, -45644444444, 7], [39, -23, 0]]));
// console.log(plus_petit([[5456, 2564, 3564, 23132, 10], [5, 6, 12323, 65, 50, 145, 7], [39, 500, 8900]]));


// EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2


// function index_of_n(n, arr) {

//     let index_of_n = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             index_of_n.push(i)
//         }
//     }
//     return index_of_n
// }
// console.log(index_of_n(3, [3, 5, 3, 6]));
// console.log(index_of_n(6, [3, 5, 3, 6, 5, 5, 5, 6, 456, 96, 97987, 45, 54, 4, 6, 6, 6, 6456, 6, 6, 45646, 6, 6, 4657489679456, 6, -6, -564654654]));



// EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
// f(102543) retourne 6 car 102543 contient 6 chiffres

// function num_of_number(num) {
//     return `${num}`.length
// }

// console.log(num_of_number(102543));
// console.log(num_of_number(5456549879874287));