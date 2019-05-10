import Layout from "layouts/Layout"
import Partners from "components/Partners"

function Contribute() {
    const page = "contribute"
    const title = "Contribuer"

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <h2>Suggérer ou ajouter des contenus</h2>
                <h3>Ce site - tout comme ce projet - est contributif !</h3>
                <p>
                    Vous avez besoin d’un outil ? Il vous manque un élément d’information ? Vous
                    avez une suggestion ? Vous pouvez contribuer via GitHub en créant un outil pour
                    tous - en proposant une modification de contenu ou un ajout. Si vous n’êtes pas
                    en mesure de contribuer, parlez-en la communauté via Slack ou dites-le nous par
                    email ! Peut-être que d’autres membres ont le même besoin que vous.
                </p>

                <h2>Parler d’OpenFisca</h2>
                <p>
                    Vous souhaitez présenter OpenFisca à quelqu’un ? Vous voulez convaincre
                    quelqu’un de l’utiliser ? Vous écrivez un article à propos d’OpenFisca ?
                    Utilisez notre
                    {" "}
                    <a href="https://drive.google.com/open?id=1eGa4PphlDCSzhGSTFDhG6CGRafJi6cAj3vlD7wNw2NM">
                        document de présentation.
                    </a>
                </p>

                <h2>Réutiliser OpenFisca</h2>
                <p>
                    OpenFisca utilise la licence AGPL 3.0. Merci de citer OpenFisca lors de vos
                    réutilisations ! Vous pouvez avoir le détail de nos règles de réutilisations sur
                    {" "}
                    <a href="https://openfisca.org/doc/publishing.html">la documentation</a>
                    .
                </p>
            </div>
            <Partners />

            <style jsx>
                {`
                    a {
                        color: #6d69fb;
                    }
                `}
            </style>
        </Layout>
    )
}

export default Contribute
