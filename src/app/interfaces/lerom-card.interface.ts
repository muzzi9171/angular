export interface ICard {
    id: number;
    name: string;
    age: number;
    leftLabelName: string,
    leftLabelValue: string,
    rightLabelName: string,
    rightLabelValue: string,
    preferenceProfile: string;
    expand: boolean;
}

export interface ILeromCard extends ICard {
    LoremIpsum: number;
    Lerom: number;
    Dolor: string;
}

export interface IpsumCard extends ICard {
    preferenceSummary: string;
    profileSummary: string;
    weightHeight: string;
    loremIpsumDolor: string;
    loremIpsum: string;
    loremIpsumOne: number;
    loremIpsumTwo: string;
    loremIpsumthree: string;
    loremIpsumFour: string;
    loremIpsumFive: string;
}
