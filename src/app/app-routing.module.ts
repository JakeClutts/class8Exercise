import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";


const appRoutes : Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},

  { path: 'servers', component: ServersComponent, },
  { path: 'users', component: UsersComponent }
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
