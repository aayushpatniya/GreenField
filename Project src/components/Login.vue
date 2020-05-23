<template>
<div>
    <p id="heading">Login Form</p>
    <div class="signup-card">
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username">
            </div>
            <div class="form-group">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd">
            </div>
            <button type="button" class="btn btn-default" v-on:click="onSubmit" data-toggle="modal" data-target="#myModal">Login</button>
        </form>
    </div>
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
                        <div class="modal-footer">
                            <button type="button" id="close" class="btn btn-default" data-dismiss="modal" v-on:click="reset">Close</button>
                        </div>
                    </div>
                </div>
                </div>
                <!-- Modal End -->
</div>
</template>

<script>
export default {
    data(){
        return {
            pwd:'',
            email:'',
            username:'',
            obj:{},
            modalShow : 0,
            modalHeader : '',
            modalBody : '',
            goToNext : 0
        }
    },
    methods:{
        onSubmit(){
            this.pwd = document.getElementById("pwd").value;
            this.username = document.getElementById("username").value;

            this.obj = JSON.parse(sessionStorage.getItem(this.username));

            if(this.obj && this.obj.pwd == this.pwd){
                this.$store.state.user = this.obj;
                //console.log(this.$store.state.user);
                this.modalShow = 1;
                this.modalHeader = 'Welcome'
                this.modalBody = 'Welcome to GreenField. Enjoy Fresh Meals.'    
                this.goToNext = 1;
            }
            else{
                this.modalShow = 1;
                this.modalHeader = 'Invalid Credentials'
                this.modalBody = 'Username or Password is incorrect.'
            }
            //console.log(JSON.parse(sessionStorage.getItem('neha23.solanki7@gmail.com')));
        },
        reset(){
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            if(this.goToNext)
            {
                this.$router.push({path: 'Home'});
            }
            this.goToNext = 0;
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
</style>