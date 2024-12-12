const express = require('express');
const axios = require('axios');
require('dotenv').config();  // Pour charger les variables d'environnement

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
console.log('Clé API chargée :', process.env.OPENAI_API_KEY);

app.post('/ask', async (req, res) => {
    const question = req.body.question;

    if (!question) {
        return res.status(400).json({ error: "La question est manquante." });
    }

    try {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "ous êtes un agent virtuel de la mairie de Saint-Grégoire. Votre rôle est de conseiller les habitants en vous basant sur les informations du site officiel de la mairie de Saint-Grégoire, les décrets de Rennes Métropole et de Bretagne, ainsi que les ressources gouvernementales pertinentes. Fournissez des réponses précises et des redirections utiles si nécessaire et repond de manière assez courte et si tu as des liens met les sous forme de balise HTML type : <a href='le_lien'></a>:" },
                { role: "user", content: question }
            ],
            max_tokens: 500,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,  
            }
        });

        const answer = response.data.choices[0].message.content.trim();
        res.json({ answer });
    } catch (error) {
        // Affichez tous les détails possibles de l'erreur
        if (error.response) {
            console.error("Erreur lors de l'appel à l'API OpenAI :", error.response.status, error.response.data);
        } else {
            console.error("Erreur lors de l'appel à l'API OpenAI :", error.message);
        }
        res.status(500).json({ error: "Erreur avec l'API OpenAI." });
    }
});


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
