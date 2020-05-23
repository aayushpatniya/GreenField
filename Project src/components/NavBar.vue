<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
            </button>
            <router-link to="/home" class="navbar-brand">GreenField</router-link>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li  @click="activate(1)" :class="{ active : active_el == 1 }"><router-link to="/home">Home</router-link></li>
                <li v-if="Object.keys(user).length" @click="activate(2)" :class="{ active : active_el == 2 }"><router-link to="/order">Order</router-link></li>
                <li v-if="Object.keys(user).length" @click="activate(3)" :class="{ active : active_el == 3 }"><router-link to="/cart">Cart</router-link></li> 
            </ul>
            <ul class="nav navbar-nav navbar-right" v-if="!Object.keys(user).length">
                <li @click="activate(4)" :class="{ active : active_el == 4 }"><router-link to="/signUp">
                    <span class="glyphicon glyphicon-user"></span> Sign Up</router-link>
                </li>
                <li @click="activate(5)" :class="{ active : active_el == 5 }"><router-link to="/login">
                    <span class="glyphicon glyphicon-log-in"></span> Login</router-link>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right" v-if="Object.keys(user).length">
                <li>
                   <div class="chip" data-toggle="modal" data-target="#myModal" v-on:click="showProfile">
                        <img :src="require(`@/Assets/img_avatar.jpg`)" alt="Person" width="96" height="96">
                        {{ user.username }}
                    </div> 
                    
                    <!-- Modal -->
                    <div v-if="modalShow" id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">User Profile</h4>
                        </div>
                        <div class="modal-body">
                            <div class="profile-form">
                                <form action="/action_page.php">
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" class="form-control" id="username" :value="userObj.username">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email Address</label>
                                        <input type="email" class="form-control" id="email" :value="userObj.email">
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Password</label>
                                        <input type="password" class="form-control" id="pwd" :value="userObj.pwd">
                                    </div>
                                    <div class="form-group">
                                        <label for="address">Address</label><br>
                                        <textarea id="address" :value="userObj.address"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="profile-img">
                                <img :src="require(`@/Assets/img_avatar.jpg`)" alt="Person">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="editProfile" class="btn btn-default" data-dismiss="modal" v-on:click="saveProfile">Save Changes</button>
                            <button type="button" id="cancelProfile" class="btn btn-default" data-dismiss="modal" v-on:click="cancelProfile">Cancel</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!-- Modal End -->

                </li>
                <li v-on:click="logOut"><router-link to="/home">
                    <span class="glyphicon glyphicon-log-out"></span> LogOut</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return {
            active_el:0,
            modalShow : 0,
            modalHeader : '',
            modalBody : '',
            modalFor : '',
            userObj: {}
        }
    },
    methods:{
        activate:function(el){
            this.active_el = el;
        },
        logOut(){
            this.$store.state.user = {};
            //console.log(this.$store.state.user);
        },
        showProfile(){
            this.userObj = this.$store.state.user;
            //console.log(this.userObj)
            this.modalShow = 1;
        },
        saveProfile(){
            this.email = document.getElementById("email").value;
            this.pwd = document.getElementById("pwd").value;
            this.username = document.getElementById("username").value;
            this.address = document.getElementById("address").value;
            this.userObj = {
                email : this.email,
                pwd : this.pwd,
                username : this.username,
                address : this.address
            };
            sessionStorage.removeItem(this.user.username);
            sessionStorage.setItem(this.username, JSON.stringify(this.userObj));
            this.$store.state.user = this.userObj;
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
        },
        cancelProfile(){
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
        }
    },
    computed:{
        user(){
            //console.log(Object.keys(this.$store.state.user));
            return this.$store.state.user;
        }
    },
    mounted(){
        if(this.$route.fullPath.includes('home'))
        {
            this.active_el = 1;
        }
        if(this.$route.fullPath.includes('order'))
        {
            this.active_el = 2;
        }
        if(this.$route.fullPath.includes('cart'))
        {
            this.active_el = 3;
        }
        if(this.$route.fullPath.includes('login'))
        {
            this.active_el = 5;
        }
        if(this.$route.fullPath.includes('signUp'))
        {
            this.active_el = 4;
        }
    }
}
</script>

<style scoped>
.navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 15px;
    border: 1px solid transparent;
}
.active{
    color: #fff;
    background-color: #080808;
}
.chip {
    display: inline-block;
    padding: 0 12px;
    height: 38px;
    color: #0c7cb3;
    margin-top: 6px;
    font-size: 15px;
    line-height: 39px;
    border-radius: 25px;
    background-color: #f1f1f1;
    cursor:pointer;
    transition-duration: 300ms;
}
.chip:hover{
    color: white;
    background-color: #65aed2;
}
.chip img{
    float: left;
    margin: 0 5px 0 -15px;
    height: 36px;
    width: 36px;
    border-radius: 50%;
}
textarea{
    width: 100%;
}
.modal-body {
    position: relative;
    padding: 15px;
    height: 316px;
}
.profile-form{
        width: 55%;
    float: right;
    margin-left: 10px;
}
.profile-img{
        width: 40%;
    float: left;
}
.profile-img img {
    vertical-align: middle;
    width: 100%;
}
</style>