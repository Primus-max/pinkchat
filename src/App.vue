<template>
    <div class="view login" v-if="!state.username">
        <form class="login-form" @submit.prevent="Login">
            <div class="form-inner">
                <h1>Авторизоваться</h1>
                <label for="username">Имя пользователя</label>
                <input v-model="inputUSerName" type="text" placeholder="Введите ваше имя..."/>
                <input type="submit" value="Авторизоваться"/>
            </div>
        </form>
    </div>

    <div class="view chat" v-else>
        <header>
            <button class="logout">Выйти</button>
            <h1>Привет {{state.username}}</h1>
        </header>
        <section class="chat-box">
            // Messages
        </section>
        <footer>
            <form @submit.prevent="sendMessage">
                <input type="text" placeholder="Есть что сказать?" v-model="inputMessage"/>
                <input type="submit" value="Send">
            </form>
        </footer>
    </div>

</template>

<script>

    import database from './db'
    import {reactive, onMounted, ref} from "vue";

    export default {
        name: 'App',
        setup: () => {
            const inputUSerName = ref('')
            const inputMessage = ref('')

            const state = reactive({
                username: "",
                messages: []
            })

            const Login = () => {
                if (inputUSerName.value != '' || inputUSerName.value != null) {
                    state.username = inputUSerName.value
                    inputUSerName.value = ""
                }
            }

            const sendMessage = () => {
                console.log(typeof database)
                // const messagesRef = database().ref("messages")

                if (!inputMessage.value) {
                    return
                }

                const message = {
                    username: state.username,
                    content: inputMessage.value

                }

                // messagesRef.push(message)
                inputMessage.value = ''
            }


            return {inputUSerName, Login, state, inputMessage, sendMessage}
        }

    }
</script>

<style lang="scss">

</style>
