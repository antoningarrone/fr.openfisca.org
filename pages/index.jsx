import GlobalStyle from '../components/GlobalStyle'
import Piwik from '../components/Piwik'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => (
    <div className="content">
        <section>
            <h2>Tout ce que vous pouvez faire avec OpenFisca !</h2>
            <div>
                <ul className="flex__container">
                    <li className="flex__item">
                        <div className="card">
                            <div className="card__content">
                                <img src="/static/icons/economistes.svg" alt=""/>
                                <h3>Économistes & chercheurs</h3>
                Utilisez des systèmes socio-fiscaux déjà modélisés et codez vos réformes.
                Faites des simulations individuelles et sur des populations en important vos propres données.
                            </div>
                        </div>
                    </li>
                    <li className="flex__item">
                        <div className="card">
                            <div className="card__content">
                                <img src="/static/icons/admin.svg" alt=""/>
                                <h3>Administrations publiques</h3>
                Mutualisez vos efforts de mise à jour grâce au modèle contributif d’OpenFisca.
                Echangez sur une même base avec d’autres administrations publiques.
                            </div>
                        </div>
                    </li>
                    <li className="flex__item">
                        <div className="card">
                            <div className="card__content">
                                <img src="/static/icons/dev.svg" alt=""/>
                                <h3>Développeurs & équipes d'innovation</h3>
                Interrogez l’API sans installation ou hébergez votre propre instance.
                Créez des produits qui interrogent l’ensemble des règles socio-fiscales avec Python3.
                            </div>
                        </div>
                    </li>
                </ul>
                <a className="btn medium" href="/showcase/">Voir des projets</a>
            </div>
        </section>

        <section>
            <h2>Comment ça marche ?</h2>
            <div className="flex__container">
                <p>OpenFisca est un projet Open Source libre et gratuit, modulable et réutilisable. Il permet de modéliser le code législatif en code informatique, pour améliorer la transparence et l’accès à la loi.</p>
                <div className="flex__item50">
                    <img src="/static/images/openlaw.png" alt=""/>
                </div>

                <div className="flex__item50">
                    <ul>
                        <li>Utilisez un système socio-fiscal existant</li>
                        <li>Codez votre propre système</li>
                        <li>Améliorez le code d’un système existant</li>
                        <a className="btn medium" href="resources">Voir les systèmes socio-fiscaux</a>
                    </ul>
                </div>
            </div>
        </section>

        <section className="flex__container">
            <div className="flex__item50">
                <div className="flex__column">
                    <ul>
                        <li>Importez des données</li>
                        <li>Calculez une situation ou écrivez et simulez une réforme</li>
                        <li>Codez des extensions</li>
                        <a className="btn medium" href="https://fr.openfisca.org/legislation/swagger">Tester l'API web</a>

                    </ul>
                </div>
            </div>
            <div className="flex__item50" >
                <img src="/static/images/api.png" alt="" />
            </div>
        </section>

        <section className="flex__container">
            <h2>Une communauté open source internationale</h2>
            <div className="flex__item50">
                <p>OpenFisca a des contributeurs partout dans le monde !
Rejoignez une communauté d’économistes, de chercheurs, de développeurs et d’experts des droits sociaux qui s’engagent dans la transformation de la loi en code informatique !</p>
            </div>
            <div className="flex__item50">
                <img src="/static/images/community.png" alt=""/>
            </div>
        </section>

        <style jsx>{`

      li{
        list-style: none;
      }

      .flex__item50 li{
      list-style-image : url(/static/items/bullet.svg);
      padding: 1rem;
      }

      .flex__column{
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
      }

      .flex__container{
        margin-bottom: 2rem;
      }

      h3{
        line-height: 120%;
      }

      .card__content img{
      width: 3em;
      }

      section{
        margin-bottom: 6em;
      }

      @media(min-width: 40rem) {
        .flex__item50 {
          width: 50%;
          padding-left: 1rem;
          display: flex;

        }
      }

    `}</style>
    </div>
)

export default () => (
    <div>
        <GlobalStyle/>
        <Hero/>
        <Home />
        <Partners />
        <Footer />
        <Piwik page="HomePage"/>
    </div>
)
