import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './App.module.css';
import Login from './components/Login/Login';
import { getToken } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player/Player';
import { useDataLayerValue } from './services/DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlist,
        })
      })

    }

  }, []);
  console.log("I am user", user);
  console.log("I am token", token)

  return (
    <div className={cx(styles.app)}>
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
