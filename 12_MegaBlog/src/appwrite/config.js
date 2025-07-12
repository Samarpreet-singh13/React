import conf from "../conf/conf";
import { Client , ID , Databases , Storage , Query} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    // account tb banta h jab constructor call hota h
    // jab bhi naya object create hoga toh usme client aur account dono honge
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID 

            this.databases=new Databases(this.client);
            this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,image,status,userId}){

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    // this function is used to get all the posts from the database
    async updatePost(slug,{title,content,image,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }
            )
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.getappwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true; // return true if the post is deleted successfully
        } catch (error) {
            console.log(error)
            return false 
        }
    }

    async getPost (slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.error("Error getting post:", error);
        }
    }

    async getPosts(queries=[Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )            
        } catch (error) {
            console.log("Error getting posts:", error)
            return false
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Error uploading file:", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.error("Error deleting file:", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service=new Service();
export default service;