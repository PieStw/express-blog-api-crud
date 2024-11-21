const posts = require("./../data/postDB")

function index(req, res){
    res.json(posts);
}

function show(req, res){
    const {id} = req.params;

    if(isNaN(id)){
        res.status(400).json({ error: "Inserisci un numero" });
    }

    const postSelected = posts.find((post) => post.id === parseInt(id)) 
    
    if(postSelected)
        res.json(postSelected);
    
    else
        res.status(404).json({ error: "Post non trovato" });

}

function store(req, res){
    const newPost = {id: 5, titolo: "Post5", immagine: "img/ciambellone.jpeg", contenuto: "Lorem ipsum5", tags: ["sole5", "mare5"]}
    res.json(newPost);
}

function update(req, res){
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
}

function modify(req, res){
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

}

function destroy(req, res){
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

}


module.exports = {index, show, store, update, modify, destroy};