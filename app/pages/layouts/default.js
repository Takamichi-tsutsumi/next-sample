import Head from 'next/head'
import style from '../../assets/css/style.scss'

export default (props) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8"/>
      </Head>
      { props.children }
      <style jsx global>{ style }</style>
    </div>
  )
}
