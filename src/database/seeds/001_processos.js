/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('processos').del()
  await knex('processos').insert([
    {Nome: 'João',Email: 'GGG@GGG', Cpf_Cnpj: '123456789'},
    {Nome: 'Paulo',Email: 'PPPP@GGG', Cpf_Cnpj: '7645454545'},
    {Nome: 'Maria',Email: 'MMMMM@GGG', Cpf_Cnpj: '9999999'},
  ]);
};
