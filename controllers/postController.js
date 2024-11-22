const posts = require("./../data/postDB")

function index(req, res){
    const tag = req.query.tag;

    if(tag){
        const newPosts = posts.filter((post) => {
            return post.tags.includes(tag.toLowerCase())
        })
    
        res.json({posts: newPosts, numeroElementi: newPosts.length});
    }
    else res.json({posts: posts, numeroElementi: posts.length});
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
    console.log(req.body);
    const {titolo, immagine, contenuto, tags} = req.body;
    const newPost = {id: posts.at(-1).id + 1, titolo: titolo, immagine: immagine, contenuto: contenuto, tags: tags}
    posts.push(newPost);
    res.json(posts);
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
        console.log({postDeleted: postSelected, posts: posts});
        res.status(204).json();
    }
    
    else
        res.status(404).json({ error: "Post non trovato" });

}


module.exports = {index, show, store, update, modify, destroy};