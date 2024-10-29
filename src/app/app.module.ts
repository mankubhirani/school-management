import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Add FormsModule and ReactiveFormsModule

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
    // You can declare more components here as needed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeachersModule,
    StudentsModule,
    SubjectsModule,
    GradesModule,
    AttendanceModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,  // Ensure FormsModule is added here
    ReactiveFormsModule,  // Ensure ReactiveFormsModule is added here
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,  // Added MatSelectModule
    MatOptionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
