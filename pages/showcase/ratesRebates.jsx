import Layout from "layouts/Layout"
import ProjectDesc from "components/ProjectDesc"
import ProjectAttribute from "components/ProjectAttribute"

function RatesRebates() {
    const page = "ratesrebates"
    const title = "Rates rebates"

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <a className="outline" href="/showcase/">
                    Retour
                </a>

                <ProjectDesc
                    img="/static/projects/ratesrebates.png"
                    baseline="Prototyper le versement automatique d’une aide sociale."
                    desc1="Produit par Lab Inno NZ, l’équipe d’innovation du gouvernement néo-zélandais, ce prototype vise à faciliter le versement automatique de l’aide Rates Rebates pour le public senior."
                    desc2="L’équipe a intégralement modélisé le système socio-fiscal néo-zélandais."
                    desc3="Rates Rebates a été prototypé en 2018."
                    url="https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/"
                    textlink="Lire l'étude"
                />

                <section>
                    <h2>Caractéristiques du projet</h2>
                    <ProjectAttribute
                        imgapi="/static/icons/circle/api.svg"
                        api="utilise l'API Web"
                        imgcountry="/static/icons/circle/nz.svg"
                        country="interroge le système Nouvelle-Zélande"
                        imgsimulation="/static/icons/circle/simindividuelle.svg"
                        simulation="produit une simulation individuelle"
                        imgperimetre="/static/icons/circle/perimetre.svg"
                        perimetre="utilise le périmètre de la loi lié aux prestations sociales"
                        imgpoweredby="/static/icons/circle/admin.svg"
                        poweredby="porté par une administration publique"
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

export default RatesRebates
