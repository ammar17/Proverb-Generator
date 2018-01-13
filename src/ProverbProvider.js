class ProverbProvider {
    constructor(props) {
        // use '/' to split proverbs.
        // No dots '.' at the end of proverbs, and no commas ',' before the '/' splitter (we'll add them in the view)
        this.proverbs = [
            "On n'apprend pas aux vieux singes/à faire des grimace.",
            "Les paroles s'envolent/les écrits restent",
            "Donner, c'est donner/reprendre, c'est voler",
            "On voit la paille dans l'oeil de son voisin/mais pas la poutre dans le sien",
            "Ne faites pas à autrui/ce que vous ne voudriez pas qu'on vous fasse",
            "Ne remets pas au lendemain/ce que tu peux faire le jour même",
            "Les bons comptes font/les bons amis",
            "La vengeance est/un plat qui se mange froid",
            "La liberté des uns s'arrête/où commence celle des autres",
            "On ne change pas/une équipe qui gagne",
            "Où il y a de la gêne/il n'y a pas de plaisir",
            "Il n'y a que les fous/qui ne changent pas d'avis",
            "Les apparences sont/souvent trompeuses",
            "Qui vole un oeuf/vole un boeuf",
            "Il ne faut pas vendre la peau de l'ours/avant de l'avoir tué",
            "Pas de nouvelles/bonnes nouvelles",
            "Mieux vaut prévenir/que guérir",
            "Un malheur/n'arrive jamais seul",
            "Loin des yeux/loin du coeur",
            "Bien mal acquis/ne profite jamais",
            "Celui qui n'expérimente jamais/ne se trompe qu'une seule fois",
            "Avec des si/on mettrait Paris en bouteille",
            "Qui aime bien/châtie bien",
            "C'est la goutte d'eau/qui fait déborder le vase",
            "C'est l'étincelle/qui met le feu aux poudres",
            "Qui ne dit mot/consent",
            "Pierre qui roulle/n'amasse pas mousse",
            "Les chiens aboient/la caravane passe",
            "Chien qui aboie/ne mord pas",
            "Au pays des aveugles/les borgnes sont rois",
            "Il n'est pire eau/que l'eau qui dort",
            "Il ne faut pas jeter le bébé/avec l'eau du bain",
            "C'est au pied du mur/qu'on voit le maçon",
            "Parlons peu/mais parlons bien",
            "Petit à petit/l'oiseau fait son nid"
        ];

        this.first_parts = [];
        this.second_parts = [];

        // Used for rating proverb combinations, so that stupid / not working ones can be dropped in the future.
        this.ratings = [];

        this.prepareProverbParts();
    }

    prepareProverbParts() {
        for (const proverb of this.proverbs) {
            let proverb_parts = proverb.split('/');
            if (proverb_parts.length === 2) {
                this.first_parts.push(proverb_parts[0]);
                this.second_parts.push(proverb_parts[1]);
            }
        }
    }

    getFirstPart() {
        let index = Math.floor(this.first_parts.length * Math.random());
        return this.first_parts[index];
    }

    getSecondPart() {
        let index = Math.floor(this.second_parts.length * Math.random());
        return this.second_parts[index];
    }
}

export default ProverbProvider;