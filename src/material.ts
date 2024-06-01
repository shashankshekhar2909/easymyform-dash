import { NgModule } from '@angular/core';

// All Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule, MAT_TABS_CONFIG } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

const materialModules = [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTabsModule,
    MatRadioModule,
    MatSortModule,
    MatExpansionModule,
    RouterModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatChipsModule
];

@NgModule({
  exports: materialModules,
  providers: [
    {
      provide: MAT_TABS_CONFIG,
      useValue: {
        animationDuration: '0ms',
      },
    },
  ],
})
export class MaterialModule {}
