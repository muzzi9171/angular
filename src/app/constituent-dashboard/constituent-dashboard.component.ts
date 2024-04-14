import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ITEMS } from '../constants/Item.constant';
import { leromCardConstant } from '../constants/lerom.constant';
import { IpsumContentContent } from '../constants/lpsum.constant';
import { CardLabelEnum } from '../enums/card-label.enum';
import { ILeromCard, IpsumCard } from '../interfaces/lerom-card.interface';
import { MenuItem } from '../interfaces/menu-item.interface';
import { AppSelector } from '../state';
import { AppPageActions } from '../state/actions';

@Component({
  selector: 'app-constituent-dashboard',
  templateUrl: './constituent-dashboard.component.html',
  styleUrl: './constituent-dashboard.component.scss'
})
export class ConstituentDashboardComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;
  currentTab: MenuItem;
  cardLabelEnum: any
  private destroyed$ = new Subject();
  leromContent: ILeromCard[]; // convert into interface later
  dolorContent: IpsumCard[];
  ipsumContent: IpsumCard[];
  activeTab: MenuItem;

  constructor(private store: Store) {
    this.cardLabelEnum = CardLabelEnum;
  }
  ngOnInit(): void {
    this.items = ITEMS
    this.store.dispatch(AppPageActions.updateCardContent({ dolorContent: IpsumContentContent, ipsumContent: IpsumContentContent, leromContent: leromCardConstant }));
    this.activeItem = ITEMS[0];
    this.onActiveItemChange(ITEMS[0]);
  }

  onActiveItemChange($event: MenuItem) {
    this.currentTab = $event

    if (this.currentTab.label == CardLabelEnum.DOLOR) {
      this.store.select(AppSelector.getDolorContent).pipe(takeUntil(this.destroyed$)).subscribe((data) => {
        this.dolorContent = data;
      });
    } else if (this.currentTab.label == CardLabelEnum.IPSUM) {
      this.store.select(AppSelector.getIpsumContent).pipe(takeUntil(this.destroyed$)).subscribe((data) => {
        this.ipsumContent = data;
      });
    } else if (this.currentTab.label == CardLabelEnum.LEROM) {
      this.store.select(AppSelector.getLeromContent).pipe(takeUntil(this.destroyed$)).subscribe((data) => {
        this.leromContent = data;
      });
    }

  }
}
