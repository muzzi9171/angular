import { ILeromCard, IpsumCard } from '../interfaces/lerom-card.interface';

export interface IState {
    leromContent: ILeromCard[]; // later convert into interface.
    ipsumContent: IpsumCard[];
    dolorContent: IpsumCard[];
}
