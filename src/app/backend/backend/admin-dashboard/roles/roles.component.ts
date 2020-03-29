import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UsersService} from '../users/users.service';
import {RolesService} from './roles.service';
import {AdminService} from '../../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'role-id', 'role', 'actions'];
  dataSource = new MatTableDataSource();
  editModel = false;
  delModel = false;
  addModel = false;
  singleRecord: any;
  addForm: FormGroup;
  editForm: FormGroup;
  submittedAdd = false;
  submittedEdit = false;
  constructor(public roleService: RolesService,
              public adminService: AdminService,
              public formBuilder: FormBuilder,
              public toastr: ToastrService) {
    this.adminService.showDashboard = false;
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoles().subscribe(
      res => {
        console.log(res, 'roles');
        this.dataSource = new MatTableDataSource(res);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  closeDialog() {
    this.editModel = false;
    this.delModel = false;
    this.addModel = false;
  }

  addRole() {
    this.addModel = true;
    this.initAddRole();
  }

  initAddRole(){
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submittedAdd = true;
    console.log(this.addForm, this.addForm.value, 'before');
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);

    this.roleService.addRole(this.addForm.value).subscribe(
      res => {
        console.log(res);
        if (res.status === true){
          this.toastr.success('Role Data Submitted', 'Success !!!');
          this.getRoles();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.addModel = false;
      }
    )
  }

  delete(element: any) {
    console.log(element);
    this.singleRecord = element;
    this.delModel = true;
  }

  deleteRole() {
    this.roleService.deleteRole(this.singleRecord.role_id).subscribe(
      r => {
        console.log(r)
        if (r.affectedRows === 1) {
          this.getRoles();
          this.toastr.success('Role Deleted', 'Success !!!');
          this.delModel = false;
        } else {
          this.toastr.error('Technical Error', 'Error!!!');
        }
      }
    );
  }

  /* Edit Role */

  get e() {
    return this.editForm.controls;
  }

  async onEdit() {
    this.submittedEdit = true;
    console.log(this.editForm, this.editForm.value, 'before');
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    console.log(this.editForm.value);

    this.roleService.editRole(this.editForm.value).subscribe(
      res => {
        console.log(res);
        if (res.affectedRows === 1){
          this.toastr.success('Role Data Submitted', 'Success !!!');
          this.editModel = false;
          this.getRoles();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.editModel = false;
      }
    );
  }

  edit(element: any) {
    this.editModel = true;
    this.singleRecord = element;
    this.initEditForm();
  }

  initEditForm() {
    this.editForm = this.formBuilder.group({
      name: [this.singleRecord.name, Validators.required],
      role_id: [this.singleRecord.role_id, [Validators.required]]
    });
  }
}
