import { gql } from '@apollo/client';

export const GET_ME = gql`
    query {
        me {
            username
            savedBooks {
                title
                image
                description
                authors
                bookId
            }
        }
    }
`;