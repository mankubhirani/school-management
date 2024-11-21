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
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterComponent } from './shared/shared/toaster/toaster.component';  // Add FormsModule and ReactiveFormsModule
import { ToastrModule } from 'ngx-toastr';
import { LandingPageComponent } from './auth/landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  
    DashboardComponent,

    ToasterComponent,
     LandingPageComponent,
     LoginComponent,
     SignInComponent,
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
    MatOptionModule ,
    ToastrModule.forRoot({
      positionClass: 'toast-right', // Change this to set the position
      preventDuplicates: true, // Optional: Prevent duplicate notifications
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
