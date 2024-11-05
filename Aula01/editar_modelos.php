<h1>Editar Modelos</h1>

<form action="?page=salvar_modelos" method="post">
<input type="hidden" name="acao" value="cadastrar">

<div class="card" style="width: 30rem;">

    <div>
        <div class="container mb-3">

        <label class="mt-3">Marca</label>
        <input type="text" name="modelo" class="form-control" placeholder="Escolha uma marca">

            <label class="mt-3">Modelo</label>
            <input type="text" name="modelo" class="form-control" placeholder="Digite o nome do modelo">

            <label class="mt-3">Ano do Modelo</label>
            <input type="text" name="modelo" class="form-control" placeholder="Digite o ano do modelo">

            <label class="mt-3">Cor do Modelo</label>
            <input type="text" name="modelo" class="form-control" placeholder="Digite a cor do modelo">

            <label class="mt-3">Placa do Modelo</label>
            <input type="text" name="modelo" class="form-control" placeholder="Digite a placa do modelo">


        </div>
        <div class="container mb-3">
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
    </div>

</div>
</form>