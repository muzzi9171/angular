import { createAction, props } from '@ngrx/store';
import { ILeromCard, IpsumCard } from 'src/app/interfaces/lerom-card.interface';

export const updateCardContent = createAction(
    '[CARDS] Update card Content',
    props<{ dolorContent: IpsumCard[], ipsumContent: IpsumCard[], leromContent: ILeromCard[] }>()
);
