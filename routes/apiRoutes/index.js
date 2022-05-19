const router = require('express').Router();
const {createNote} = require('../../lib/notes')
const notes  = require('../../db/db.json');

router.get('/notes', (req, res) => {

    //console.log(notes);
    res.json(notes);

});

router.post('/notes', (req,res) => {
    
    // creates id based on position in array
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});

module.exports = router;