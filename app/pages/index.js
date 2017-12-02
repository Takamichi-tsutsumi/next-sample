import Link from 'next/link'
import Page from './layouts/default'

export default () => (
  <Page>
    <h1>Ghibli</h1>
    <Link href="/films"><a>To films</a></Link>
  </Page>
)
