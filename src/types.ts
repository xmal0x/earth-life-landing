export interface NavigationLink {
    id: string,
    title: string
}

export interface Program {
    title: string,
    text: string,
    icon: string
}

export interface Result {
    icon: string,
    title: string,
    description: string
}

export interface Benefactor {
    name: string,
    position: string,
    image: string,
    instagramLink: string,
    linkedinLink: string,
    twitterLink: string
}

export interface Feedback {
    name: string,
    position: string,
    text: string,
    image: string
}

export interface FooterLink {
    id: string,
    title: string
}

export type AnimationDirection = 'left' | 'right' | 'up' | 'down'

export type AnimationType = 'decay' | 'spring' | 'keyframes' | 'tween' | 'inertia'
