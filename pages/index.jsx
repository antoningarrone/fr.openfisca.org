import Home from "layouts/Home"
import Hero from "components/Hero"
import Partners from "components/Partners"

function index() {
    const page = "HomePage"
    const title = "Accueil"

    return (
        <Home page={page} title={title}>
            <Hero />
            <div className="content">
                <section>
                    <h2>Tout ce que vous pouvez faire avec OpenFisca !</h2>
                    <div>
                        <ul className="flex__container">
                            <li className="card">
                                <h3>
                                    <img src="/static/icons/economistes.svg" alt="" />
                                    Économistes & chercheurs
                                </h3>
                                Utilisez des systèmes socio-fiscaux déjà modélisés et codez vos
                                réformes. Faites des simulations individuelles et sur des
                                populations en important vos propres données.
                            </li>
                            <li className="card">
                                <h3 className="">
                                    <img className="" src="/static/icons/admin.svg" alt="" />
                                    Administrations publiques
                                </h3>
                                Mutualisez vos efforts de mise à jour grâce au modèle contributif
                                d’OpenFisca. Échangez sur une même base avec d’autres
                                administrations publiques.
                            </li>
                            <li className="card">
                                <h3>
                                    <img src="/static/icons/dev.svg" alt="" />
                                    Développeurs & équipes d’innovation
                                </h3>
                                Interrogez l’API sans installation ou hébergez votre propre
                                instance. Créez des produits qui interrogent l’ensemble des règles
                                socio-fiscales avec Python 3.
                            </li>
                        </ul>
                        <a className="btn medium" href="/showcase/">
                            Voir des projets
                        </a>
                    </div>
                </section>

                <section>
                    <h2>Comment ça marche ?</h2>
                    <p>
                        OpenFisca est un projet Open Source libre et gratuit, modulable et
                        réutilisable. Il permet de modéliser le code législatif en code
                        informatique, pour améliorer la transparence et l’accès à la loi.
                    </p>
                    <div className="flex__container">
                        <div className="flex__item50">
                            <img src="/static/images/openlaw.png" alt="" />
                        </div>
                        <div className="flex__item50">
                            <ul>
                                <li>Utilisez un système socio-fiscal existant</li>
                                <li>Codez votre propre système</li>
                                <li>Améliorez le code d’un système existant</li>
                                <a className="btn medium" href="resources">
                                    Voir les systèmes socio-fiscaux
                                </a>
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
                                <a
                                    className="btn medium"
                                    href="https://fr.openfisca.org/legislation/swagger"
                                >
                                    Tester l’API web
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className="flex__item50">
                        <img src="/static/images/api.png" alt="" />
                    </div>
                </section>

                <section>
                    <h2>Une communauté open source internationale</h2>
                    <div className="flex__container">
                        <div className="flex__item50">
                            <p>
                                OpenFisca a des contributeurs partout dans le monde ! Rejoignez une
                                communauté d’économistes, de chercheurs, de développeurs et
                                d’experts des droits sociaux qui s’engagent dans la transformation
                                de la loi en code informatique !
                            </p>
                        </div>
                        <div className="flex__item50">
                            <img src="/static/images/community.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <Partners />

            <style jsx>
                {`
                section {
                    margin-bottom: 6em;
                }

                li {
                    list-style: none;
                }

                .card img {
                    width: 3em;
                }

                .card h3 {
                    display: flex;
                }

                .flex__item50 li {
                    list-style-image: url("/static/items/bullet.svg");
                    padding: 1rem;
                }

                .flex__column {
                    display: flex;
                    flex-direction: column;
                    padding-left: 1rem;
                }

                @media (max-width: 50rem) {
                    //small screen (50rem = 600px with font 12)
                    .flex__container {
                        flex-flow: row wrap;
                    }
                }

                @media (min-width: 75rem) {
                    //wide screen (75rem = 900px with font 12)
                    .flex__item50 {
                        display: flex;
                        padding-left: 1rem;
                        width: 50%;
                    }
                }
            `}
            </style>
        </Home>
    )
}

export default index
