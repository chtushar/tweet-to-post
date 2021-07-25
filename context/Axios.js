import { createContext, useContext } from 'react';
import { useAuth } from '../auth/useAuth';
import axios from 'axios';
import { oAuthBaseString, oAuthSigningKey, oAuthSignature } from '../utils';

const AxiosContext = createContext();

export const useAxios = () => {
  return useContext(AxiosContext);
};

export const AxiosProvider = ({ children }) => {
  const { credential, isAuthenticating } = useAuth();

  const getAuthorizationString = (httpMethod, baseUrl, reqParams) => {
    const consumerKey = process.env.NEXT_PUBLIC_TWITTER_API_KEY;
    const consumerSecret = process.env.NEXT_PUBLIC_TWITTER_API_SECRET;
    const accessToken = credential.accessToken;
    const accessTokenSecret = credential.secret;

    // timestamp as unix epoch
    let timestamp = Math.round(Date.now() / 1000);
    // nonce as base64 encoded unique random string
    let nonce = btoa(consumerKey + ':' + timestamp);

    let baseString = oAuthBaseString(
      httpMethod,
      baseUrl,
      reqParams,
      consumerKey,
      accessToken,
      timestamp,
      nonce,
    );

    let signingKey = oAuthSigningKey(consumerSecret, accessTokenSecret);
    let signature = oAuthSignature(baseString, signingKey);

    return (
      'OAuth ' +
      'oauth_consumer_key="' +
      consumerKey +
      '", ' +
      'oauth_nonce="' +
      nonce +
      '", ' +
      'oauth_signature="' +
      signature +
      '", ' +
      'oauth_signature_method="HMAC-SHA1", ' +
      'oauth_timestamp="' +
      timestamp +
      '", ' +
      'oauth_token="' +
      accessToken +
      '", ' +
      'oauth_version="1.0"'
    );
  };

  const twitterRequestAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.twitter.com/1.1',
  });

  const request = axios.create();

  const getHomeTweets = async (screenName) => {
    try {
      const { data } = await twitterRequestAxiosInstance.get(
        '/statuses/home_timeline.json',
        {
          headers: {
            Authorization: getAuthorizationString(
              'GET',
              'https://api.twitter.com/1.1/statuses/home_timeline.json',
              { screen_name: screenName },
            ),
          },
        },
      );
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const values = {
    twitterRequest: {
      getHomeTweets,
    },
    request,
  };

  return (
    <AxiosContext.Provider value={values}>
      {!isAuthenticating && children}
    </AxiosContext.Provider>
  );
};
