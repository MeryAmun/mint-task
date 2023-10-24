const express = require("express")

const app = express()

const { Client,GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] })


const USER_ID = 1165900018918637590;
let user = client.users.cache.get(USER_ID);
console.log(user) 
const PORT = 5000;

app.listen(PORT,() => {
    if (user) {
        
        console.log('yessss!!!',user,`listening to ${PORT}`)
      }
})