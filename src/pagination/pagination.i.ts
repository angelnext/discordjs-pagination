import {
    ButtonInteraction,
    MessageEmbed,
    TextChannel,
    User
} from "discord.js"

export interface PaginationOptions {
    /**
     * TextChannel to send to
     */
    channel: TextChannel

    /**
     * Author's user class
     */
    author: User

    /**
     * array of embed messages to paginate
     */
    embeds: MessageEmbed[]

    /**
     * customize your buttons!
     */
    buttons?: Buttons[]

    /**
     * travel pages by sending page numbers?
     */
    pageTravel?: boolean

    /**
     * two additional buttons, a button to skip to the end and a button to skip to the first page
     */
    fastSkip?: boolean

    /**
     * how long before buttons get disabled
     */
    time?: number

    /**
     * maximum interactions before disabling the pagination
     */
    max?: number
    /**
     * custom filter for message component collector
     */
    customFilter?(interaction: ButtonInteraction): boolean
}

export const ButtonsDefault = {
    first: 1,
    previous: 2,
    next: 3,
    last: 4,
    number: 5
} as const;

type Keys = keyof typeof ButtonsDefault;
export type ButtonsValues = typeof ButtonsDefault[Keys];

export interface Buttons {
    value: ButtonsValues
    label?: string|null
    emoji?: string
    style: "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER"
}