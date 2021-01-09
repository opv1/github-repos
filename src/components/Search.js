import React, { useContext, useState } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { AlertContext } from '../context/alert/alertContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const github = useContext(GithubContext)
  const alert = useContext(AlertContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Введите данные пользователя!')
    }
  }

  return (
    <div className='form-group'>
      <input
        className='form-control'
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
        type='text'
        value={value}
        placeholder='Введите ник пользователя...'
      />
    </div>
  )
}
