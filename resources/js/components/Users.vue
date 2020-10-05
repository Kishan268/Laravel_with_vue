<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-12">
                <div class="card">
                  <div class="card-header">Users Table
                    <div class="card-tools">
                      <button class="btn btn-success full-right" data-toggle="modal" data-target="#addNew">Add User<i class="fa fa-user-plus fa-fw"></i></button>
                    </div>
                    </div>
                    <div class="card-body">
                       <div class="box">
                          
                            <!-- /.box-header -->
                            <div class="box-body table-responsive no-padding">
                              <table class="table table-hover">
                                <tbody>
                                  <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Type</th>
                                  <th>Bio</th>
                                  <th>Action</th>
                                </tr>
                                <tr v-for="user in users" key="user.id">
                                  <td>{{user.id}}</td>
                                  <td>{{user.name}}</td>
                                  <td>{{user.email}}</td>
                                  <td>{{user.type}}</td>
                                  <td>{{user.bio}}</td>
                                  <td>
                                    <a href=""> <i class="fa fa-edit blue"></i></a> /
                                    <a href=""> <i class="fa fa-trash red"></i></a>
                                  </td>
                                </tr>
                                
                              </tbody></table>
                            </div>
                            <!-- /.box-body -->
                          </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addNewLabel">Add New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="userCreate">
              <div class="modal-body">
                 <div class="form-group">
                  <label>Username</label>
                  <input v-model="form.name" type="text" name="name"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                  <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input v-model="form.email" type="text" name="email"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="form.password" type="password" name="password"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                  <has-error :form="form" field="password"></has-error>
                </div>
                <div class="form-group">
                  <label>User Role</label>
                  <!-- <input v-model="form.type" type="text" name="type"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('type') }"> -->
                    <select v-model="form.type"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                      <option value=""> Select Role</option>
                      <option value="Admin"> Admin</option>
                      <option value="User"> User</option>
                    </select> 
                  <has-error :form="form" field="type"></has-error>
                </div>
                <div class="form-group">
                  <label>Bio</label>
                  <textarea v-model="form.bio" type="text" name="bio"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                  <has-error :form="form" field="bio"></has-error>
                </div> 
                
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
              </div>
            </form>
            </div>
          </div>
        </div>
</div>
</template>

<script>
    export default {

       data () {
          return {
            users:{},
            // Create a new form instance
            form: new form({
              name: '',
              email: '',
              password: '',
              type: '',
              bio: '',
              photo: ''
            })
          }
        },
        methods: {

          loadUsers(){
            axios.get('api/user').then(({data})=>(this.users=data))
          },
          userCreate () {
          // Submit the form via a POST request
          // this.$Progress.start(); 
          this.form.post('api/user');
          // this.$Progress.finish();
          $('#addNew').modal('hide');
          toast.fire({
            icon: 'success',
            title: 'User created in successfully'
          }) 
          this.loadUsers();
          reset ();
         
        }
        },
        created() {

            this.loadUsers();
        }
    }
</script>
