/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('processos',function(table) {
    table.increments('id')
    table.text('Nome'        ).notNullable()
    table.text('Email'       ).notNullable()
    table.text('Cpf_Cnpj'    ).notNullable()
    table.text('Telefone'    ).nullable()
    table.text('Cep'         ).nullable()
    table.text('Endereco'    ).nullable()
    table.text('Numero'      ).nullable()
    table.text('Complemento' ).nullable()
    table.text('Cidade'      ).nullable()
    table.text('Uf'          ).nullable()
    table.text('Assunto'     ).nullable()
    table.text('Mensagem'    ).nullable()
    table.text('Quantidade'  ).nullable()
    table.text('id_midia'    ).nullable()
    table.text('id_Segmento' ).nullable()
    table.text('Id_produto'  ).nullable()
    table.text('Id_origem'   ).nullable()
    table.timestamp('Criacao' ).defaultTo(knex.fn.now())
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('processos')
};
