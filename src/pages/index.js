import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery {
    allMongodbAlphaDatabaseWpUsers {
      nodes {
        id
        display_name
        user_email
        user_login
      }
    }
  }
`

const UsersPage = ({ data }) => {
  const users = data.allMongodbAlphaDatabaseWpUsers.nodes
  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>Name: {user.display_name}</p>
              <p>Email: {user.user_email}</p>
              <p>Login= {user.user_login}</p>
              <p>ID: {user.id}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  )
}

export default UsersPage
