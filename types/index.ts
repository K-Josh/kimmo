/* eslint-disable @typescript-eslint/no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined }
}

declare type SignUpParams = {
    firstName?: string;
    lastName?: string;
    region?: string;
    email: string;
    password: string;
}

declare type User = {
    $id: string;
    email: string;
    userId: string;
    firstName: string;
    lastName: string;
    name: string;
    region: string;

}

declare type LoginUser = {
    email: string;
    password: string;
};

declare interface MobileNavProps {
    user: "";
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
}

declare interface HeaderProps {
    type?: "title" | "greeting";
    title: string;
    user?: string;
    subtext: string;
}

declare interface getUserInfoProps {
    userId: string;
}

declare interface FooterProps {
    user: User;
    type?: "desktop" | "mobile"
}