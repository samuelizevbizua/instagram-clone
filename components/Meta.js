import Head from "next/head"

const Meta = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/instagram-clone/icon.png"/>
    </Head>
  )
}
Meta.defaultProps  ={
  title: 'Instagram'
}

export default Meta