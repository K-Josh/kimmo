/* eslint-disable @typescript-eslint/no-unused-vars */


declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined }
}

declare type SignUpParams = {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    username: string;
}

declare type User = {
    $id: string;
    email: string;
    userId: string;
    firstName: string;
    lastName: string;
    username: string;
}

declare type LoginUser = {
    email: string;
    password: string;
};

declare type MobileNavProps = {
    user: User;
}

declare interface NavItemProps {
    user: User;
}

declare interface AuthFormProps {
    type: "sign-in" | "sign-up";
}

declare interface SidebarProps {
    user: User;
}

declare interface signInProps {
    email: string;
    password: string;
    username: string;
}

declare interface getUserInfoProps {
    userId: string;
}