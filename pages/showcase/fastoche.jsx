import Layout from "layouts/Layout"
import ProjectDesc from "components/ProjectDesc"
import ProjectAttribute from "components/ProjectAttribute"

function Fastoche() {
    const page = "fastoche"
    const title = "Fastoch€"

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <a className="outline" href="/showcase/">
                    Retour
                </a>

                <ProjectDesc
                    img="/static/projects/fastoche.png"
                    baseline="Fastoch€ est un coach d'épargne."
                    desc1="Développé par PayBoost, un acteur privé du paiement en ligne."
                    desc2="Fastoch€ est une application qui joue le rôle d’un coach d’épargne en reliant les comptes bancaires et en informant l’utilisateur sur son reste à vivre. Il permet aussi d’indiquer à l’utilisateur qu’il a droit à certaines aides sociales et à le diriger vers les administrations responsables du versement de ces aides."
                    desc3="Fastoch€ a été lancé en 2018."
                    url="https://www.fastoche.fr/"
                    textlink="Visiter Fastoch€"
                />

                <section>
                    <h2>Caractéristiques du projet</h2>
                    <ProjectAttribute
                        imgapi="/static/icons/circle/api.svg"
                        api="utilise l'API Web"
                        imgcountry="/static/icons/circle/france.svg"
                        country="interroge le système France"
                        imgsimulation="/static/icons/circle/simindividuelle.svg"
                        simulation="produit une simulation individuelle"
                        imgperimetre="/static/icons/circle/perimetre.svg"
                        perimetre="utilise le périmètre de la loi lié aux prestations sociales"
                        imgpoweredby="/static/icons/circle/startup.svg"
                        poweredby="porté par une start-up privée"
                    />
                </section>
            </div>

            <style jsx>
                {`
                    .outline {
                        color: #656565;
                        padding: 0 1% 0 1%;
                        border: #656565 1px solid;
                        border-radius: 25px;
                        max-width: 4em;
                    }
                `}
            </style>
        </Layout>
    )
}

export default Fastoche
