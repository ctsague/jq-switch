var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	$(".button").click(function(){
		// 2. dans le callback récupérez le data attribute animal
		var animalType = $(this).data('animal');
		//console.log(animalType);
		// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
		var photo = species[animalType];
		// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
		$("img").attr('src', 'img/'+photo); //source et chemin
		// 5. inserez cet élément dans l'élément ayant l'id holder
	}); 
}

$(document).ready(function(){
	main();
});
