import React from 'react';
import { graphql } from 'gatsby';

const HomePage = ({ data }) => {
  const users = data.allMongodbAlphaDatabaseWpUsers.nodes;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.display_name}</strong> - {user.user_email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allMongodbAlphaDatabaseWpUsers {
      nodes {
        display_name
        id
        user_email
      }
    }
  }
`;

export default HomePage;
