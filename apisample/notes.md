01. expressjs kurulumu
    npx express-generator
    npm install
    npm start

02. nodemon paketinin eklenmesi
    "dev": "nodemon ./bin/www"

03. mongoose eklenmesi
    npm i mongoose
    appjs içine mongoose import edildi.  
        const mongoose=require('mongoose');

04. mongoDB bağlantısının kurulması
    appjs içinde bağlantı kuruldu
        mongoose.connect('mongodb+srv://hyildiz1217:gs36231445gs@dbcloud.3wq6lks.mongodb.net/apiSampleDB')
        .then(()=>console.log('Connection Succesful!'))
        .catch((err)=>console.log('Connection Failed!',err))

05. modellerin oluşturulması
    messageModel oluşturuldu ve bu modelde bir Schema tasarlandı
        const mongoose=require('mongoose');
        const Schema=mongoose.Schema;

        const messageSchema=new Schema({
            fullname:{type:String, required:true},
            email:{type:String},
            message:{type:String, required:true},
            subject:{type:String,required:true},
            timestamp:{type:Date,default:Date.now}
        })
        module.exports=mongoose.model('Message',messageSchema);

06. Route kodlaması
    messageRoutes.js içine get post put delete routelarının eklenmesi, get ile alakalı çeşitli kombinasyonların sağlanması

07. route import edilmesi(appjs içine) ve kullanıma açılması
    const messageRouter=require('./routes/messageRoutes');
    app.use('/message', messageRouter);

08. dotenv paketinin eklenmesi
    npm i dotenv
    .env dosyasını oluşturup içine database yolu ve adı eklendi
        MONGODB_URI='mongodb+srv://hyildiz1217:gs36231445gs@dbcloud.3wq6lks.mongodb.net'
        MONGODB_DATABASE='ApiSampleDB'   

09. appjs e dotenv  import edildi
    require('dotenv').config()

10. .env deki adresleme mongoose.connect e eklendi
    mongoose.connect(process.env.MONGODB_URI + process.env.MONGODB_DATABASE)



