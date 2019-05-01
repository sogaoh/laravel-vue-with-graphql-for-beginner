import gql from 'graphql-tag';

// サインアップ
export const CREATE_ACCOUNT = gql`
  mutation(
    $name: String!
    $twitter_id: String!
    $email: String!
    $password: String!
    $password_confirmation: String!
  ) {
    CreateAccount(
      name: $name
      twitter_id: $twitter_id
      email: $email
      password: $password
      password_confirmation: $password_confirmation
    ) {
      account {
        twitter_id
      }
      token {
        access_token
        token_type
        expires_in
      }
    }
  }
`;

// ログイン
export const LOGIN = gql`
  mutation(
    $email: String!
    $password: String!
  ) {
    Login(
      email: $email
      password: $password
    ){
      access_token
      expires_in
    }
  }
`;