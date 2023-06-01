<template>
    <div>
        <div :class="{'not': this.isHidden === false, 'visible': this.isHidden}">
            <h2>LOGIN CORRECTO</h2>
            <button logout="logout-button" @click="reload">GENIAL</button>
            <hr>
        </div>

        <form @submit="submitForm">
            <label for="username">User</label>
            <input type="text" placeholder="Type your username" id="username" v-model="username" required>

            <label for="password">Password</label>
            <input type="password" placeholder="And your password" id="password" v-model="password" required>

            <button type="submit">LOGIN</button>

        </form>
    </div>
</template>
  

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: '',
            password: '',
            isHidden: false
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();

            const formData = {
                username: this.username,
                password: this.password,
            };
            console.log(formData)
            axios.post('http://localhost:8081/login', formData)
                .then(response => {
                    console.log(response.data.message);
                    if(response.data.message === 'Inicio de sesión exitoso') {
                        this.isHidden = true;
                    }
                    else {
                        this.isHidden = false;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        reload() {
            location.reload();
        }
    },
};


</script>

<style scoped>
div.not {
    display: none;
}

div.visible {
    display: block;
}

label {
    display: block;
    font-size: 24px;
}

input {
    border-radius: 10px;
    font-size: 24px;
    width: 55%;
    height: 40px;
    margin-bottom: 10px;
    text-align: center;
    border: 3px solid #35495e;
}

button {
    cursor: pointer;
    width: 57%;
    height: 50px;
    padding: 10px;
    color: #35495e;
    font-size: 20px;
    font-weight: bold;
    background-color: #41b883;
    border: 3px solid #35495e;
    border-radius: 30px;
}

button:hover {
    background-color: #35495e;
    color: #41b883;
}

hr {
    margin-top: 20px;
    width: 40%;
    border: double 4px #35495e;
}
</style>