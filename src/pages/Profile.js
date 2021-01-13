import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({ match }) => {
  const { getRepos, getUser, user, repos, loading } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getRepos(urlName)
    getUser(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className='text-center'>Загрузка...</p>
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user

  return (
    <React.Fragment>
      <Link to='/github-vm/' className='btn btn-link'>
        На главную
      </Link>
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-3 text-center'>
              <img src={avatar_url} alt={name} style={{ width: '200px' }} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className='col'>
              {bio && (
                <React.Fragment>
                  <h3>Информация</h3>
                  <p>{bio}</p>
                </React.Fragment>
              )}
              <a
                className='btn btn-dark'
                href={html_url}
                rel='noopener noreferrer'
                target='_blank'
              >
                Открыть профиль
              </a>
              <ul
                className='list-group'
                style={{
                  listStyle: 'none',
                  margin: '5px 0',
                }}
              >
                {login && (
                  <li>
                    <strong>Никнейм: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компания: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Сайт: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className='badge badge-primary mr-1'>
                Подписчики: {followers}
              </div>
              <div className='badge badge-success mr-1'>
                Подписан: {following}
              </div>
              <div className='badge badge-info mr-1'>
                Репозитории: {public_repos}
              </div>
              <div className='badge badge-dark'>Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </React.Fragment>
  )
}
