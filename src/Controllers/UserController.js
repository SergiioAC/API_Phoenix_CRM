const knex = require('../database')

module.exports = {
    async Index( req, res ) {
        const results = await knex('processos')
                  return res.json(results) 
    },
    async create(req, res) {
        //const { Nome } = req.body
        //await knex('users').insert(req.body)
       //console.log(req.body)
       try {
        const { Nome } = req.body
        const { Email } = req.body
        const { Cpf_Cnpj } = req.body
        await knex('processos').insert(
           { Nome , Email , Cpf_Cnpj }
        )
        return res.status(201).send()
       } catch (erro) {
            next( error)
       }
    },
    async update(req, res, next ) {
        try {
            const { Nome } = req.body
            const { Email } = req.body
            const { Cpf_Cnpj } = req.body
            const { id } = req.params
            await knex('processos')
            .update({ Nome , Email , Cpf_Cnpj })
            .where( { id } )

            return res.send()

        } catch (error) {
            next(error)
        }    
        
    },
    async delete(req, res, next ) {
        try {
            const { id } = req.params
            await knex('processos')
            .where( { id } )
            .del()
            return res.send()

        } catch (error) {
            next(error)
        }    
        
    }                      
}