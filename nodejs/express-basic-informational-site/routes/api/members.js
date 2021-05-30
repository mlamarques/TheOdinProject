const express = require('express')
const router = express.Router()
const uuid = require('uuid')

const members = require('../../data')

// Get all members
router.get('/', (req, res) => {
    res.json(members)
})

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `Member with the id of ${req.params.id} not found` })
    }
})

// Create Member
router.post('/', (req, res) => {
    // res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
       return res.status(404).json({ msg: 'Please inclue a name and email' })
    }

    members.push(newMember)
    // res.json(members)
    res.redirect('/')
})

// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        const updateMember = req.body
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name
                member.email = updateMember.email ? updateMember.email : member.email

                res.json({ msg: 'Member updated', member })
            }
        })
    } else {
        res.status(400).json({ msg: `Member with the id of ${req.params.id} not found` })
    }
})

// Delete Member
// Get single member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json({
            msg: `Member deleted`,
            members: members.filter(member => member.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({ msg: `Member with the id of ${req.params.id} not found` })
    }
})


module.exports = router