const express = require("express");
const router = express.Router();

const posts = [
    {id: 0, titolo: "Post", immagine: "img/ciambellone.jpeg", contenuto: "Lorem ipsum", tags: ["sole", "mare"]},
    {id: 1, titolo: "Post1", immagine: "img/cracker_barbabietola.jpeg", contenuto: "Lorem ipsum", tags: ["mare"]},
    {id: 2, titolo: "Post2", immagine: "img/pane_fritto_dolce.jpeg", contenuto: "Lorem ipsum", tags: ["radio"]},
    {id: 3, titolo: "Post3", immagine: "img/pasta_barbabietola.jpeg", contenuto: "Lorem ipsum", tags: ["vip"]},
    {id: 4, titolo: "Post4", immagine: "img/torta_paesana.jpeg", contenuto: "Lorem ipsum", tags: ["tv"]},
];

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