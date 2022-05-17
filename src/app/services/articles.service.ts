import { Injectable } from '@angular/core';
import { Article } from '../class/articles';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles : Article[]=  [

    new Article(1000000000000, `Akira toriyama`, 1000000000000, `Cela peut paraître étrange, mais alors que Dragon Ball est intimement lié à Akira Toriyama, l'auteur a toujours...`, `Même si vous n'avez jamais lu un manga, vous avez sûrement déjà entendu parler de Dragon Ball. Cette bande dessinée
    japonaise, popularisée en France à la fin des années 1980 grâce à la diffusion de son animé dans le Club Dorothée (avant
    d'être commercialisée par les éditions Glénat en 1993), est devenue rapidement un phénomène culturel. Décliné en films
    d'animation, en jeux vidéo et quantité de produits dérivés, Dragon Ball est toujours le deuxième manga le plus vendu au
    monde (avec environ 250 millions d'exemplaires écoulés) derrière One Piece.
    Un succès monstre que l'on attribue à un homme, Akira Toriyama, dont on sait malgré tout peu de choses. William
    Audureau, journaliste au Monde bercé à Dragon Ball, a voulu en savoir plus sur ce mangaka aussi adulé que méconnu. Dans
    Akira Toriyama & Dragon Ball - L'homme derrière le manga, un ouvrage à paraître le 22 mars aux éditions Pix'n Love, il
    dépeint le portrait d'un homme réservé et entêté, que rien ne prédisposait à un tel succès. Voici ce que l'on y apprend
    sur le créateur de la plus célèbre des bandes dessinées japonaises.
    Cela peut paraître étrange, mais alors que Dragon Ball est intimement lié à Akira Toriyama, l'auteur a toujours tenu à
    garder une certaine distance avec son œuvre. Sans la renier, il déclare "aimer Dragon Ball, même si ce n'est
    définitivement pas mon genre de manga favori". "Je préfère les trucs simples et idiots", précise-t-il.
    Peut-être parce que Dragon Ball n'est pas son premier grand succès au Japon. C'est sa série précédente, Dr. Slump,
    totalement loufoque et régressive, qui l'a rendu riche et célèbre dans son pays – en 1981, trois ans avant de débuter
    Dragon Ball, il se classait déjà au 35e rang des plus grosses fortunes du Japon. Mais c'est plus sûrement parce que
    l'idée de Dragon Ball ne vient pas de lui mais de son tantô (son éditeur), Kazuhiko Torishima, qui "l'a contraint à
    dessiner Dragon Ball", selon ses propres mots.
    En 1984, Akira Toriyama, qui voulait "dessiner des machines, des véhicules, des robots, tous ces bijoux d'ingénierie qui
    le fascinent, davantage que des corps athlétiques", se voit commander une série "orientée vers les combats". "Donc je
    passais mon temps à construire des modèles miniaturisés [sa passion] jusqu'à ce que le bouclage se rapproche", se
    souvient-il. Pour William Audureau, Dragon Ball est né "tiraillé entre deux interprétations très différentes de ce que
    doit être le successeur de Dr. Slump : un manga d'arts martiaux, le souhait de son éditeur, ou d'aventure, ce qui motive
    davantage son disciple".
    Il faut attendre 2016 pour que Toriyama déclare, alors âgé de 61 ans : "Dragon Ball est devenue une série que j'aime
    trop pour m'en séparer." Une confidence tardive qui explique sûrement pourquoi l'homme a accepté de scénariser le film
    Dragon Ball Super : Broly, qui sort enfin sur les écrans français le 13 mars après avoir été plébiscité en Asie.`, `img0.jpg`),

    new Article(1000000000001, `Mais ou est Lunch?`, 1000000000000, `La dernière apparition de Lunch se fit au chapitre 194 (en 1988) où Goku a battu Piccolo. Au chapitre 196, Lunch...`, `En 2003, lors d’un passage à New-York pour la version américaine du Shonen jump, une question est posée à Toriyama :
    Question : J’ai remarqué que Lunch avait disparu après l’arrivée de Raditz, que faisait-elle ?
    Réponse de Toriyama : Pour vous dire la vérité, je l’ai totalement oubliée à un moment donné. Et puis je me suis souvenu
    d’elle après un moment et j’ai dû penser à une raison pour laquelle elle avait disparu. Alors j’ai donné l’impression
    qu’elle courait après Tenshinhan.
    Entre la publication du chapitre 194 et du chapitre 196, il y a 2 semaines. Lunch est un personnage secondaire, mais
    Toriyama l’aurait oubliée en 2 semaines ?
    Cette question fut posée par un public américain et est donc à placer dans son contexte : aux États-Unis, le manga
    Dragon Ball ne fut pas publié dans l’ordre et venait d’arriver en 2003.
    Le fan devait faire référence à la série animée arrivée au États-Unis en 1995.
    Aux Etats-Unis c’est Funimation qui géra le doublage des séries animées : la série animée Dragon Ball sortit en 1995
    avec seulement les 13 premiers épisodes de septembre à décembre 1995. Ensuite ils enchaînèrent avec l’intégral de Dragon
    Ball Z de septembre 1996 à avril 2003, mais les 291 épisodes sont compactés en 276. Les épisodes 14 à 153 de Dragon Ball
    furent diffusés de septembre 2001 à décembre 2003.
    Lunch apparut dans 4 épisodes au début de Dragon Ball Z, mais dans la version américaine, les 67 premiers épisodes
    furent compactés en 53, et toutes les scènes et références à Lunch sont retirées, comme son apparition à l’épisode 285.
    A cause de ses armes à feu ? Lunch fut présente dans la version américaine de 2005.
    Ainsi le public américain a vu Lunch dans Dragon Ball de 2001 à 2003, mais ne l’avait pas vue en 1996 au début de Dragon
    Ball Z, donc les spectateurs ont dû se demander, à juste titre, où elle était passée.
    Mais quand Toriyama dit qu’il l’a oubliée c’est sa mémoire qui lui joue un tour car il ne l’a pas oubliée. En 1988,
    Toriyama avait dû juger que Lunche était trop secondaire pour être utilisée.`, `img1.jpg`),

    new Article(1000000000002, `Restaurant DBZ au japon`, 1000000000000, `C’est à Osaka que le lieu vient d’être inauguré et on y baigne naturellement dans l’univers de Dragon Ball et...`, `Depuis un mois déjà, les fans de manga au Japon peuvent profiter de l’ouverture d’un restaurant dédié à Dragon Ball Z.
    Un café-restaurant a été inauguré à Osaka le 8 décembre dernier en l’honneur de cette série.
    Dans ce restaurant inspiré du Dragon Ball Z, baptisé Dragon Ball Cafe & Diner, vous pouvez manger comme votre guerrier
    favori Gokû. Tous les plats et mets délicats qui ont figuré dans l’œuvre d’Akira Toriyama y sont proposés. On peut y
    trouver des rouleaux de printemps aux sept boules de cristal aux bouchées-vapeur Krillin, des sushis Sayen, des soupes
    de végéta ou du riz frit. Il est aussi possible d’y déguster une crêpe aux fruits à l’effigie du nuage de Son Gokû, et
    des pâtisseries en boules de cristal. En guise de boisson, des cafés inspirés des personnages principaux du manga y sont
    servis.
    Chez Dragon Ball Cafe & Diner, on retrouve tout sur le célèbre manga Dragon Ball Z qui a ses adeptes depuis sa création
    en 1984. Les fondateurs du restaurant ont exploité cette passion pour ouvrir l’établissement dans son pays d’origine
    même. Le restaurant fait également office de boutique où l’on vend des sacs, des porte-clés et des gadgets dérivés de la
    série.
    Le café-restaurant éphémère inspiré du manga sera ouvert jusqu’au 31 janvier 2018 pour satisfaire les papilles
    gourmandes. Mais étant donné les milliers de kilomètres qui vous séparent de cet établissement si intriguant, vous
    pouvez toujours aller sur Instagram pour ravir vos pupilles.`, `img2.jpg`),

    new Article(1000000000003, `Easter Egg Batman`, 1000000000000, `La référence à Batman n’a pas été découverte pendant près de 32 ans...`, `Dragon Ball Z est truffé de petits Easter Eggs. Cependant, un détail particulier dans l’arrière-plan d’un ancien épisode
    de l’anime vient tout juste d’être découvert par les fans.
    Dragon Ball est non seulement l’un des anime les plus populaires de tous les temps, mais aussi l’un des plus longs. Avec
    plus de 800 épisodes, il y a beaucoup de place pour les Easter Eggs, et le studio Toei Animation et le créateur Akira
    Toriyama en ont fait bon usage. Ainsi, des références parfois plus, parfois moins évidentes à la culture pop japonaise
    ou occidentale peuvent être trouvées dans la série.
    Il ne faut généralement pas longtemps aux fans pour découvrir les œufs de Pâques cachés. Mais un détail du 26e épisode
    de Dragon Ball Z a réussi à durer plusieurs décennies – jusqu’à ce que l’utilisateur de Reddit iamlevel5 le remarque
    récemment.
    Il s’agit d’une référence discrète mais assez évidente à la série de bandes dessinées Batman. En effet, à l’arrière-plan
    de l’épisode susmentionné, on peut voir le célèbre véhicule du sinistre super-héros, mais en orange au lieu de noir.
    Ceux qui ont vu le film Batman de Tim Burton de 1989 devraient encore bien reconnaître la Batmobile.
    Apparemment, un employé du studio d’animation Toei Animation a fait une petite blague. Il était probablement lui-même un
    grand fan de la série Batman, car lorsque le 26e épisode de DBZ a été diffusé au Japon, le film n’était même pas encore
    dans les salles de cinéma. Cela s’est passé en décembre, environ un mois plus tard et sept mois avant la première
    américaine.
    Quoi qu’il en soit, puisque l’Easter Egg n’apparaît que dans l’anime, Akira Toriyama n’en est pas à l’origine. Au lieu
    de cela, le créateur de Dragon Ball a inclus des tas d’autres hommages à des œuvres et des personnes célèbres dans son
    modèle de manga. Découvrez les 10 exemples les plus cool dans cet article.`, `img3.jpg`),

    new Article(1000000000004, `Attraction DBZ`, 1000000000000, `La franchise Universal Studios s’apprête à rendre hommage à ...`, `La franchise Universal Studio met de plus en plus en avant ses animations en rapport avec les licences de grands mangas
    japonais. Preuve en est, le parc situé à Osaka (Japon) devrait bientôt inaugurer l’ouverture d’une attraction nommée «
    Dragon Ball Z : The Real 4D ».
    Il devrait s’agir d’un film en image de synthèse qui mêlera la 3D à d’autres effets, notamment des sièges mobiles, pour
    une expérience encore plus immersive. On y suivra le célèbre combat opposant Goku à Freezer, comme l’indique la première
    image qui a fuité.
    Le manga d’Akira Toriyama rejoindra donc les attractions One Piece et Death Note, toutes prévues pour l’opération «
    Universal Jump Summer » du parc, qui se déroulera du 1er au 4 septembre prochain.
    Préparez-vous à vous transformer en Super Saiyen`, `img4.jpg`),

    new Article(1000000000005, `Triste nouvelle 😢`, 1000000000000, `Une triste nouvelle pour tous les fans du Club Dorothée.Ariane Carletti, qui était...`, `Une triste nouvelle pour tous les fans du Club Dorothée. Ariane Carletti, qui était aussi l’interprète des génériques de 
    Dragon Ball et Dragon Ball Z est décédée le 3 septembre 2019 à 61 ans. 
    Une autre icône du Club Do vient de nous quitter. Ariane Carletti, l’interprète des versions françaises des génériques 
    de Dragon Ball et Dragon Ball Z est décédée à l’âge de 61 ans. Cette information a été confirmée par la famille hier, 
    mardi 3 septembre. “C’est avec une immense tristesse qu’Eléonore et Tristan, ses enfants, et son frère Denis vous font
    part du décès d’Ariane Carletti”, explique le communiqué de la famille, relayé par le Parisien. Fille de l’actrice Louise 
    Carletti, et du réalisateur Raoul André, Ariane faisait ses débuts à la télévision sur Antenne 2 en 1980. En très peu de temps,
    elle devient l’une des icônes du Club Dorothée, cette dernière s’étant exprimée sur sa disparition. Elle a dit au Parisien 
    qu’elle “garderait en tête toutes ces années de complicité, d’émotion, de tendresse, de grands moments et d’aventures passées
    ensemble”, concluant qu’Ariane était une femme “pétillante” et pleine de courage. Depuis l’annonce de son décès, elle a eu 
    droit à un florilège d’hommages sur Twitter.
    Ariane a contribué à faire la renommée du Club Do, ce phénomène générationnel sur lequel nous découvrions il y a près de 30 ans 
    l’animation nippone, à travers des animés cultes tels que Saint Seiya, Cobra, Sailor Moon et bien entendu, la franchise Dragon Ball.
    Cette dernière a su transcender les générations, et ce, même si son papa, Akira Toriyama n’en comprend pas le succès.
    Et si les génériques, interprétés en français par Ariane ont marqué les esprits, ce ne sont pas les seuls que l’on retiendra d’elle.
    On lui doit aussi les musiques d’ouverture de Charlotte aux fraises, des Bisounours et même de Yakari. 
    Après une carrière prolifique en tant qu’animatrice, puis productrice et directrice artistique, Ariane avait fait un come-back
    musical à l’Olympia en 2010, où elle interprétait son désormais célèbre et iconique hymne contant les aventures de Son Gohan.`, `img5.jpg`)
]

  constructor() { }



  addArticle(article: Article) : void{
    this.articles.push(article);
  };

  articleById(id: number): Article{
   let  elemToreturn: Article;
   elemToreturn = this.articles.filter(article => article.id === id)[0];
   
   return elemToreturn;
  }
  

}

