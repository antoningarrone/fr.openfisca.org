import Layout from "layouts/Layout"
import CardResource from "components/CardResource"
import resourceList from "data/resourceList"
import "styles/theme.scss"
import "styles/pages/resources.scss"

function resources() {
    const page = "resources"
    const title = "Ressources"

    return (
        <Layout page={page} title={title}>
            <ul className="flex__container">
                {resourceList.map(resource => (
                    <li className="flex__item" key={resource.title}>
                        <CardResource
                            img={resource.img}
                            title={resource.title}
                            desc={resource.desc}
                            linkexplorer={resource.linkexplorer}
                            linkgit={resource.linkgit}
                        />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default resources
