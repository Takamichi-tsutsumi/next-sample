import React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import { makeStore } from '../redux/store'

class FilmsContainer extends React.Component {
  static getInitialProps = async ({store, isServer, pathname, query}) => {
    const res = await fetch('https://ghibliapi.herokuapp.com/films')
    const data = await res.json()

    store.dispatch({ type: 'FETCH_FILMS_SUCCESS', payload: data })
  }

  render() {
    return ( 
      <div>
        <ul>
          {this.props.films.data.map(film => <li key={film.id}>{film.title}</li>)}
        </ul>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div> 
    )
  }
}

FilmsContainer = withRedux(makeStore, 
  (state) => ({ films: state.films }),
)(FilmsContainer);

export default FilmsContainer
