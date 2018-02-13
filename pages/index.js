import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => (
  <div id='content'>
    <div id='hero'>
      <div id='logo'>
        <img src='https://fr.openfisca.org/hotlinks/logo-openfisca.svg' />
      </div>
      <div id='pitch'>
        <p>Codez la loi ! OpenFisca permet la transcription du code législatif en code informatique. Son moteur de microsimulation aide à comprendre les lois, analyser leurs changements et simuler des situations. Entièrement libre et gratuit, modulable et réutilisable, OpenFisca transforme le droit en logiciel.</p>
        <a>DECOUVREZ COMMENT</a>
      </div>
    </div>
    <div id='introduction'>
      <p>OpenFisca est un moteur ouvert de microsimulation du système socio-fiscal. A travers OpenFisca France, une communauté de développeurs, économistes, enseignants, instituts d'études et de recherche enrichissent et améliorent les modèles de simulation du système socio-fiscal français. Un de ses objectifs, pédagogique, est de permettre d’aider les citoyens à mieux comprendre les réformes qui impactent leur quotidienne. OpenFisca et OpenFisca France sont des projets libres. Cela signifie que vous pouvez utiliser les logiciels associés, les installer, étudier leur code source, les modifier, les redistribuer de la façon que vous souhaitez. Une seule condition est imposée : les travaux dérivés d’OpenFisca doivent eux aussi être libres. Cette contrainte permet à la communauté de grandir à travers des améliorations constantes du moteur de calcul, des mises à jour des systèmes représentés et des nouveaux usages.</p>
    </div>
    <div id='trio'>
      <h2>Réutilisations</h2>
      <ul>
        <li><a>Mes Aides</a></li>
        <li><a>PNDS</a></li>
        <li><a>IDK</a></li>
      </ul>
    </div>

    <div id='commencer'>
      <h2>Débuter avec OpenFisca</h2>
      <p>Chase dog then run away purr. Hide at bottom of staircase to trip human sit in window and stare oooh, a bird, yum. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce shove bum in owner's face like camera lens but please stop looking at your phone and pet me make muffins, yet chase laser ignore the human until she needs to get up, then climb on her lap and sprawl. Gate keepers of hell hate dog, so man running from cops stops to pet cats, goes to jail. Lick the curtain just to be annoying curl up and sleep on the freshly laundered towels.</p>
      <a>Ceci est un cta</a>
    </div>

    <div id='trio_outils'>
      <h2>top 3 des outils</h2>
      <ul>
        <li><Link href='https://legislation.openfisca.fr/swagger'>API web</Link></li>
        <li><Link href='https://legislation.openfisca.fr'>Legislation Explorer</Link></li>
        <li><Link href='https://openfisca.org/doc'>Documentation</Link></li>
      </ul>
      
    </div>

    <div id='trio_plus_partenaires'>
      <h2>Nos partenaires</h2>
      <ul>
        <li><img alt='IPP' src='/static/images/logo-ipp.png'/></li>
        <li><img alt='Etalab' src='/static/images/logo-etalab.png' /></li>
        <li><img alt='MSA' src='/static/images/logo-msa.svg' /></li>
        <li><img alt='beta.gouv.fr' src='/static/images/logo-betagouv-url.svg' /></li>
        <li><img alt='IDEP' src='/static/images/logo-idep.png' /></li>
        <li><img alt='France Stratégie' src='/static/images/logo-france-strategie.jpg' /></li>
      </ul>
      <a>Ceci est un cta </a>
    </div>

    <style jsx>{`
        #hero{
          margin: 1em;
        }
        #logo{
          float: left;
          margin-right: 2em;
          margin-bottom: 2em;
        }
        #pitch {
          margin:1em;
        }
        #pitch a {
          font-size: 1em;
        }
        #content{
          margin: 3em;
          font-family: "Arial";
          font-size: 1.5em;
        }
        #pitch{
          font-size: 1.4em;
        }

        Link {
          font-size: 3em;
          background-color: black;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        ul li { display: inline; }

        li {
          list-style: none;
          margin: 7em;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </div>
  )

export default () => (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
)
