import mongoose, { Document } from 'mongoose';

export interface User {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isBusiness?: boolean;
    bio?: string;
}

export interface UserDocument extends User, Document {
    matchPassword: (password: string) => Promise<boolean>;
}

export interface UserModel extends mongoose.Model<UserDocument> {}