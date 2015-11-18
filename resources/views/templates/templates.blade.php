<script id="SearchUserResult" type="text/template">

    <td class="id class-lg-1"><a href="{{url()}}/admin/user/<%= id %>" ><%= id %></a></td>
    <td class="email"><a href="{{url()}}/admin/user/<%= id %>" ><%= email %></a></td>
    <td class="username"><%= firstname %></td>
    <td class="name"><%= name %></td>
    <td class="role"><%= role.slug %></td>
    <td class="created_at"><%=  moment(created_at).locale('fr').format('lll') %></td>

</script>

<script id="PointsHandlerTemplate" type="text/template">
    <div class="gerer-points">
        <h2 class="">Tableau des points</h2>

        <div class="recap-points row">
            <div class="text-center"><%= id %></div>
            <div class="points text-success col-lg-6"><span><%= total_points %></span> <small>points acquis</small></div>
            <div class="points text-primary col-lg-6"><span><%= pending_points %></span> <small>points en attente</small></div>
        </div>

        <div class="row col-lg-12 form-container">
            <form name="form-points">
            <div class="form-group row">
                <label class="col-lg-4 control-label">Ajouter des points</label>
                <div class="input-group">
                    <input type="text" id="add_points" name="add_points" value="" placeholder="Nombre de points à ajouter" class="form-control">
                    <div class="input-group-addon"><a href="#" id="add">+</a></div>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-4 control-label">Retirer des points</label>
                <div class="input-group">
                    <input type="text" id="remove_points" name="remove_points" value="" placeholder="Nombre de points à retirer" class="form-control">
                    <div class="input-group-addon"><a href="#" id="remove">-</a></div>
                </div>
            </div>
        </form>
        </div>
    </div>
</script>