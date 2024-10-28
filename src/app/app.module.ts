import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Ensure this file exists
import { AppComponent } from './app.component';
import { TeachersModule } from './modules/teachers/teachers.module';
import { StudentsModule } from './modules/students/students.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { GradesModule } from './modules/grades/grades.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { MainComponent } from './auth/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,
    // Yahan aur bhi components declare kiye ja sakte hain
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeachersModule,
    StudentsModule,
    SubjectsModule,
    GradesModule,
    AttendanceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
