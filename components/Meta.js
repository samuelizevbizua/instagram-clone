import Head from "next/head"

const Meta = ({title}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="Social Feed UI Demo | Samuel Izevbizua Portfolio" />
    <link rel="icon" href="/social-feed-ui-demo/icon.png"/>
  </Head>
)
Meta.defaultProps = { title: "Social Feed UI Demo | Samuel Izevbizua Portfolio" }
export default Meta
