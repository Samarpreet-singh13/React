import conf from "../conf/conf.js";
import { Client , Account , ID} from "appwrite";

// jab bhi naya object create hoga toh usme client aur account dono honge
// Client is used to connect to the Appwrite server and Account is used to manage user accounts
export class AuthService{
    client=new Client();
    account;// only varible is made to store the account instance
 
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

        this.account=new Account(this.client); // create an instance of Account class
    }

    async createAccount(email, password, name){
        try {
            // user is compulsory to be written in the first parameter
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email,password}); // return the response from Appwrite
            } else {
                return userAccount
            }
        } catch (error) {
            throw error; // rethrow the error for further handling
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error; // rethrow the error for further handling
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        
    }

    async logout(){
        try {
            return await this.account.deleteSessions('current'); // 'current' is used to delete the current session            
        } catch (error) {
            throw error; // rethrow the error for further handling  
            
        }
    }
}

// this is an example of a service class that handles authentication using Appwrite
const authService=new AuthService

export default authService;// we export the instance of AuthService