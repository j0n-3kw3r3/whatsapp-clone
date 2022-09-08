const cors = require('cors');
const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://localhost:3000']
    }
})
io.use(cors())

io.on('connection', async  socket => {
    const id = await socket.handshake.query.id
    socket.join(id)


    socket.on('send-message', ({ recipients, text }) => {
        console.log(recipients, text)
        recipients.foreach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})
