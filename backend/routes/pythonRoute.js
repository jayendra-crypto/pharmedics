import express from 'express'
const router = express.Router()
import fetch from 'node-fetch';



router.route("/").post(async (req, res) => {

    const { symptoms } = req.body.data;
    if (symptoms != '') {
        const formattedData = symptoms?.map((item) => `${item}`).join(',')
        const potter = await fetch(`http://127.0.0.1:5000/disease_predict/${formattedData}`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        }).then(response => response.json())
            .then(d => {
                res.json(d)
            }).catch(err => {
                console.log(err)
            });
    }

})

export default router