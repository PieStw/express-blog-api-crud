const express = require("express");
const router = express.Router();
const posts = require("./../data/postDB")

router.get("/", (req, res) => {
    res.json(posts);
});

router.get("/:id", (req, res) => {

    const {id} = req.params;

    if(isNaN(id)){
        res.status(400).json({ error: "Inserisci un numero" });
    }

    const postSelected = posts.find((post) => post.id === parseInt(id)) 
    
    if(postSelected)
        res.json(postSelected);
    
    else
        res.status(404).json({ error: "Post non trovato" });

});

router.post("/", (req, res) => {
    const newPost = {id: 5, titolo: "Post5", immagine: "img/ciambellone.jpeg", contenuto: "Lorem ipsum5", tags: ["sole5", "mare5"]}
    res.json(newPost);
});

router.put("/:id", (req, res) => {

    const {id} = req.params;

    if(isNaN(id)){
        res.status(400).json({ error: "Inserisci un numero" });
    }

    const postSelected = posts.find((post) => post.id === parseInt(id)) 
    
    if(postSelected){
        postSelected.contenuto = "MODIFICATO PARZIALMENTE";
        res.json(postSelected);
    }
    
    else
        res.status(404).json({ error: "Post non trovato" });

});

router.patch("/:id", (req, res) => {

    const {id} = req.params;

    if(isNaN(id)){
        res.status(400).json({ error: "Inserisci un numero" });
    }

    const postSelected = posts.find((post) => post.id === parseInt(id)) 
    
    if(postSelected){
        postSelected.contenuto = "MODIFICATO TOTALMENTE";
        res.json(postSelected);
    }
    
    else
        res.status(404).json({ error: "Post non trovato" });

});

router.delete("/:id", (req, res) => {

    const {id} = req.params;

    if(isNaN(id)){
        res.status(400).json({ error: "Inserisci un numero" });
    }

    const postSelected = posts.find((post) => post.id === parseInt(id)) 
    
    if(postSelected){
        posts.splice(id, 1);
        res.json({postDeleted: postSelected, posts: posts   });
    }
    
    else
        res.status(404).json({ error: "Post non trovato" });

});

module.exports = router;