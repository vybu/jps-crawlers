require('babel-polyfill');
import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
import crawlerCrontab from '../../../crontab'

const configPath = path.join(__dirname, '../../..', '.jps-crawlerrc');

const app = express();
app.use(express.static(path.join(__dirname, '../../..', 'public')));
app.use(bodyParser());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../../..', 'public/index.html'))
});

app.get('/options', async function(req, res) {
    const config = await readConfig();
    res.json(config); // TODO add fail
});

app.post('/options', async function(req, res) {
    try {
        const oldConfig = await readConfig();
        const newConfig = req.body;

        await writeConfig(newConfig);
        res.json({success: true});

        if (oldConfig.general.crawlInterval !== newConfig.general.crawlInterval) {
            crawlerCrontab(newConfig)
        }

    } catch (e) {
        res.json({success: false, error: e});
    }

});

app.listen(process.env.PORT || 3000);
console.log('Listening on port:', process.env.PORT || 3000);


function readConfig() {
    return new Promise((resolve)=> {
        fs.readFile(configPath, (err, content)=> {
            resolve(JSON.parse(content));
        })
    })

}

function writeConfig(data) {
    return new Promise((resolve, reject)=> {
        fs.writeFile(configPath, JSON.stringify(data), (error)=> {
            error && reject(error);
            resolve()
        })
    })

}