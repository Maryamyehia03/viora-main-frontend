import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { UiModeService } from '../../services/ui-mode.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    // standalone: true,
    imports: [MenubarModule, ButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

    public items: MenuItem[] | undefined;

    private readonly _uiModeService = inject(UiModeService)

    private readonly _router = inject(Router);

    public ngOnInit() {
        this.items = [
            {
                label: 'Home',
                command: () => {
                    void this._router.navigate(['']);
                }
                // icon: 'pi pi-home'
            },
            {
                label: 'Features',
                routerLink: 'products'
                // icon: 'pi pi-star'
            },
            {
                label: 'Contact',
                routerLink: 'contact'
                // icon: 'pi pi-envelope'
            },
            {
                label: 'About us',
                routerLink: 'about'
                // icon: 'pi pi-envelope'
            },
        ];
    }

    public toggleTheme(): void {
        this._uiModeService.toggleDarkMode();
    }

    public isDarkMode(): boolean {
        return this._uiModeService.isDarkMode();
    }

}
