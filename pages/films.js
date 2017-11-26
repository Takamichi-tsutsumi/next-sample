import Link from 'next/link'
import fetch from 'isomorphic-fetch'

const About = (props) => (
  <div>
    <ul>
      {
        props.films.map(film => (<li key={film.id}>{ film.title }</li>))
      }
    </ul>
    <Link href="/"><a>Home</a></Link>
  </div>
)

About.getInitialProps = async () => {
  const res = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await res.json()

  return { films: data }
}


export default About
