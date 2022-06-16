<template>
    <div class="view login" v-if="!state.username">
        <form class="login-form" @submit.prevent="Login">
            <div class="form-inner">
                <h1>Авторизоваться</h1>
                <label for="username">Имя пользователя</label>
                <input v-model="inputUSerName" type="text" placeholder="Введите ваше имя..." autofocus/>
                <input type="submit" value="Авторизоваться"/>
            </div>
        </form>
    </div>

    <div class="view chat" v-else>
        <header>
            <button class="logout" @click="Logout">Выйти</button>
            <h1>Привет {{state.username}}</h1>
        </header>

        <section class="chat-box">
            <div
                    v-for="message in state.messages"
                    :key="message.key"
                    :class="(message.username === state.username ? 'message current-user': 'message')"
            >
                <div class="message-inner">
                    <div class="username">{{ message.username }}</div>
                    <div class="content">{{ message.content }}</div>
                </div>
            </div>
        </section>

        <footer>
            <form @submit.prevent="sendMessage">
                <input type="text" placeholder="Есть что сказать?" v-model="inputMessage" autofocus/>
                <input type="submit" value="Send">
            </form>
        </footer>
    </div>

</template>

<script>

    import db from './db'
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

            const Logout =()=>{
                state.username = ''
            }

            const sendMessage = () => {
                const messagesRef = db.database().ref("messages")

                if (!inputMessage.value) {
                    return
                }

                const message = {
                    username: state.username,
                    content: inputMessage.value

                }

                messagesRef.push(message)
                inputMessage.value = ''
            }

            onMounted(() => {
                const messagesRef = db.database().ref("messages")

                messagesRef.on('value', snapshot => {
                    const data = snapshot.val()
                    let messages = []

                    if (data) {
                        Object.keys(data).forEach(key => {
                            messages.push({
                                id: key,
                                username: data[key].username,
                                content: data[key].content
                            })
                        })
                    }
                    state.messages = messages
                })
            })


            return {inputUSerName, Login, state, inputMessage, sendMessage, Logout}
        }

    }
</script>

<style lang="scss">

</style>
