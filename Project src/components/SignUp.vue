<template>
<div>
    <p id="heading">Sign Up Form</p>
    <div class="signup-card">
        <form action="/action_page.php">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username">
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd">
            </div>
            <div class="form-group">
                <label for="cpwd">Confirm Password</label>
                <input type="password" class="form-control" id="cpwd">
            </div>
            <div class="form-group">
                <label for="address">Address</label><br>
                <textarea id="address"></textarea>
            </div>
            <button type="button" class="btn btn-default" v-on:click="onSubmit" 
            data-toggle="modal" data-target="#myModal">Sign Up</button>

                <!-- Modal -->
                <div v-if="modalShow" id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ modalHeader }}</h4>
                    </div>
                    <div class="modal-body">
                        <p>{{modalBody}}</p>
                    </div>
                    <div class="modal-footer" v-if="modalFor == 'successful'">
                        <button type="button" id="no" class="btn btn-default" data-dismiss="modal" v-on:click="goToLogin">Close</button>
                    </div>
                    <div class="modal-footer" v-if="modalFor == 'unsuccessful'">
                        <button type="button" id="cancel" class="btn btn-default" data-dismiss="modal" v-on:click="cancel">Cancel</button>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Modal End -->

        </form>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            pwd:'',
            cpwd:'',
            email:'',
            username:'',
            address:'',
            modalShow : 0,
            modalHeader : '',
            modalBody : '',
            modalFor : '',
            obj:{}
        }
    },
    methods:{
        onSubmit(){
            this.email = document.getElementById("email").value;
            this.pwd = document.getElementById("pwd").value;
            this.cpwd = document.getElementById("cpwd").value;
            this.username = document.getElementById("username").value;
            this.address = document.getElementById("address").value;
            if(this.pwd == this.cpwd){
                this.obj = {
                    email : this.email,
                    pwd : this.pwd,
                    username : this.username,
                    address : this.address
                }
                sessionStorage.setItem(this.username, JSON.stringify(this.obj));
                this.modalShow = 1;
                this.modalHeader = 'Login successful'
                this.modalBody = 'Your Account has been created.'
                this.modalFor = 'successful'
            }
            else{
                this.modalShow = 1;
                this.modalHeader = 'Login unsuccessful'
                this.modalBody = "Password and Confirm Password doesn't match"
                this.modalFor = 'unsuccessful'
            }
            //console.log(JSON.parse(sessionStorage.getItem('neha23.solanki7@gmail.com')));
        },
        goToLogin(){
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
            this.$router.push({path:"login"});
        },
        cancel(){
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
        }
    }
}
</script>

<style scoped>
.signup-card{
    width: 40%;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 36px;
    margin: auto;
    margin-top: 32px;
    box-shadow: 0px 10px 10px lightgrey;
}
#heading{
    margin: 87px 0 0 10px;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
}
textarea{
    width: 100%;
}
</style>