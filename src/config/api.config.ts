export const apiConfig: ApiConfig = {
  clientId: process.env.REACT_APP_CLIENT_ID as string,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET as string,
  username: process.env.REACT_APP_USERNAME as string,
  password: process.env.REACT_APP_PASSWORD as string,
};

/**
 * Api config interface
 */
export interface ApiConfig {
  /**
   * Client ID of Fluent Account
   */
  clientId: string;
  /**
   * Client Secret of Fluent Account
   */
  clientSecret: string;
  /**
   * Username of Fluent Retailer
   */
  username: string;
  /**
   * Password of Fluent Retailer
   */
  password: string;
}
